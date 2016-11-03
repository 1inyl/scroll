window.onload = function() {
    var main = document.querySelector('.container')
    var content = document.querySelector('.content')
    var imgs = document.querySelectorAll('.content img')
    var btnTurn = document.querySelectorAll('.turn')
    var turnList = document.querySelector('.scroll-turn')
    var left = document.getElementById('left')
    var right = document.getElementById('right')



    left.onclick = function() {
              var active
          if (active = visible) {
              var index = active.getAttribute('alt') - 1  //  0,1,2,3,4,
            if (index > 0) {
              imgs[index].setAttribute('id', '')
              imgs[index - 1].setAttribute('id', 'visible')
            } else {
              imgs[index].setAttribute('id', '')
              imgs[imgs.length - 1].setAttribute('id', 'visible')
            }
    }
  }

    right.onclick = function() {
          if (active = visible) {
              var index = active.getAttribute('alt') - 1  //  0,1,2,3,4,
            if (index < imgs.length - 1) {
              imgs[index].setAttribute('id', '')
              imgs[index + 1].setAttribute('id', 'visible')
            } else {
              imgs[index].setAttribute('id', '')
              imgs[0].setAttribute('id', 'visible')
            }
          }
    }


    turnList.onclick = function(e) {
        var evt = e || window.event
        var target = evt.target || evt.srcElement
        Array.prototype.forEach.call(btnTurn, function(li, index) {
            if (li === target) {
                for (var i = 0; i < btnTurn.length; i++) {
                    imgs[i].setAttribute('id', '')
                    imgs[index].setAttribute('id', 'visible')
                }
            }
        })
    }


    var scroll = function () { // ture false
      var active = document.getElementById('visible')
      var index = active.alt - 1
      if (index > imgs.length - 2) {
        index = 0;
        imgs[index].setAttribute('id', 'visible')
        imgs[imgs.length - 1].setAttribute('id', '')
      }
        else {
          imgs[index].setAttribute('id', '')
          imgs[index + 1].setAttribute('id', 'visible')
        }

    }


    var speed = 1500

    var scroll = setInterval(scroll, speed)
    main.onmouseover = function() {
        clearInterval(scroll)
    }

    main.onmouseout = function() {
        scroll = setInterval(scroll, speed)
    }

}
