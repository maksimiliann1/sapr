(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// const MyClass = require('./formTxtFromTables.js');
// const saveToJson = require('./huynya2.js');
function saveToJson(obj, filename) {
    const fs = require('fs');
    const data = JSON.stringify(obj);
    fs.writeFileSync(filename, data);
}   
class Uchastok{
    constructor(a, l, e, s) {
            this.L = l;
            this.A = a;
            this.E = e;
            this.S = s;
    }
}
function formJson() {
const oporesStr = document.getElementById("input1");
    const oporesNum = Number.parseInt(oporesStr.value);
    console.log(oporesNum);
    const powerfStr = document.getElementById("input2");
    const powerfNum = Number.parseInt(powerfStr.value);
    const powerqStr = document.getElementById("input3");
    const powerqNum = Number.parseInt(powerqStr.value);
    for(let i=0; i<oporesNum; i++){
        let L = Number.parseInt(document.getElementById(`input${i}`).value),
        A = Number.parseInt(document.getElementById(`input${i}${i}`).value),
        E = Number.parseInt(document.getElementById(`input${i}${i}${i}`).value),
        S = Number.parseInt(document.getElementById(`input${i}${i}${i}${i}`).value);
        const myObj = new Uchastok(L, A, E, S);
        saveToJson(myObj, 'test.json');    
    }
}
 formJson();
},{"fs":1}]},{},[2]);
