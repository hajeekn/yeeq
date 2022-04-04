const white_list = /^([a-zA-Z\d-_\*@]+\.|)+(slqwq\.cn|stackoverflow\.com|github\.com)$/g

const proxy_endpoint = [
    'endpoint.jekfly.workers.dev'
]

//修改上面两个变量


const CACHE_NAME = 'IProxyCache';
let cachelist = [];
self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});
self.addEventListener('fetch', async event => {
    try {
        event.respondWith(handle(event.request))
    } catch (msg) {
        event.respondWith(handleerr(event.request, msg))
    }
});
const handleerr = async (req, msg) => {
    return new Response(`<h1>IProxy遇到了致命错误</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}
//固定头

const lfetch = async (urls, url, init) => {
    let controller = new AbortController();
    const PauseProgress = async (res) => {
        return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
    };
    if (!Promise.any) {
        Promise.any = function (promises) {
            return new Promise((resolve, reject) => {
                promises = Array.isArray(promises) ? promises : []
                let len = promises.length
                let errs = []
                if (len === 0) return reject(new AggregateError('All promises were rejected'))
                promises.forEach((promise) => {
                    promise.then(value => {
                        resolve(value)
                    }, err => {
                        len--
                        errs.push(err)
                        if (len === 0) {
                            reject(new AggregateError(errs))
                        }
                    })
                })
            })
        }
    }
    return Promise.any(urls.map(urls => {
        init = init || {}
        init.signal = controller.signal
        return new Promise((resolve, reject) => {
            fetch(urls, init)
                .then(PauseProgress)
                .then(res => {
                    if (res.status == 200) {
                        controller.abort();
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
        })
    }))
}
//支持自定义Init的并发fetch


const handle = async function (req) {
    const urlStr = req.url
    const domain = (urlStr.split('/'))[2]
    if (domain.match(white_list)) {
        let proxy_url = []
        for (let i in proxy_endpoint) {
            proxy_url.push(urlStr.replace(domain, proxy_endpoint[i]))
        }
        const proxy_header = new Headers()

        for (let [key, value] of req.headers) {
            proxy_header.set(key, value)
        }
        proxy_header.set('c-origin', domain)
        //在header中指定实际域名
        proxy_header.set('c-type', 'CORS')
        //还原整个fetch
        return lfetch(proxy_url, urlStr, {
            method: req.method,
            headers: proxy_header,
            body: req.body
        }).then(function (res) {
            if (!res) { throw 'error' }
            return caches.open(CACHE_NAME).then(function (cache) {
                cache.delete(req);
                cache.put(req, res.clone());
                return res;
            });
        }).catch(function (err) {
            return caches.match(req).then(function (resp) {
                return resp || new Response(null,{status:500)
            })
        })
    }

    return fetch(req)
}