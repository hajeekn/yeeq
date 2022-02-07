const CACHE_NAME = "BLOGCACHE";
let cachelist = ["/offline/index.html"];
const white_list = /^([a-zA-Z\d-_\*@]+\.|)+(slqwq\.cn|superdo\.cf|hesiy\.cn|stackoverflow\.com|github\.com)$/g,
    sl_wl = /blog.slqwq.cn/g,
    proxy_endpoint = ["enpoint.jekfly.worker.dev"],
    sl_wl_ed = ["enpoint.jekfly.worker.dev", "hajeekns-blog.pages.dev"];
self.CACHE_NAME = "SWHelperCache", self.db = {
    read: e => new Promise(((t, n) => {
        caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)).then((function (e) {
            e.text().then((e => t(e)))
        })).catch((() => {
            t(null)
        }))
    })),
    read_arrayBuffer: e => new Promise(((t, n) => {
        caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)).then((function (e) {
            e.arrayBuffer().then((e => t(e)))
        })).catch((() => {
            t(null)
        }))
    })),
    write: (e, t) => new Promise(((n, r) => {
        caches.open(CACHE_NAME).then((function (r) {
            r.put(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`), new Response(t)), n()
        })).catch((() => {
            r()
        }))
    }))
}, self.addEventListener("install", (async function (e) {
    self.skipWaiting(), e.waitUntil(caches.open(CACHE_NAME).then((function (e) {
        return console.log("Opened cache"), e.addAll(cachelist)
    })))
})), self.addEventListener("fetch", (async e => {
    try {
        e.respondWith(handle(e.request))
    } catch (t) {
        e.respondWith(handleerr(e.request, t))
    }
}));
const handleerr = async (e, t) => new Response(`<h1>Service Worker 加载出错了</h1>\n    <b>${t}</b>`, {
    headers: {
        "content-type": "text/html; charset=utf-8"
    }
});
let cdn = {
    gh: {
        jsdelivr: {
            url: "https://cdn.jsdelivr.net/gh"
        },
        jsdelivr_fastly: {
            url: "https://fastly.jsdelivr.net/gh"
        },
        jsdelivr_gcore: {
            url: "https://gcore.jsdelivr.net/gh"
        },
        pigax_jsd: {
            url: "https://u.pigax.cn/gh"
        },
        pigax_chenyfan_jsd: {
            url: "https://cdn-jsd.pigax.cn/gh"
        }
    },
    combine: {
        jsdelivr: {
            url: "https://cdn.jsdelivr.net/combine"
        },
        jsdelivr_fastly: {
            url: "https://fastly.jsdelivr.net/combine"
        },
        jsdelivr_gcore: {
            url: "https://gcore.jsdelivr.net/combine"
        },
        pigax_jsd: {
            url: "https://u.pigax.cn/combine"
        },
        pigax_chenyfan_jsd: {
            url: "https://cdn-jsd.pigax.cn/combine"
        }
    },
    npm: {
        hajeekn: {
            url: "https://npm.slqwq.cn"
        },
        hajeekncf: {
            url:"https://unpkg.slqwq.cn"
        },
        jsdelivr: {
            url: "https://cdn.jsdelivr.net/npm"
        },
        zhimg: {
            url: "https://unpkg.zhimg.com"
        },
        unpkg: {
            url: "https://unpkg.com"
        },
        bdstatic: {
            url: "https://code.bdstatic.com/npm"
        },
        pigax_jsd: {
            url: "https://u.pigax.cn/npm"
        },
        pigax_unpkg: {
            url: "https://unpkg.pigax.cn/"
        },
        pigax_chenyfan_jsd: {
            url: "https://cdn-jsd.pigax.cn/npm"
        }
    }
};
const lfetch = async (e, t, n) => {
    let r = new AbortController;
    const s = async e => new Response(await e.arrayBuffer(), {
        status: e.status,
        headers: e.headers
    });
    return Promise.any || (Promise.any = function (e) {
        return new Promise(((t, n) => {
            let r = (e = Array.isArray(e) ? e : []).length,
                s = [];
            if (0 === r) return n(new AggregateError("All promises were rejected"));
            e.forEach((e => {
                e.then((e => {
                    t(e)
                }), (e => {
                    r--, s.push(e), 0 === r && n(new AggregateError(s))
                }))
            }))
        }))
    }), Promise.any(e.map((e => ((n = n || {}).signal = r.signal, new Promise(((t, c) => {
        fetch(e, n).then(s).then((e => {
            200 == e.status ? (r.abort(), t(e)) : c(e)
        }))
    }))))))
}, handle = async function (e) {
    const t = e.url,
        n = t.split("/")[2];
    let r = [];
    if (n.match(white_list)) {
        let r = [];
        for (let e in proxy_endpoint) r.push(t.replace(n, proxy_endpoint[e]));
        const s = new Headers;
        for (let [t, n] of e.headers) s.set(t, n);
        return s.set("c-origin", n), s.set("c-type", "CORS"), lfetch(r, 0, {
            method: e.method,
            headers: s,
            body: e.body
        }).then((function (t) {
            if (!t) throw "error";
            return caches.open(CACHE_NAME).then((function (n) {
                return n.delete(e), n.put(e, t.clone()), t
            }))
        })).catch((function (t) {
            return caches.match(e).then((function (e) {
                return e || new Response(null, {
                    status: 500
                })
            }))
        }))
    }
    for (let s in cdn)
        for (let c in cdn[s])
            if (n == cdn[s][c].url.split("https://")[1].split("/")[0] && t.match(cdn[s][c].url)) {
                r = [];
                for (let e in cdn[s]) r.push(t.replace(cdn[s][c].url, cdn[s][e].url));
                return t.indexOf("@latest/") > -1 ? lfetch(r) : caches.match(e).then((function (t) {
                    return t || lfetch(r).then((function (t) {
                        return caches.open(CACHE_NAME).then((function (n) {
                            return n.put(e, t.clone()), t
                        }))
                    }))
                }))
            } return fetch(e)
};