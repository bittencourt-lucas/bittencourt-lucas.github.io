/******************************************************************************
* JavaScript Objects - Object Creation Functions, Inheritance, Properties,
* Methods, Instantiation
******************************************************************************/

// There are multiple ways of creating a class and determining creating functions,
// properties, methods, using inheritance and creating instances of a class

// One of these methods is using a prototype-based approach to classes
// This is a creating function - it allows the programmer to create an
// instance of a class
// In this case, the Character class is a superclass that will be used as
// a template for other classes to inherit from it
function Character(name) {
    this.name = name
}
// This is a method, and every class that inherits from the superclass will be
// able to use this function
Character.prototype.action = function() {
    return this.name + " says: I'm going to "
}

// There are three subclasses; they all inherit from the superclass Character
// and use its constructor to populate the property "name" and its method "action()"

function Tank(name) {
    Character.call(this, name)
}
Tank.prototype = Object.create(Character.prototype)
Tank.prototype.protect = function() {
    console.log(this.action() + 'protect my allies!')
}

function DPS(name) {
    Character.call(this, name)
}
DPS.prototype = Object.create(Character.prototype)
DPS.prototype.attack = function() {
    console.log(this.action() + 'destroy my enemies!')
}

function Healer(name) {
    Character.call(this, name)
}
Healer.prototype = Object.create(Character.prototype)
Healer.prototype.heal = function() {
    console.log(this.action() + 'heal my allies!')
}

// ECMAScript 2015 also introduced to JavaScript a simplified way of creating
// classes, that are more familiar to those who are used to other languages
class Enemy {
    constructor(type) {
        this.type = type
    }
}

// Inheritance, in this case, can be achieved through the "extends" keyword
// It's also much easier to use and understand inheritance in this new syntax
class Goblin extends Enemy {
    attack() {
        console.log('The ' + this.type + '-like monster attacks!')
    }
}

// If there's no need to define a class, it's possible to just create an object
var boss = {
    name: 'Smaug',
    type: 'Dragon',
    fireball: function() {
        console.log(this.name + ', the ' + this.type + ' shoots a fireball!')
    }
}

// The test function will create instances (or objects) of all previously
// defined classes, and use their methods
var testFunction = function() {
    // Objects from the prototype-based classes
    console.log('PROTOTYPE-BASED CLASS INSTANCES')
    var varian = new Tank('Varian')
    varian.protect()
    var jaina = new DPS('Jaina')
    jaina.attack()
    var anduin = new Healer('Anduin')
    anduin.heal()
    // Object from the keyword class
    console.log('KEYWORD CLASS INSTANCES')
    var beast = new Goblin('Humanoid')
    beast.attack()
    // Since the following object was defined previously, its method can
    // be called without the need to "instantiate" it
    console.log('OBJECT WITHOUT A CLASS')
    boss.fireball()
}

/******************************************************************************
* Manipulating CSS Class Properties Using JavaScript
******************************************************************************/

// To manipulate CSS class properties using JavaScript it's not even necessary
// to create a CSS stylesheet. This will be displayed by using a simple
// dark/light theme toggle button.
var darkMode = function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("warning").style.color = "red";
    // I can create a class in HTML, and when I get the elements from that class
    // with JavaScript, an array will be created, and I can choose to either
    // edit all elements from a class at the same time, or to access them
    // individually.
    var themeButton = document.getElementsByClassName("change theme");
    themeButton[0].style.backgroundColor = "black";
    themeButton[0].style.color = "white";
}

var lightMode = function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("warning").style.color = "blue";
    var themeButton = document.getElementsByClassName("change theme");
    themeButton[1].style.backgroundColor = "white";
    themeButton[1].style.color = "black";
}