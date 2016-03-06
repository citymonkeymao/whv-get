
[TOC]
#1.概述

##  1.1作用

   whv-get插件可以在抢澳洲whv的时候自动打开多个页面并填写个人信息、识别验证码和自动下一步，对于邮箱验证，在收到邮件后，可以将邮件地址输入插件，插件将继续用输入的地址刷票。插件会帮你自动进行到时间选择那一步，时间选择需要手动完成，但页面上的验证码任然会被自动识别。

##1.2效果

   在2015年9月第一批名额的抢夺过程中，由于木有考虑到验证码问题，坑一人。在2015年11月第二批名额抢夺过程中，3杀0死1助攻。
##1.3时效问题
   如果官方修改页面，whv-get插件可能失效。若发现时效，请通知作者，作者会在本博客上发布更新或失效通知，以免坑人。**我的博客提供免登陆评论，任何人验证下邮箱就可以在下面评论了。**在用插件之前应该来[我的博客][linkToBlog]检查是否有更新，转载的时候也应标明出处。最近更新日期为**2015-03-06**。
#2.使用说明

##2.1获取插件

  从[下载页][linkToGithub]中点Download .zip下载，并解压到whv-get文件夹中。
  Github是一个自由的开源软件托管平台，但经常被封。打不开属于正常现象，各位看官自己想办法。这里分享《肖申克的救赎》中一句经典台词：
>不要忘了，这个世界穿透一切高墙的东西，它就在我们的内心深处，他们无法达到，也接触不到，那就是希望。

##  2.2设置信息

1. 找到var passportNumber = 字段，将后面''中的值改为你的护照号码。
2. 将var cboTitle = 后面的数字改为你的头衔对应的数字，MR = 1 MRS = 2 MS =3。
3. 将var FName = 后面''中的文字改为你的**名**。
4. 将var LName = 后面''中的文字改为你的**姓**。
5. 将var mobileNumber = 后面''中的文字改为你的手机号。
6. var email = 后面''中的文字改为邮箱。
7. var city = 后面的数字改为你想递交签证的城市2 = shanghai , 1 = beijeng ,3 = guangzhou , 4 = chengdu。
8. var password = 后面的''中填写你设置的密码。
9. 保存。
##  2.3导入插件
下载chrome浏览器，在浏览器的setting选项中，切换到Extensions标签，勾选上方的开发者模式，将whv-get文件夹拖入chrome中，此时会在插件列表中看到一个叫whv的插件，勾选在隐身模式下启用。
![插件导入后的样子](leanote://file/getImage?fileId=56dbb7c9ab64417fb1004b4e)
##  2.4刷
要正常使用插件，需要在**非安全模式**下打开chrome，具体方法根据操作系统不同而不同
 * windows下：将whv-get文件夹中的start.bat放入chrome的安装路径（就是有chrome.exe那个目录），关闭所有chrome窗口，双击start.bat就会以非安全模式运行chrome
 ![放入chrome目录的start.bat](leanote://file/getImage?fileId=56dbb890ab64417e59004888)
 * mac和linux下：关闭所有chrome进程（mac下要右击任务栏中的chrome点退出），用命令行启动chrome，并加入参数 ```--allow-running-insecure-content```。例：
在mac下输入如下命令
``` sh
/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' --allow-running-insecure-content 
```

在那个血雨腥风的早晨，你用非安全模式打开chrome浏览器，打开https://www.visaservices.org.in/页面，若配置正确，chrome会打开多个浏览器标签，并且用这些标签开始刷名额。在https://www.visaservices.org.in/页面上回有个小输入框，在没有收到邮件的时候，保持框里没有内容，收到邮件后，将邮件中的地址输入框中，并关闭其他已经打开的窗口，插件会自动打开填写的地址并开始刷。
#3.辅助手段
##3.1练习
在抢名额页面上，用**假护照号**预约general类型，除了选择的类型不一样，其余要填的内容都一样。这样可以熟悉预约流程。
##3.2代理服务器
目前来看，抢名额的服务器位于印度孟买。经测试发现，位于欧洲和**日本**的代理服务器效果较好。我自己抢和帮抢的时候都使用了一个日本vpn。
##3.3拉帮结派
将修改好信息的插件发给朋友，并告知部署和操作方式，可以增加你抢到的几率。
#4.你抢到名额之后
并且想感谢作者，你可以选择以下几种手段：
1. 为其他whver提供一切力所能及的帮助。
2. 到澳洲请作者吃饭。
3. 作者也是whv持有者，目前正在寻找澳洲IT方面的工作，有线索的欢迎举报。

[linkToGithub]:http://citymonkeymao.github.io/whv-get/
[linkToBlog]:http://citymonkeymao.leanote.com