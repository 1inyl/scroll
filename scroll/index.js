window.onload = function() {
    var main = document.querySelector('.container')
    var content = document.querySelector('.content')
    var img = document.querySelectorAll('.content img')
    var btnTurn = document.querySelectorAll('.turn')
    var turnList = document.querySelector('.scroll-turn')
    var left = document.getElementById('left')
    var right = document.getElementById('right')

    // turnList.onclick = function(e) {
    //     var evt = e || window.event
    //     var target = evt.target || evt.srcElement
    //     Array.prototype.forEach.call(btnTurn, function(li, index) {
    //         if (li === target) {
    //             for (var i = 0; i < btnTurn.length; i++) {
    //                 img[i].setAttribute('id', '')
    //                 img[index].setAttribute('id', 'visible')
    //             }
    //         }
    //     })
    // }
    //
    // var scroll = function () { // ture false
    //   var active = document.getElementById('visible')
    //   var num = active.alt - 1
    //
    //   if (num > img.length - 2) {
    //     num = 0;
    //   }
    //   img[num].setAttribute('id', '')
    //   img[num + 1].setAttribute('id', 'visible')
    // }
    //
    //
    // var speed = 1000
    //
    // var scroll = setInterval(scroll, speed)
    // main.onmouseover = function() {
    //     clearInterval(scroll)
    // }
    //
    // main.onmouseout = function() {
    //     scroll = setInterval(scroll, speed)
    // }
    //

}
