# 这是一个没做完的洛谷CMD客户端 #


###0.1 A2来了！！！
###终于可以提交代码了！！！
####功能演示在最下面，要使用所有功能必须登录.
####注意：因为是测试版，没有打包，也没有package.json,所以用到的库请自行npminstall一下下，很简单的！
####库的列表在指令下面
-------------------------------------------------------
指令：

```
help（压根没写全，所有命令见本表，别看help）
```
```
login:
 - login
 详细过程请见输入后的提示
```
```
me:
  - me
  获取自身信息，需要登录，测试登录成功用这个，如果"无法获取"或报错则不成功
```
```
setcookie:
  - setcookie <cookie>
  手动设置Cookie的值 (只能改一个，中间不能有空格,开发用)
```
```
getkey:
  - getkey [-shown]
  获得洛谷的x-csrf-token，以便提交代码时使用（不用管啦～）
  加任意参数可以看见具体获得的东西
  ```
```
clear:
  - clear
  清屏，等同于Windows下cls
  ```
```
testdg:
  - testdg
  测试无参递归的最高次数
  报错前的次数即为可输入命令的最大次数
  （重启程序后最大次数会重置，最大次数大概2w次吧，所以没啥好担心的）
  （最大次数的报错是RangeError: Maximum call stack size exceeded，遇到该报错无需惊慌，重启程序即可）
```
```
user:
  - user <用户id>
  查看指定用户的详细信息
  有一个已知问题
```
```
loadcookie:
  - loadcookie <UMdid> <CNZZEid>
  已经废弃的命令
```
```
setkey:
  - setkey <x-token>
  手动设置token
  已经废弃的命令
```
```
fbnc:
  - fbnc <number>
  有参递归测试
  （递归求斐波那契）
  为什么叫fbnc而不是fbnq或fibonacci——因为我脑子抽了...
```
```
lookat:
  - lookat <题目编号>
  如:lookat P1000
  查看题目内容(图片不会显示)
  ```
```
chknew:
  - chknew
  检查更新
  还没做好，别用
  炸了我不管啊（逃
```
```
record:
 - record <记录号>
 - r <记录号>
 查看指定的记录号
 - record
 - r
 查看上一次提交的记录
 如果没有显示查看则可能是获取失败或还没有生成记录
```
```
uploadtest:
 - uploadtest
 向P1000提交一份PHP7的AC代码
 如果没有报错的话就可以提交代码啦～（upload还没做完，大概A3发布，见upload函数说明）
```
```
upload:
 - upload -s <源码位置> [-l <使用语言,0为自动> 忽略会直接使用上次填写的语言，第一次不能忽略，否则报错] [-o2 开启O2优化]
 上传指定位置的源码
 - upload
 使用上一次upload的设置提交，第一次使用会报错
 
 ****还没做好，大概A3发布，我想尽可能的优化体验
 ****当然如果你想马上用可以直接改源码，函数为uploadcode(<题目编号>,<语言类型（数字）>,[1/0 O2优化，默认为0])
 ****要是有人用的话一定要发个issue或者点个star，点个watch什么的啊QwQ 我要丧失制作的兴趣了
```
-------------------------------------------------------


如果有协同开发意愿，欢迎加QQ
~~（QQ自己源代码里面找去）~~
### 测试阶段，不会打包用到的包，请自行npm install
```
https
node-fetch
readline
cheerio
node-localstorage
fs
```
-------------------------------------------------------

什么？你问我为神么要做这玩意？

~~只是为了好玩~~

当然是用！

洛谷有很多不方便的地方，比如团队赛题不实时更新，测试点有时要刷新之类的

所以做点改善

--------------------------------------------------------

### 代码随便用，但是如果你用了你也得开源！

~~（所以说为什么不一起做呢~~

# GPL协议


