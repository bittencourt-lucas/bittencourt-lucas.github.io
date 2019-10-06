// With ES6, JavaScript now has three variable types: var, let, const

// var works on global scope, function scope, and can be reassigned
var magicNum = 42
var printMagicNum = function() {
    var message = 'The magic number is ' + magicNum + '!'
    document.getElementById('display-magic-num').innerHTML = message
}

// let works on function scope, block scope, and can be reassigned
var rollTwenty = function() {
    let diceRoll = 20
    // Simplest form of a for loop:
    for (let i = 0; i < 20; i++) {
        var message = 'You rolled a ' + diceRoll + '[' + i + ']!\n'
        document.getElementById('display-twenty').innerText += message
    }
}

// const works on function scope, and on block scope (also, I'm using parameters on the function)
var chosenPill = function(color) {
    const blue = 'blue'
    // Conditional statement: if ... else
    if (color === blue) {
        const message = 'You chose poorly!'
        document.getElementById('display-choice').innerHTML = message
    } else {
        const message = 'You chose wisely!'
        document.getElementById('display-choice').innerHTML = message
    }
}

// An example of array (which will be numbered in index) is the following
var thingsLiked = ['My Wife', 'Yerba Mate', 'Role-playing Games']

// An example of associative array is the following (which should be avoided in favor of using objects)
var faction = []
faction['Like'] = 'Alliance'
faction['Dislike'] = 'Horde'

var interests = function() {
    document.getElementById('display-array').innerText += 'My top 3:\n'
    for (let i = 0; i < thingsLiked.length; i++) {
        document.getElementById('display-array').innerText +=
            i + 1 + ') ' + thingsLiked[i] + '\n'
    }
    var message =
        '\nIn World of Warcraft I play ' +
        faction['Like'] +
        ' and I pwn ' +
        faction['Dislike'] +
        '!'
    document.getElementById('display-array').innerText += message
}
