// This will trigger an animation featuring a transition
var transitionState = false
var magicTransition = function() {
    // Standard Syntax
    document.getElementById('magicTransition').style.transition =
        'width 2s, height 2s, background 2s, color 2s, padding 2s'
    // For Safari 3.1 to 6.0
    document.getElementById('magicTransition').style.webkitTransition =
        'width 2s, height 2s, background 2s, color 2s, padding 2s'
    if (!transitionState) {
        document.getElementById('magicTransition').style.background = 'grey'
        document.getElementById('magicTransition').style.textAlign = 'center'
        document.getElementById('magicTransition').style.color = 'black'
        document.getElementById('magicTransition').style.paddingTop = '75px'
        document.getElementById('magicTransition').style.paddingBottom = '75px'
        transitionState = true
    } else {
        document.getElementById('magicTransition').style.height = '50px'
        document.getElementById('magicTransition').style.background = 'white'
        document.getElementById('magicTransition').style.color = 'white'
        document.getElementById('magicTransition').style.paddingTop = '0px'
        document.getElementById('magicTransition').style.paddingBottom = '0px'
        transitionState = false
    }
}

var playAnimation = function() {
    document.getElementById('circle1').style.animationName = 'redRanger'
    document.getElementById('circle1').style.animationDuration = '4s'
    document.getElementById('circle1').style.webkitAnimationName = 'redRanger'
    document.getElementById('circle1').style.webkitAnimationDuration = '4s'
    document.getElementById('circle2').style.animationName = 'greenRanger'
    document.getElementById('circle2').style.animationDuration = '4s'
    document.getElementById('circle2').style.webkitAnimationName = 'greenRanger'
    document.getElementById('circle2').style.webkitAnimationDuration = '4s'
    document.getElementById('circle3').style.animationName = 'blueRanger'
    document.getElementById('circle3').style.animationDuration = '4s'
    document.getElementById('circle3').style.webkitAnimationName = 'blueRanger'
    document.getElementById('circle3').style.webkitAnimationDuration = '4s'
    document.getElementById('circle4').style.animationName = 'pinkRanger'
    document.getElementById('circle4').style.animationDuration = '4s'
    document.getElementById('circle4').style.webkitAnimationName = 'pinkRanger'
    document.getElementById('circle4').style.webkitAnimationDuration = '4s'
    document.getElementById('circle5').style.animationName = 'blackRanger'
    document.getElementById('circle5').style.animationDuration = '4s'
    document.getElementById('circle5').style.webkitAnimationName = 'blackRanger'
    document.getElementById('circle5').style.webkitAnimationDuration = '4s'
}
