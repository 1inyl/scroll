window.onload = function () {
  var content = document.querySelector('.content')
  var imgs = document.querySelectorAll('.content img')
  var btnTurn = document.querySelectorAll('.turn')
  var turnList = document.querySelector('.scroll-turn')
  var prev = document.getElementById('prev')
  var next = document.getElementById('next')
  var activeIndex = 0
  var scrollTimer

  prev.onclick = function () {
    restartScrollTimer()
    scrollToPrev()
  }

  next.onclick = function () {
    restartScrollTimer()
    scrollToNext()
  }

  turnList.onclick = function (e) {
    var evt = e || window.event
    var target = evt.target || evt.srcElement
    Array.prototype.forEach.call(btnTurn, function (li, index) {
      if (li === target) {
        restartScrollTimer()
        scroll(index)
      }
    })
  }

  var getNextIndex = function () {
    if (activeIndex === imgs.length - 1) {
      return 0
    }
    return activeIndex + 1
  }

  var getPrevIndex = function () {
    if (activeIndex === 0) {
      return imgs.length - 1
    }
    return activeIndex - 1
  }

  var scrollToPrev = function () {
    var newIndex = getPrevIndex()
    scroll(newIndex)
  }

  var scrollToNext = function () {
    var newIndex = getNextIndex()
    scroll(newIndex)
  }

  var scroll = function (newIndex) { // ture false
    imgs[activeIndex].setAttribute('id', '')
    imgs[newIndex].setAttribute('id', 'visible')
    activeIndex = newIndex
  }

  var startScrollTimer = function () {
    scrollTimer = setInterval(scrollToNext, 1200)
  }

  var stopScrollTimer = function () {
    if (scrollTimer) {
      clearInterval(scrollTimer)
    }
  }

  var restartScrollTimer = function () {
    stopScrollTimer()
    startScrollTimer()
  }

  startScrollTimer()
  content.onmouseover = function () {
    stopScrollTimer()
  }

  content.onmouseout = function () {
    startScrollTimer()
  }
}
