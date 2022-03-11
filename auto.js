// ==UserScript==
// @name         有谱么自动播放
// @namespace    https://github.com/qiurin
// @version      0.2
// @description  有谱么自动播放
// @author       秋林
// @match        https://yoopu.me/view/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yoopu.me
// @grant        none

// @require      https://raw.githubusercontent.com/qiurin/yoopu/main/auto.js
// ==/UserScript==

// "use strict";
window.goPlay = function () {
  var Pbutton = document.querySelector("button.svelte-ugaeen.accent");
  Pbutton.click();
  setInterval(function () {
    Pbutton.click();
    Pbutton.click();
  }, 14000);
};

var MyDiv = document.querySelector("div.button-container");
var button =
  "<button theme='primary' type='button' class='svelte-1eqkw0w block' size style='background:red;margin:20px 0;height:60px;font-size:40px' onclick='goPlay(1)'><i class='yoopu3-icon button-icon'style='font-size:40px'></i>自动播放</button>";
MyDiv.innerHTML += button;

// Your code here...