###功能演示：
```
[microblock@microblock-b365sd3 文档]$ node a
LuoguCmd - Login
登录使用Cookie.
系统检测到你已经登录，若要重新登录请使用 rlogin
----------------------------------------------------
[LuoGuCmd V0.1 (Alpha) <By Micro>]
This is a free Luogu client for all OIer
The GPL protocol is used, and the source code is stored on Github.
> me
Hi,MicroBlock
你的UID是：330692

MicroBlock - [330692,Gray]
做过的题：
 已AC：
    P1000 - 超级玛丽游戏
 非AC：
团队：
> lk P1000
找不到命令lk
> lookat P1000
正在查找题目：P1000

P1000 超级玛丽游戏
题目背景：本题是洛谷的试机题目，可以帮助了解洛谷的使用。

建议完成本题目后继续尝试[P1001](lookat P1001)、[P1008](lookat P1008)。

题目描述：超级玛丽是一个非常经典的游戏。请你用字符画的形式输出超级玛丽中的一个场景。

[
                ********
               ************
               ####....#.
             #..###.....##....
             ###.......######              ###            ###
                ...........               #...#          #...#
               ##*#######                 #.#.#          #.#.#
            ####*******######             #.#.#          #.#.#
           ...#***.****.*###....          #...#          #...#
           ....**********##.....           ###            ###
           ....****    *****....
             ####        ####
           ######        ######
##############################################################
#...#......#.##...#......#.##...#......#.##------------------#
###########################################------------------#
#..#....#....##..#....#....##..#....#....#####################
##########################################    #----------#
#.....#......##.....#......##.....#......#    #----------#
##########################################    #----------#
#.#..#....#..##.#..#....#..##.#..#....#..#    #----------#
##########################################    ############
]
输入格式：无
输出格式：如描述
> uploadtest
正在获取csrf-token
获取成功！(如需查看内容请加-shown)

提交成功！记录号：31974804
代码类型：php7
O2:关闭
可输入record或r直接查看记录
> r
将会查看记忆记录:R31974804
记录R31974804:AC
0号测试点:AC   -   ok accepted
> user 107232
code_universe - [107232,Orange]
做过的题：
 已AC：
    AT3908 - Two Integers【过水已隐藏】
    AT3879 - [ABC087A] Buying Sweets
    AT3874 - [ABC086B] 1 21
    AT3729 - [ABC083A] Libra【过水已隐藏】
    AT3619 - [ABC077B] Around Square
    AT3599 - [ABC076B] Addition and Multiplication
    AT3554 - Snuke's favorite YAKINIKU【过水已隐藏】
    AT3528 - [ABC073A] September 9
    AT3529 - [ABC073B] Theater
    AT3522 - [ABC072A] Sandglass2
    AT2690 - [ABC070A] Palindromic Number【过水已隐藏】
    AT2823 - ソート【过水已隐藏】
    AT2646 - [ABC066A] ringring
    AT2391 - [ABC058A] ι⊥l【过水已隐藏】
    AT2392 - [ABC058B] ∵∴∵【过水已隐藏】
    AT2343 - [ABC056A] HonestOrDishonest【过水已隐藏】
    AT2238 - 動画検索
    AT2150 - [ABC048A] AtCoder *** Contest【过水已隐藏】
    AT2084 - CF
    AT2079 - Signboard
    AT2113 - バリケード / A Barricade【过水已隐藏】
    AT1977 - [ABC042A] 和風いろはちゃんイージー / Iroha and Haiku (ABC Edition)【过水已隐藏】
    AT1892 - 饅頭【过水已隐藏】
    AT1894 - 総和
    AT1863 - お茶【过水已隐藏】
    AT2437 - オレンジの出荷 (Oranges)
    AT1511 - ダブル文字列/Double String【过水已隐藏】
    AT1515 - 勝率計算
    AT1428 - 長方形【过水已隐藏】
    AT1339 - Union Find
    AT1205 - 掛け算の筆算【过水已隐藏】
    AT1213 - 高橋くんと回文【过水已隐藏】
    AT1181 - 隠れた言葉【过水已隐藏】
    AT1065 - haruki、気になります！【过水已隐藏】
    AT1059 - 2月29日【过水已隐藏】
    AT1011 - AtColor
    AT989 - 立方数
    AT832 - 石を滑らせるゲーム
    AT807 - 素数、コンテスト、素数【过水已隐藏】
    AT2465 - 平均点 (Average Score)
    AT769 - 音楽ゲーム
    AT700 - 帰ってきた器物損壊！高橋君【过水已隐藏】
    AT663 - 天下一難易度設定【过水已隐藏】
    AT277 - たこ焼き買えるかな？
    AT265 - 帰ってきた器物損壊！高橋君
    AT254 - 孫子算経【过水已隐藏】
    AT240 - 算盤の書
    AT211 - 大好き高橋君
    AT45 - センター採点【过水已隐藏】
    AT2477 - ランチ (Lunch)【过水已隐藏】
    AT25 - プログラミングコンテスト【过水已隐藏】
    AT2489 - レシート【过水已隐藏】
    AT2507 - 得点【过水已隐藏】
    AT2508 - 未提出者は誰だ【过水已隐藏】
    CF894A - QAQ
    CF777A - Shell Game
    CF697A - Pineapple Incident
    CF678A - Johny Likes Numbers
    CF610A - Pasha and Stick
    CF574B - Bear and Three Musketeers
    CF409F - 000001
    CF266A - Stones on the Table
    CF61A - Ultra-Fast Mathematician
    CF59A - Word
    CF4B - Before an Exam
    CF4A - Watermelon
    CF2A - Winner
    CF1A - Theatre Square
    CF1060D - Social Circles
    CF1268B - Domino for Young
    CF1296C - Yet Another Walking Robot
    CF1303A - Erasing Zeroes
    CF1304C - Air Conditioner
    CF1304B - Longest Palindrome
    CF1304A - Two Rabbits
    CF1313A - Fast Food Restaurant
    CF1311C - Perform the Combo
    P1001 - A+B Problem
    P1002 - 过河卒
    P1004 - 方格取数
    P1006 - 传纸条
    P1008 - 三连击
    P1010 - 幂次方
    P1012 - 拼数
    P1014 - Cantor表
    P1017 - 进制转换
    P1020 - 导弹拦截
    P1025 - 数的划分
    P1028 - 数的计算
    P1029 - 最大公约数和最小公倍数问题
    P1031 - 均分纸牌
    P1035 - 级数求和
    P1036 - 选数
    P1042 - 乒乓球
    P1043 - 数字游戏
    P1044 - 栈
    P1046 - 陶陶摘苹果
    P1047 - 校门外的树
    P1048 - 采药
    P1049 - 装箱问题
    P1051 - 谁拿了最多奖学金
    P1052 - 过河
    P1055 - ISBN号码
    P1057 - 传球游戏
    P1058 - 立体图
    P1059 - 明明的随机数
    P1060 - 开心的金明
    P1062 - 数列
    P1063 - 能量项链
    P1068 - 分数线划定
    P1071 - 潜伏者
    P1072 - Hankson 的趣味题
    P1075 - 质因数分解
    P1077 - 摆花
    P1080 - 国王游戏
    P1082 - 同余方程
    P1085 - 不高兴的津津
    P1086 - 花生采摘
    P1087 - FBI树
    P1089 - 津津的储蓄计划
    P1090 - 合并果子 / [USACO06NOV]Fence Repair G
    P1091 - 合唱队形
    P1093 - 奖学金
    P1094 - 纪念品分组
    P1095 - 守望者的逃离
    P1096 - Hanoi 双塔问题
    P1097 - 统计数字
    P1098 - 字符串的展开
    P1101 - 单词方阵
    P1102 - A-B 数对
    P1108 - 低价购买
    P1109 - 学生分组
    P1111 - 修复公路
    P1114 - “非常男女”计划
    P1115 - 最大子段和
    P1116 - 车厢重组
    P1118 - [USACO06FEB]Backward Digit Sums G/S
    P1119 - 灾后重建
    P1123 - 取数游戏
    P1125 - 笨小猴
    P1135 - 奇怪的电梯
    P1138 - 第k小整数
    P1141 - 01迷宫
    P1144 - 最短路计数
    P1147 - 连续自然数和
    P1149 - 火柴棒等式
    P1150 - Peter的烟
    P1151 - 子数整数
    P1152 - 欢乐的跳
    P1156 - 垃圾陷阱
    P1157 - 组合的输出
    P1162 - 填涂颜色
    P1164 - 小A点菜
    P1165 - 日志分析
    P1168 - 中位数
    P1177 - 【模板】快速排序
    P1179 - 数字统计
    P1181 - 数列分段Section I
    P1182 - 数列分段 Section II
    P1184 - 高手之在一起
    P1194 - 买礼物
    P1195 - 口袋的天空
    P1200 - [USACO1.1]你的飞碟在这儿Your Ride Is Here
    P1201 - [USACO1.1]贪婪的送礼者Greedy Gift Givers
    P1203 - [USACO1.1]坏掉的项链Broken Necklace
    P1216 - [USACO1.5][IOI1994]数字三角形 Number Triangles
    P1217 - [USACO1.5]回文质数 Prime Palindromes
    P1219 - [USACO1.5]八皇后 Checker Challenge
    P1223 - 排队接水
    P1226 - 【模板】快速幂||取余运算
    P1233 - 木棍加工
    P1238 - 走迷宫
    P1239 - 计数器
    P1257 - 平面上的最接近点对
    P1280 - 尼克的任务
    P1281 - 书的复制
    P1287 - 盒子与球
    P1294 - 高手去散步
    P1296 - 奶牛的耳语
    P1303 - A*B Problem
    P1304 - 哥德巴赫猜想
    P1305 - 新二叉树
    P1306 - 斐波那契公约数
    P1307 - 数字反转
    P1319 - 压缩技术
    P1320 - 压缩技术（续集版）
    P1328 - 生活大爆炸版石头剪刀布
    P1330 - 封锁阳光大学
    P1331 - 海战
    P1332 - 血色先锋队
    P1339 - [USACO09OCT]Heat Wave G
    P1341 - 无序字母对
    P1372 - 又是毕业季I
    P1379 - 八数码难题
    P1387 - 最大正方形
    P1392 - 取数
    P1396 - 营救
    P1403 - [AHOI2005]约数研究
    P1416 - 攻击火星
    P1417 - 烹调方案
    P1420 - 最长连号
    P1421 - 小玉买文具
    P1422 - 小玉家的电费
    P1423 - 小玉在游泳
    P1425 - 小鱼的游泳时间
    P1426 - 小鱼会有危险吗
    P1427 - 小鱼的数字游戏
    P1428 - 小鱼比可爱
    P1433 - 吃奶酪
    P1434 - [SHOI2002]滑雪
    P1435 - 回文字串
    P1440 - 求m区间内的最小值
    P1443 - 马的遍历
    P1445 - [Violet]樱花
    P1451 - 求细胞数量
    P1455 - 搭配购买
    P1463 - [POI2002][HAOI2007]反素数
    P1464 - Function
    P1469 - 找筷子
    P1474 - [USACO2.3]Money System / [USACO07OCT]Cow Cash G
    P1478 - 陶陶摘苹果（升级版）
    P1481 - 魔族密码
    P1482 - Cantor表（升级版）
    P1484 - 种树
    P1486 - [NOI2004]郁闷的出纳员
    P1489 - 猫狗大战
    P1503 - 鬼子进村
    P1508 - Likecloud-吃、吃、吃
    P1510 - 精卫填海
    P1522 - [USACO2.4]牛的旅行 Cow Tours
    P1525 - 关押罪犯
    P1534 - 不高兴的津津（升级版）
    P1540 - 机器翻译
    P1541 - 乌龟棋
    P1546 - [USACO3.1]最短网络 Agri-Net
    P1547 - [USACO05MAR]Out of Hay S
    P1549 - 棋盘问题（2）
    P1553 - 数字反转（升级版）
    P1554 - 梦中的统计
    P1561 - [USACO12JAN]Mountain Climbing S
    P1563 - 玩具谜题
    P1564 - 膜拜
    P1566 - 加等式
    P1567 - 统计天数
    P1576 - 最小花费
    P1577 - 切绳子
    P1579 - 哥德巴赫猜想（升级版）
    P1582 - 倒水
    P1583 - 魔法照片
    P1586 - 四方定理
    P1588 - [USACO07OPEN]Catch That Cow S
    P1589 - 泥泞路
    P1590 - 失踪的7
    P1596 - [USACO10OCT]Lake Counting S
    P1597 - 语句解析
    P1598 - 垂直柱状图
    P1601 - A+B Problem（高精）
    P1603 - 斯诺登的密码
    P1604 - B进制星球
    P1605 - 迷宫
    P1614 - 爱与愁的心痛
    P1615 - 西游记公司
    P1618 - 三连击（升级版）
    P1620 - 漂亮字串
    P1621 - 集合
    P1622 - 释放囚犯
    P1627 - [CQOI2009]中位数
    P1628 - 合并序列
    P1629 - 邮递员送信
    P1631 - 序列合并
    P1634 - 禽兽的传染病
    P1683 - 入门
    P1706 - 全排列问题
    P1713 - 麦当劳叔叔的难题
    P1720 - 月落乌啼算钱
    P1725 - 琪露诺
    P1731 - [NOI1999]生日蛋糕
    P1736 - 创意吃鱼法
    P1739 - 表达式括号匹配
    P1746 - 离开中山路
    P1759 - 通天之潜水
    P1765 - 手机
    P1781 - 宇宙总统
    P1789 - 【Mc生存】插火把
    P1801 - 黑匣子
    P1803 - 凌乱的yyy / 线段覆盖
    P1816 - 忠诚
    P1824 - 进击的奶牛
    P1828 - [USACO3.2]香甜的黄油 Sweet Butter
    P1832 - A+B Problem（再升级）
    P1843 - 奶牛晒衣服
    P1854 - 花店橱窗布置
    P1865 - A % B Problem
    P1876 - 开灯
    P1880 - [NOI1995]石子合并
    P1881 - 绳子对折
    P1886 - 滑动窗口 /【模板】单调队列
    P1888 - 三角函数
    P1892 - [BOI2003]团伙
    P1902 - 刺杀大使
    P1908 - 逆序对
    P1909 - 买铅笔
    P1910 - L国的战斗之间谍
    P1914 - 小书童——密码
    P1919 - 【模板】A*B Problem升级版（FFT快速傅里叶）
    P1928 - 外星密码
    P1965 - 转圈游戏
    P1969 - 积木大赛
    P1970 - 花匠
    P1980 - 计数问题
    P1982 - 小朋友的数字
    P1991 - 无线通讯网
    P1993 - 小K的农场
    P1996 - 约瑟夫问题
    P2024 - [NOI2001]食物链
    P2032 - 扫描
    P2073 - 送花
    P2084 - 进制转换
    P2085 - 最小函数值
    P2089 - 烤鸡
    P1855 - 榨取kkksc03
    P2296 - 寻找道路
    P2197 - 【模板】nim游戏
    P2092 - 数字游戏
    P2107 - 小Z的AK计划
    P2121 - 拆地毯
    P2123 - 皇后游戏
    P2126 - Mzc家中的男家丁
    P2142 - 高精度减法
    P2176 - [USACO11DEC]RoadBlock S / [USACO14FEB]Roadblock G/S
    P2174 - 小Z的神奇数列
    P2158 - [SDOI2008]仪仗队
    P1887 - 乘积最大3
    P2196 - 挖地雷
    P2212 - [USACO14MAR]Watering the Fields S
    P2251 - 质量检测
    P2367 - 语文成绩
    P2278 - [HNOI2003]操作系统
    P2141 - 珠心算测验
    P2320 - [HNOI2006]鬼谷子的钱袋
    P2323 - [HNOI2006]公路修建问题
    P2330 - [SCOI2005]繁忙的都市
    P2343 - 宝石管理系统
    P2346 - 四子连棋
    P2386 - 放苹果
    P2385 - [USACO07FEB]Bronze Lilypad Pond B
    P2394 - yyy loves Chemistry I
    P2393 - yyy loves Maths II
    P2389 - 电脑班的裁员
    P2404 - 自然数的拆分问题
    P2424 - 约数和
    P2618 - 数字工程
    P2524 - Uim的情人节礼物·其之弐
    P2504 - [HAOI2006]聪明的猴子
    P2626 - 斐波那契数列（升级版）
    P2548 - [AHOI2004]智能探险车
    P2661 - 信息传递
    P2615 - 神奇的幻方
    P3951 - 小凯的疑惑
    P3954 - 成绩
    P2639 - [USACO09OCT]Bessie's Weight Problem G
    P2649 - 游戏预言
    P2669 - 金币
    P2670 - 扫雷游戏
    P2676 - [USACO07DEC]Bookshelf B
    P2677 - [USACO07DEC]Bookshelf 2 B
    P2689 - 东南西北
    P2690 - [USACO04NOV]Apple Catching G
    P2695 - 骑士的工作
    P2697 - 宝石串
    P2725 - [USACO3.1]邮票 Stamps
    P2730 - [USACO3.2]魔板 Magic Squares
    P2731 - [USACO3.3]骑马修栅栏 Riding the Fences
    P2769 - 猴子上树
    P2773 - 漂亮字串
    P3958 - 奶酪
    P2782 - 友好城市
    P3366 - 【模板】最小生成树
    P3367 - 【模板】并查集
    P3371 - 【模板】单源最短路径（弱化版）
    P3372 - 【模板】线段树 1
    P3375 - 【模板】KMP字符串匹配
    P3369 - 【模板】普通平衡树
    P3378 - 【模板】堆
    P2799 - 国王的魔镜
    P3383 - 【模板】线性筛素数
    P2814 - 家谱
    P2820 - 局域网
    P2827 - 蚯蚓
    P2835 - 刻录光盘
    P2871 - [USACO07DEC]Charm Bracelet S
    P2872 - [USACO07DEC]Building Roads S
    P2880 - [USACO07JAN]Balanced Lineup G
    P2911 - [USACO08OCT]Bovine Bones G
    P2916 - [USACO08NOV]Cheering up the Cow G
    P2919 - [USACO08NOV]Guarding the Farm S
    P2921 - [USACO08DEC]Trick or Treat on the Farm G
    P2926 - [USACO08DEC]Patting Heads S
    P2937 - [USACO09JAN]Laserphones S
    P2955 - [USACO09OCT]Even? Odd? G
    P3045 - [USACO12FEB]Cow Coupons G
    P3078 - [USACO13MAR]Poker Hands S
    P3146 - [USACO16OPEN]248 G
    P3150 - pb的游戏（1）
    P3395 - 路障
    P3197 - [HNOI2008]越狱
    P1000 - 超级玛丽游戏
    P5145 - 漂浮的鸭子
    P5146 - 最大差值
    P3419 - [POI2005]SAM-Toy Cars
    P3420 - [POI2005]SKA-Piggy Banks
    P3741 - honoka的键盘
    P3802 - 小魔女帕琪
    P3848 - [TJOI2007]跳棋
    P3855 - [TJOI2008]Binary Land
    P3835 - 【模板】可持久化平衡树
    P3865 - 【模板】ST表
    P3871 - [TJOI2010]中位数
    P3873 - [TJOI2010]天气预报
    P3878 - [TJOI2010]分金币
    P3912 - 素数个数
    P3916 - 图的遍历
    P3918 - [国家集训队]特技飞行
    P3948 - 数据结构
    P4018 - Roy&October之取石子
    P4677 - 山区建小学
    P4057 - [Code+#1]晨跑
    P4136 - 谁能赢呢？
    P4205 - [NOI2005]智慧珠游戏 
    P4296 - [AHOI2007]密码箱
    P4305 - [JLOI2011]不重复数字
    P4325 - [COCI2006-2007#1] Modulo
    P4327 - [COCI2006-2007#1] Okviri
    P4413 - [COCI2006-2007#2] R2
    P4414 - [COCI2006-2007#2] ABC
    P4484 - [BJWC2018]最长上升子序列
    P4702 - 取石子
    P4752 - Divided Prime
    P4779 - 【模板】单源最短路径（标准版）
    P4860 - Roy&October之取石子II
    P6051 - [RC-02] 求和
    P4994 - 终于结束的起点
    P5035 - 金坷垃
    P5019 - 铺设道路
    P5015 - 标题统计
    P5018 - 对称二叉树
    P6153 - 询问
    P5239 - 回忆京都
    P5269 - 欧稳欧再次学车
    P5497 - [LnOI2019SP]龟速单项式变换(SMT)
    P5315 - 头像上传
    P5367 - 【模板】康托展开
    P5436 - 【XR-2】缘分
    P5461 - 赦免战俘
    P5520 - [yLOI2019] 青原樱
    P5514 - [MtOI2019]永夜的报应
    P5534 - 【XR-3】等差数列
    P5582 - 【SWTR-01】Escape
    P5601 - 小D与笔试
    P5602 - 小E与美食
    P5613 - [MtOI2019]黑蚊子多
    P5788 - 【模板】单调栈
    P5650 - 基础字符串练习题
    P5657 - 格雷码
    P5661 - 公交换乘
    P5663 - 加工零件
    P5076 - 【深基16.例7】普通二叉树（简化版）
    P6068 - [MdOI2020] GCD? GCD!
    P6065 - [USACO05JAN]Sumsets S
    P6136 - 【模板】普通平衡树（数据加强版）
    P6188 - [NOI Online 入门组]文具订购（民间数据）
    SP1 - TEST - Life, the Universe, and Everything
    SP13866 - DISCRT - Discrete Roots【错题已隐藏】
    SP27561 - GDCOFTI - Greatest Common Divisor Of Three Integers
    UVA644 - Immediate Decodability
    UVA1210 - 连续素数之和 Sum of Consecutive Prime Numbers
    UVA1585 - 得分 Score
    UVA1644 - 素数间隔 Prime Gap
    UVA10055 - Hashmat the Brave Warrior
 非AC：
    AT2382 - [AGC015D] A or...or B Problem
    AT1995 - [AGC002A] Range Product
    AT1962 - 直方体【过水已隐藏】
    AT1331 - A - B problem
    AT1088 - 暗算ゲーム【过水已隐藏】
    AT794 - AtCoderトランプ【过水已隐藏】
    AT2412 - 最大の和
    CF153A - A + B【卡语言已隐藏】
    CF35A - Shell Game
    CF29A - Spit Problem
    CF1295B - Infinite Prefixes
    CF1324A - Yet Another Tetris Problem
    P1009 - 阶乘之和
    P1015 - 回文数
    P1018 - 乘积最大
    P1067 - 多项式输出
    P1120 - 小木棍 ［数据加强版］
    P1126 - 机器人搬重物
    P1139 - 单向双轨道
    P1140 - 相似基因
    P1189 - `SEARCH`
    P1192 - 台阶问题
    P1249 - 最大乘积
    P1255 - 数楼梯
    P1265 - 公路修建
    P1308 - 统计单词数
    P1314 - 聪明的质监员
    P1349 - 广义斐波那契数列
    P1363 - 幻象迷宫
    P1439 - 【模板】最长公共子序列
    P1449 - 后缀表达式
    P1462 - 通往奥格瑞玛的道路
    P1480 - A/B Problem
    P1535 - [USACO08MAR]Cow Travelling S
    P1537 - 弹珠
    P1543 - 【初赛】提高组2012【题目已隐藏】
    P1550 - [USACO08OCT]Watering Hole G
    P1714 - 切蛋糕
    P1784 - 数独
    P1808 - 单词分类
    P1825 - [USACO11OPEN]Corn Maze S
    P1835 - 素数密度
    P1851 - 好朋友
    P1932 - A+B  A-B  A*B  A/B A%B Problem
    P1962 - 斐波那契数列
    P1972 - [SDOI2009]HH的项链
    P2034 - 选择数字
    P2130 - 狂奔的Wzf
    P2199 - 最后的迷宫
    P2356 - 弹珠游戏
    P2787 - 语文1（chin1）- 理理思维
    P3379 - 【模板】最近公共祖先（LCA）
    P2802 - 回家
    P2858 - [USACO06FEB]Treats for the Cows G/S
    P2907 - [USACO08OPEN]Roads Around The Farm S
    P3391 - 【模板】文艺平衡树
    P3411 - 序列变换
    P3556 - [POI2013]MOR-Tales of seafaring
    P3805 - 【模板】manacher算法
    P3807 - 【模板】卢卡斯定理
    P3904 - 三只小猪
    P3910 - 纪念邮票
    P3986 - 斐波那契数列
    P4221 - [WC2018]州区划分
    P4397 - [JLOI2014]聪明的燕姿
    P5635 - 【CSGRound1】天下第一
    P5016 - 龙虎斗
    P6190 - [NOI Online 入门组]魔法（民间数据）
    P5264 - 多项式三角函数
    P6189 - [NOI Online 入门组]跑步（民间数据）
    P5502 - [JSOI2015]最大公约数
    P5512 - 棋盘问题（2）【加强】
    P5587 - 打字练习
    P5318 - 【深基18.例3】查找文献
    P6022 - 快乐水
    SP2 - PRIME1 - Prime Generator
    SP54 - JULKA - Julka
    UVA272 - TeX中的引号 TEX Quotes
    UVA11462 - Age Sort
团队：
无法显示
> 

```
