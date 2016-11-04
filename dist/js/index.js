(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
  var content = document.querySelector('.content');
  var imgs = document.querySelectorAll('.content img');
  var btnTurn = document.querySelectorAll('.turn');
  var turnList = document.querySelector('.scroll-turn');
  var navbar = document.querySelector('.navbar');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var activeIndex = 0;
  var scrollTimer;

  prev.onclick = function () {
    restartScrollTimer();
    scrollToPrev();
  };

  next.onclick = function () {
    restartScrollTimer();
    scrollToNext();
  };

  turnList.onclick = function (e) {
    var evt = e || window.event;
    var target = evt.target || evt.srcElement;
    Array.prototype.forEach.call(btnTurn, function (li, index) {
      if (li === target) {
        restartScrollTimer();
        scroll(index);
      }
    });
  };

  var getNextIndex = function getNextIndex() {
    if (activeIndex === imgs.length - 1) {
      return 0;
    }
    return activeIndex + 1;
  };

  var getPrevIndex = function getPrevIndex() {
    if (activeIndex === 0) {
      return imgs.length - 1;
    }
    return activeIndex - 1;
  };

  var scrollToPrev = function scrollToPrev() {
    var newIndex = getPrevIndex();
    scroll(newIndex);
  };

  var scrollToNext = function scrollToNext() {
    var newIndex = getNextIndex();
    scroll(newIndex);
  };

  var scroll = function scroll(newIndex) {
    // ture false
    imgs[activeIndex].setAttribute('id', '');
    imgs[newIndex].setAttribute('id', 'visible');
    btnTurn[activeIndex].setAttribute('id', '');
    btnTurn[newIndex].setAttribute('id', 'turn-active');
    activeIndex = newIndex;
  };

  var startScrollTimer = function startScrollTimer() {
    scrollTimer = setInterval(scrollToNext, 1200);
  };

  var stopScrollTimer = function stopScrollTimer() {
    if (scrollTimer) {
      clearInterval(scrollTimer);
    }
  };

  var restartScrollTimer = function restartScrollTimer() {
    stopScrollTimer();
    startScrollTimer();
  };

  startScrollTimer();

  content.onmouseover = function () {
    stopScrollTimer();
  };

  content.onmouseout = function () {
    startScrollTimer();
  };

  navbar.onclick = function () {
    stopScrollTimer();
  };
};

},{}]},{},[1])