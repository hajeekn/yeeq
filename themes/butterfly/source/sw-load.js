navigator.serviceWorker && window.addEventListener("load", (async () => {
    if ('serviceWorker' in navigator) {
        if (Number(window.localStorage.getItem('WooBlogHelper_Set')) < 1) {
            console.log('检测到您的浏览器没有安装 Helper Service，开始注册')
            window.stop()
            navigator.serviceWorker.register(`./sw.js?time=${(new Date).getTime()}`).then((async e => {
                "true" != window.localStorage.getItem("install-sw") && (window.localStorage.setItem("install-sw", "true"), setTimeout((() => {
                    window.location.search = `?time=${(new Date).getTime()}`
                }), 1e3))
            })).catch((e => {}))
            window.localStorage.setItem('WooBlogHelper_Set', 1)
        }
        if (Number(window.localStorage.getItem('WooBlogHelper_Set')) > 1) {
            console.log('你的博客已经安装 Helper Service 了')
            self.addEventListener('install', event => {
                self.skipWaiting()
            })
            window.localStorage.getItem("freshing") && (windows.localStorage.setItem("freshing","false"))
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (window.localStorage.getItem("freshing")) {
                    return
                }
                windows.localStorage.setItem("freshing","true")
                window.location.reload();
            })
        }
    }
}));