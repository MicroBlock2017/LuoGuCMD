var pagekey = "1584522792:saAqr9G7PpJj0H5EAscgVD2RfJbcgG1YWR4VHh9GrJY="
var selfdefinepagekey = false;
var readline = require('readline');
var Cookie = "__client_id=[clientid]; _uid=[youruid];";
var cheerio = require('cheerio');
var umdid
// Wait for user's response.
var userid;
var cnzzeid
//创建readline接口实例
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// question方法
console.log("[LuoGuCmd V0.1 (Alpha) <By Micro>]\nThis is a free Luogu client for all OIer\nThe GPL protocol is used, and the source code is stored on Github.")

main();

function main() {
    rl.question("> ", function (c) {
        var cmd = c.split(" ");
        switch (cmd[0]) {
            case "login": {
                if (cmd.length == 1) { console.log("ToDo:记忆帐号密码:)"); main(); }
                else if (cmd.length == 3) {
                    login(cmd[1], cmd[2], "");
                } else {
                    console.log("登录错误：没有与参数列表匹配的命令\n例如:\nlogin 123456 654321\n - 帐号123456 密码654321\nlogin\n - 登录记忆帐号（还没做）")
                    main()
                }
                //console.log("登录模块被作者放弃了，原因是...总是报超时，所以如果想要提交题目，在luogu.com.cn中登录吧（逃")
                break;
            }
            case "me": {
                getuserinformation()

                break;
            }
            case "setcookie": {
                Cookie = cmd[1]
                main
                break;
            }
            case "help": {
                if (cmd.length == 1) {
                    console.log("目前支持的命令:\nlookat <题目编号> -- 查看题目\nclear -- 清空\nhelp -- 显示此列表\nexit -- 退出")
                } else if (cmd.length == 2) {
                    switch (cmd[1]) {
                        case "lookat": {
                            console.log("lookat的格式:\n> lookat <题目编号>\n例子：\n> lookat P100\n");
                            break;
                        }
                        default: {
                            console.log("没有对应的解释或找不到此命令")
                        }
                    }


                } else {
                    console.log("查找题目错误：没有与参数列表匹配的lookat\nlookat的格式:\n> lookat <题目编号>\n例子：\n> lookat P100\n")
                }
                main();
                break;
            }
            case "getkey": {
                if (cmd.length != 1) {
                    getcsrfkey(true)
                } else {
                    getcsrfkey(false)
                }
                break;
            }
            case "loadcookie": {
                if (cmd.length == 3) {
                    console.log("正在解析Cookie...");

                    umdid = cmd[1]
                    console.log("UM_distinctid:\n" + umdid)
                    cnzzeid = cmd[2].split("-%26ntime%3D")[0]
                    cnzzeid += "-%26ntime%3D"
                    console.log("CNZZ_EID:\n" + cnzzeid + "%TIME%")
                    console.log("Cookie解析完毕.")
                }
                main();
                break;
            }
            case "setkey": {
                pagekey = cmd[1]
                console.log("将key设置为" + pagekey)
                selfdefinepagekey = true
                main();
                break;
            }

            case "clear": {
                console.clear();
                console.log("[LuoGuCmd V0.1 (Alpha) <By Micro>]");
                main();
                break;
            }
            case "lookat": {
                if (cmd.length == 2) {
                    console.log("正在查找题目：" + cmd[1]);
                    lookat(cmd[1]);
                }
                else {
                    console.log("查找题目错误：没有与参数列表匹配的lookat\nlookat的格式:\n> lookat <题目编号>\n例子：\n> lookat P100\n")
                }
                break;
            } Date.now()
            default: {
                if (cmd[0] == "exit") { console.log("Bye."); rl.close() }
                else { console.log("找不到命令" + cmd[0]); main(); }
                break;
            }
        }



        // 不加close，则不会结束
        //rl.close();
    });
}

// close事件监听
rl.on("close", function () {
    // 结束程序
    // process.exit(0);
});

