[TOC]
#1.概述
##  1.1作用
   whv-get插件可以在抢澳洲whv的时候自动打开多个页面并自动填表+下一步。刷票过程可以进行到填个人信息那一步，验证码需要手动输入，之后的时间选择也需要操作者自己完成。
##1.2效果
   在2015年9月第一批名额的抢夺过程中，由于木有考虑到验证码问题，坑一人。在2015年11月第二批名额抢夺过程中，3杀0死1助攻。
##1.3时效问题
   如果官方修改页面，whv-get插件可能失效。若发现时效，请通知作者，作者会在本博客上发布更新或失效通知，以免坑人。在用插件之前应该来[我的博客][linkToBlog]检查是否有更新，转载的时候也应标明出处。最近更新日期为**2015-12-05**。
#2.使用说明
##2.1获取插件
从[github][linkToGithub]上下载插件:点Download ZIP下载，并解压到whv-get文件夹中，**此时whv-get文件夹中包含2个文件：manifist.json和whv-get.js**。
##2.2设置信息
1. 找到var passportNumber = 字段，将后面''中的值改为你的护照号码。
2. 将var cboTitle = 后面的数字改为你的头衔对应的数字，MR = 1 MRS = 2 MS =3。
3. 将var FName = 后面''中的文字改为你的**名**。
4. 将var LName = 后面''中的文字改为你的**姓**。
5. 将var mobileNumber = 后面''中的文字改为你的手机号。
6. var email = 后面''中的文字改为邮箱。
7. var city = 后面的数字改为你想递交签证的城市2 = shanghai , 1 = beijeng ,3 = guangzhou , 4 = chengdu。
8. 保存。

##2.3导入插件
下载chrome浏览器，在浏览器的setting选项中，切换到Extensions标签，将whv-get文件夹拖入chrome中，此时会在插件列表中看到一个叫whv的插件。
##2.4刷
在那个血腥的早晨，你打开chrome浏览器，打开 
    https://www.visaservices.org.in/
页面，若配置正确，chrome会打开多个浏览器标签，并且用这些标签开始刷名额，所有窗口**只能走到填写个人信息那一页。**之后输入验证码和选择时间需手动完成。
#3.辅助手段
##3.1代理服务器
目前来看，抢名额的服务器位于印度孟买。经测试发现，位于欧洲和**日本**的代理服务器效果较好。
##3.2拉帮结派
将修改好信息的插件发给朋友，并告知部署方式，可以增加你抢到的几率。
#4.下一步改进
下一步打算将执行js的容器由chrome插件形式改为phantomjs，以便增加错误监测能力，并加入验证码识别功能。


[linkToGithub]:https://github.com/citymonkeymao/whv-get
[linkToBlog]:http://citymonkeymao.leanote.com