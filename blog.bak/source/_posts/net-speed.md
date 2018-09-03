---
title: net_speeder安装及安装脚本
date: 2016-06-08 01:40:20
categories: 技术
tags: 
- VPS
- 搬瓦工
- net_speeder
---
项目地址：https://github.com/snooda/net-speeder
使用net_speeder为你的vps提速
<!--more-->
测试VPS：[搬瓦工](https://bandwagonhost.com/)
系统版本：Centos 5/6

## 一键安装net_speeder脚本
下载编译安装
```
wget https://github.com/sjx1995/Download/blob/master/one-key-netspeeder.sh
one-key-netspeeder.sh
```

端口加速
```
nohup /usr/local/net_speeder/net_speeder venet0 "ip" >/dev/null 2>&1 &
```

***

## 手动安装net_speeder
#### 设置LINUX的PATH
```
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
```

#### 准备编译环境
centos5(32位)：
```
wget http://dl.fedoraproject.org/pub/epel/5/i386/epel-release-5-4.noarch.rpm
```
centos5(64位)：
```
wget http://dl.fedoraproject.org/pub/epel/5/i386/epel-release-5-4.noarch.rpm
```
centos6(32位)：
```
wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
```
centos6(64位)：
```
wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
```
<br/>
安装epel：
```
rpm -Uvh epel-release*rpm
```
使用yum安装：
```
yum install -y libnet libnet-devel libpcap libpcap-devel gcc
```

#### 下载net_speeder并编译
```
wget https://github.com/sjx1995/Download/blob/master/net_speeder.tar.gz -O -|tar xz
cd net_speeder
sh build.sh
```

#### 使用方法
```
#参数：./net_speeder 网卡名 加速规则（bpf规则）
#ovz用法(加速所有ip协议数据)：
./net_speeder venet0 "ip"
```

#### 设置开机自启动
```
echo 'nohup net_speeder venet0 "ip" >/dev/null 2>&1 &' >> /etc/rc.local
```

***

实际测试：使用net_speeder之后YouTube 720P稳定流畅，夜间（估计网络压力小吧）1080P流畅。

* * *
<p align="right">
By.Sunly
Hangzhou Summer
</p>
<br />