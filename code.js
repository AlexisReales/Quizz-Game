let nome = prompt('Seu Nome')

point = 0

let r1 = 50;
let c1 = document.getElementById('p1')

let r2 = 25;
let c2 = document.getElementById('p2')

let r3 = 5;
let c3 = document.getElementById('p3')

let r4 = 1;
let c4 = document.getElementById('p4')

let r5 = -10;
let c5 = document.getElementById('p5')

let r6 = 1000;
let c6 = document.getElementById('p6')

let r7 = 2;
let c7 = document.getElementById('p7')

let r8 = 1;
let c8 = document.getElementById('p8')

let r9 = -998;
let c9 = document.getElementById('p9')

let r10 = 144;
let c10 = document.getElementById('p10')

function check(){
    if(r1 == c1.value){
        point++;
    } 
    if(r2 == c2.value){
        point++;
    }
    if(r3 == c3.value){
        point++;
    }
    if(r4 == c4.value){
        point++;
    }
    if(r5 == c5.value){
        point++;
    }
    if(r6 == c6.value){
        point++;
    }
    if(r7 == c7.value){
        point++;
    }
    if(r8 == c8.value){
        point++;
    }
    if(r9 == c9.value){
        point++;
    }
    if(r10 == c10.value){
        point++;
    }
alert(nome + ' fez ' + point + ' ponto(s)')
point = 0
} 