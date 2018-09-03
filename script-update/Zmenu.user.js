// ==UserScript==
// @name         Zmenu
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       Sunly

// @match        http://221.239.86.22:8088/water-center/pageHeader?url=department/list
// @match        http://221.239.86.22:8088/water-center/pageHeader?url=user/list
// @match        http://221.239.86.22:8088/water-center/pageHeader?url=role/list
// @match        http://221.239.86.22:8088/water-center/pageHeader?url=functionMenu/list

// @resource     http://jinghuachina.net/upload/201506/22/201506221113432544.png

// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    // 'use strict';
    //功能页面
    //var menu_img = document.getElementsByClassName("navbar-brand")[0]
    //menu_img.src="http://jinghuachina.net/upload/201506/22/201506221113432544.png"

    var bigImg = document.createElement("img");
    bigImg.src="http://jinghuachina.net/upload/201506/22/201506221113432544.png";
    bigImg.id="baiduImg";
    var menu_img = document.getElementsByClassName("navbar-brand")[0];
    menu_img.after(bigImg);
    bigImg.setAttribute('style','margin-top:5px');

    var hide_discription1 = document.getElementsByClassName("nav-items")[1];
    var hide_discription2 = document.getElementsByClassName("nav-items")[4];
    hide_discription1.remove();
    hide_discription2.remove();

    //document.getElementById('datagrid-row-r1-2-3').remove()
    //document.getElementById('datagrid-row-r1-2-4').remove()
    //document.getElementById('datagrid-row-r1-2-8').remove()

    //$(".navbar-brand").remove();
})();