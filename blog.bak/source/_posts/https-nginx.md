---
title: 为基于Nginx的博客添加小绿锁
date: 2017-03-05 05:14:22
categories: 技术
tags: 
- Nginx
- HTTPS
- blog
---
采用 Https 可以防止数据在传送过程中被窃取、篡改，确保数据的完整性，防止运营商的流量劫持、网页植入广告现象，同时有效抵挡中间人的攻击。
<!--more-->
# 准备工作
- 安装Nginx并配置好你的站点
- 注册腾讯云账号并认证

# 申请 SSL 证书
我申请的是`腾讯云 DV SSL 证书`，申请地址：
<a href="https://www.qcloud.com/product/ssl">SSL证书 - 腾讯云</a>
申请教程：
<a href="https://www.qcloud.com/document/product/400/6814">域名型证书申请流程 - 腾讯云</a>

申请之后等待数小时颁发证书，下载并上传至服务器`/home/ssl/`目录。
其中key文件为私钥，crt文件为证书。

# 配置 nginx
编辑配置文件`/etc/nginx/nginx.conf`,修改虚拟主机配置：
```
//监听80端口,响应http请求
server {
    listen 80;
    server_name domain.com;
    root        /home/www/domain.com;

    location / {
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }

}

//监听443端口,响应https请求
server {
    listen	 443 ssl;
    listen   [::]:443 ssl;
    server_name domain.com;
    root        /home/www/domain.com;

    //私钥和证书位置
    ssl_certificate /home/ssl/domain.com.crt;
    ssl_certificate_key /home/ssl/domain.com.key;

    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout  10m;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    location / {
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }

}
```


* * *
<p align="right">
By.Sunly
Hangzhou Spring
</p>
<br />