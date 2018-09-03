// ==UserScript==
// @name         Zindex
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  try to take over the world!
// @author       Sunly

// @match        http://221.239.86.22:8088/water-center/index
// @match        http://221.239.86.22:8088/water-center/index/*
// @match        http://221.239.86.22:8088/water-center
// @match        http://221.239.86.22:8088/water-center/*
// @resource     Simage http://ww1.sinaimg.cn/large/9f2a978egy1futvc4imcoj247p2dc4hu.jpg
// @resource     Mimage http://ww1.sinaimg.cn/large/9f2a978egy1futvcfesf1j24ts22h7nl.jpg
// @resource     Limage http://ww1.sinaimg.cn/large/9f2a978egy1futvcqqklyj25yj1oc1ek.jpg

// @grant        none
// ==/UserScript==

(function() {
    // 'use strict';
    //主页
    var index_text = document.getElementsByTagName("span")[14];
    index_text.innerText="净化控股集团股份有限公司";

    //var bgImg = document.getElementsByClassName('bg')[0];
    //bgImg.setAttribute('style','background-image:url(http://www.jinghuachina.net/upload/201808/31/201808311618102343.jpg)');

    var newText = document.getElementsByClassName('title')[0];
    newText.innerText="智慧水务综合运营管理平台";

    var hide_user = document.getElementsByClassName('info')[0];
    hide_user.setAttribute('style','display:none');

    var hide_time = document.getElementsByClassName('time')[0];
    hide_time.setAttribute('style','display:none');

    var hide_discription1 = document.getElementsByClassName("new-nav-items")[1];
    var hide_discription2 = document.getElementsByClassName("new-nav-items")[4];
    hide_discription1.remove();
    hide_discription2.remove();

    var bgImg = document.getElementsByClassName('bg')[0];
    var body_height = document.getElementsByTagName('body')[0].clientHeight;
    var body_width = document.getElementsByTagName('body')[0].clientWidth;
    if ((body_width / body_height) < 2.0) {
        console.log('size:small');
        bgImg.setAttribute('style','background-image:url(http://ww1.sinaimg.cn/large/9f2a978egy1futvc4imcoj247p2dc4hu.jpg)');
    }
    else if ((body_width / body_height) < 3.2 && (body_width / body_height) >= 2.0) {
        console.log('size:mid');
        bgImg.setAttribute('style','background-image:url(http://ww1.sinaimg.cn/large/9f2a978egy1futu0lppdgj24ts22hatd.jpg)');
    }
    else if ((body_width / body_height) >= 3.2) {
        console.log('size:large');
        bgImg.setAttribute('style','background-image:url(http://ww1.sinaimg.cn/large/9f2a978egy1futu12t1jrj25yj1ocavw.jpg)');
    }
})();