function lookat(bh) {
    var https = require('https');

    var pageUrl = 'https://www.luogu.com.cn/api/problem/detail/' + bh;

    https.get(pageUrl, function (res) {
        var html = '';
        res.on('data', function (data) {
            html += data;
        });
        res.on('end', function () {
            //数据获取完，执行回调函数
            callback(html);
        });
    });

    function callback(html) {
        var $ = cheerio.load(html);

        var data = JSON.parse($("body").text());
        if (data.data.FullPID != undefined) {

            console.log("\n" + data.data.FullPID + " " + data.data.Name);
            console.log("题目背景：" + formatstr(data.data.Background))
            console.log("题目描述：" + formatstr(data.data.Description))
            console.log("输入格式：" + formatstr(data.data.InputFormat) + "\n输出格式：" + formatstr(data.data.OutputFormat));
        } else {
            console.log("获取出错！请检查题目编号和网络连接.\n如果你能正常访问该题，请联系作者\nQQ:1715311957")
        } main();
    }
}
function formatstr(string) {
    string = string.replace(/\/problem\//g, "lookat ").replace(/```haskell/g, "[").replace(/```/g, "]").replace(/!\[\]/, "图片：")
    return string;
}
function getuserinformation() {




    var pageUrl = 'https://www.luogu.com.cn/user/notification?_contentOnly=1';
    fetch(pageUrl, {
        headers: {
            "cookie": Cookie
        },
        credentials: 'includes'
    }).then((a) => { return a; }).then((response) => {
        return response.json();
    })
        .then((data) => {
            var m = data;
            // console.log(m);
            if (m.code != undefined) {
                console.log("Hi," + m.currentUser.name + "\n你的UID是：" + m.currentUser.uid + "\n")
                userid = m.currentUser.uid;
                main();
            } else {
                console.log("获取出错！请检查题目编号和网络连接.\n如果你能正常访问www.luogu.com.cn/user/notification，请联系作者\nQQ:1715311957")
                rl.close();
            }

        })



}
const fetch = require('node-fetch')


var loginheader = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-length": "66",
    "content-type": "application/json",
    "cookie": Cookie,
    "origin": "https://www.luogu.com.cn",
    "referer": "https://www.luogu.com.cn/",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/82.0.4083.0 Safari/537.36 LuoGuCmd",
    "x-csrf-token": pagekey,
}


function login(username, passwd, yzm) {
    rl.question("请输入验证码： ", function (c) {
        getcsrfkey(0, function () {
            fetch("https://www.luogu.com.cn/api/auth/userPassLogin", {
                headers: loginheader,
                headerss: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": pagekey,
                    "user-gaent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/82.0.4083.0 Safari/537.36",
                    "cookie": Cookie
                },
                credentials: 'includes',
                body: JSON.stringify({
                    username: username,
                    password: passwd,
                    captcha: c
                }),
                method: "POST"
            }).then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                main();
            })
        })


    })
}


function getcsrfkey(shown, back) {

    if (selfdefinepagekey) {
        console.log("已经使用自定义Pagekey，如需要自动获取请重启(查看内容请加-shown)")
        if (shown) console.log(pagekey)
        if (back != undefined) {

            back()
        } else
            main();
    } else {
        var https = require('https');
        //Cookie=""
        var pageUrl = 'https://www.luogu.com.cn';

        https.get(pageUrl, function (res) {
            //console.log(res);
            var html = '';
            res.on('data', function (data) {
                html += data;
            });
            res.on('end', function () {
                for (var x = 0; x < res.rawHeaders.length; x++) {
                    //console.log(res.rawHeaders[x])
                    if ("Set-Cookie" == res.rawHeaders[x]) {
                        x++;
                        var _tmpa = res.rawHeaders[x].split(" ");
                        for (var mm = 0; mm < _tmpa.length; mm++) {
                            // console.log(_tmpa[mm].split("=")[0])
                            if (_tmpa[mm].split("=")[0] != "__client_id") continue;
                            //  Cookie=_tmpa[mm]+" "+ umdid+" "+" _uid=000000"+"; " +cnzzeid+ Math.round(Date.now()/1000);
                            break;
                        }

                        //    break;
                    }
                }
                //Cookie+=;
                console.log("Cookie获取成功:" + Cookie)
                //数据获取完，执行回调函数
                callback(html);
            });
        });

        function callback(data) {
            var $ = cheerio.load(data);
            //console.log(data);
            console.log("正在获取csrf-token")
            pagekey = undefined;
            $("meta").each(function () {
                if ($(this)[0].attribs.name == "csrf-token") {
                    console.log("获取成功！(如需查看内容请加-shown)")
                    pagekey = $(this)[0].attribs.content
                    if (shown) console.log($(this)[0].attribs.content)
                }
            });

            if (pagekey == undefined) {
                console.log("获取csrf-token失败，请反馈给作者\nQQ:1715311957")
            } {
                if (back != undefined) {
                    back()
                } else
                    main();
            }
        }
    }
}
