window.setCustom = () => {};
(async () => {

    window.mCh = {
        init: () => {
            window.messageChannel = new MessageChannel();
            navigator.serviceWorker.controller.postMessage({
                type: 'INIT',
            }, [messageChannel.port2]);
        },
        send: (data) => {

            return new Promise((resolve, reject) => {
                const uuid = (() => {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0,
                            v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                })()
                navigator.serviceWorker.controller.postMessage({
                    type: 'DATA',
                    data: data,
                    id: uuid
                });
                setTimeout(() => {
                    reject({
                        message: 'timeout',
                        ok: false
                    })
                }, 2000);
                messageChannel.port1.onmessage = (event) => {
                    if (event.data.id === uuid) {
                        resolve({
                            data: event.data.data,
                            ok: true
                        })
                    };
                }
            })
        }
    }

    function ranN(minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    }


    if ('serviceWorker' in navigator) {
        if (Number(window.localStorage.getItem('WooBlogHelper_Set')) < 1) {
            console.log('检测到您的浏览器没有安装WooBlogHelper，开始注册')
            window.stop()
            window.localStorage.setItem('WooBlogHelper_Set', 1)
            document.write(`稍安勿躁,我们正在安装WooBlogHelper插件,这大概需要几百毫秒...`)
        }
        navigator.serviceWorker.register(`/sw.js?time=${ranN(1, 88888888888888888888)}`)
            .then(async () => {
                if (Number(window.localStorage.getItem('WooBlogHelper_Set')) < 2) {
                    console.log('WooBlogHelper安装是成功的！\n将在一秒后尝试激活！')

                    setTimeout(() => {
                        window.localStorage.setItem('WooBlogHelper_Set', 2)
                        window.location.search = `?time=${ranN(1, 88888888888888888888)}`
                    }, 100)
                }
                if (Number(window.localStorage.getItem('WooBlogHelper_Set')) == 2) {
                    await Promise.all([
                        fetch('/offline/'),
                        fetch('https://npm.elemecdn.com/chenyfan-os@0.0.0-r6')
                    ]);
                    window.localStorage.setItem('WooBlogHelper_Set', 3)
                }
            })
            .catch(err => console.error(`WooBlogHelperError:${err}`))
    } else {
        console.error(`Oops, your browser doesn't support ServiceWorker!`)
    }
    /*
                                      window.notyf = new Notyf();
                                      if ('serviceWorker' in navigator) {
                                          window.addEventListener('load', async () => {
                                              navigator.serviceWorker.register(`/sw.js?time=${ranN(1, 88888888888888888888)}`)
                                                  .then(async reg => {
                                  
                                                      if (window.localStorage.getItem('WooBlogHelper_Error') != "true") {
                                                          notyf.success('WooBlogHelper安装是成功的！\n将在一秒后尝试激活！')
                                                          window.localStorage.setItem('WooBlogHelper_Error', 'true')
                                                          setTimeout(() => {
                                                              window.location.search = `?time=${ranN(1, 88888888888888888888)}`
                                                          }, 1000)
                                  
                                                      }
                                                  }).catch(err => {
                                                      notyf.error('WooBlogHelper安装失败！原因:' + err);
                                                      //console.log(err)
                                                  })
                                  
                                  
                                  
                                          });
                                      } else {
                                          notyf.error('WooBlogHelper安装失败！原因:浏览器不支持ServiceWorker')
                                      }*/
})()