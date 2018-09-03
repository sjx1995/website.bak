// ==UserScript==
// @name         Zfunction
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       Sunly

// @match        http://221.239.86.22:8088/water-burst/*
// @match        http://221.239.86.22:8088/water-measure/*
// @match        http://221.239.86.22:8088/water-gis/*
// @match        http://221.239.86.22:8088/water-gis-model/*
// @match        http://221.239.86.22:8088/water-scada/*
// @match        http://221.239.86.22:8088/water-measure/*
// @match        http://221.239.86.22:8088/water-device-new/*
// @match        http://221.239.86.22:8088/water-schedule/*
// @match        http://221.239.86.22:8088/water-patrol/*
// @match        http://221.239.86.22:8088/water-rep/*
// @match        http://221.239.86.22:8088/water-warn/*
// @match        http://221.239.86.22:8088/water-datatopic/*

// @resource     image http://www.jinghuachina.net/upload/201808/31/201808311054389062.png

// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    // 'use strict';
    //功能页面
    //var img = document.getElementsByClassName("left-logo-container")[0].firstElementChild
    //img.src="http://www.jinghuachina.net/upload/201808/31/201808311054389062.png"

    var img = document.getElementsByClassName("left-logo-container")[0].firstElementChild;
    img.setAttribute('style', 'display:none');

    var bigImg = document.createElement("img");
    bigImg.src="http://www.jinghuachina.net/upload/201808/31/201808311054389062.png";
    bigImg.id="baiduImg";
    //bigImg.setAttribute('style', 'z-index=10');
    var myDiv = document.getElementsByClassName("left-logo-container")[0].firstElementChild;
    myDiv.before(bigImg);

    var container_width = document.getElementsByClassName("left-logo-container")[0];
    container_width.setAttribute('style', 'width:349px');

    var new_company = document.getElementsByClassName('logo-company-name')[0];
    new_company.innerText="智慧水务综合运营管理平台";

    //myDiv.setAttribult('style', 'display:none');
})();