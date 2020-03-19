# 登录教程 #
### 只有在登录后才可以使用需要登录的功能
##### 下教程为Google Chrome的教程，适用于Windows以及除安卓外的Linux发行版 #####
##### 如果你没有安装Google Chrome，请见同目录下login-浏览器名 #####
##### （没有的话就是不存在啦） #####
##### 如果你摸索出了其他浏览器获取登录Cookie的方法，也欢迎给我说哦 #####
##### ~~QQ自己翻源码去~~ #####

### Step 1:

进入[洛谷官网](https://www.luogu.com.cn)

### Step 2:
(如果你已经登录请跳过该步)

在洛谷登录

### Step 3:

点击地址栏旁的小锁或感叹号
![狠狠地戳！](https://s1.ax1x.com/2020/03/19/8rwJAK.png)

### Step 4:

点击“查看Cookie”

![对就是你！](https://s1.ax1x.com/2020/03/19/8rwYtO.png)


### Step 5:
找到__client_id以及_uid
注意：这两个cookie的位置如下
```
luogu.com.cn
 -Cookie
   -__client_id
   -_uid
```
如果没有找到该Cookie请重新登录，若仍然没有请[提交issue](https://github.com/MicroBlock2017/LuoGuCMD/issues)
#  #
![不要第一个哈](https://s1.ax1x.com/2020/03/19/8rrDxg.png)

### Step 6
复制__client_id以及_uid的内容
#### 这里注意！Chrome不会把内容完全显示，请选中后左右拖动，选择完全后一般__client_id会有40位,_uid会有6位

### Step 7
在LuoGuCmd中输入login,回车，按照提示输入（粘贴）__client_id以及_uid的内容

### Step 8
在LuoGuCmd中输入me，如果成功出现了你的个人信息(且没有报错)，那么恭喜，你登录成功来
