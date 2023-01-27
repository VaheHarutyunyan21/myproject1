let text = document.querySelector(".text");
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let plus1 = document.querySelector("#plus1");
let minus1 = document.querySelector("#minus1");
let plus2 = document.querySelector("#plus2");
let minus2= document.querySelector("#minus2");
let pp=document.querySelector("#pp");
let pp1=document.querySelector("#pp1");
let pp2=document.querySelector("#pp2");
let btninput=document.querySelector("#btninput");




plus.addEventListener('click',()=> x('y'))
minus.addEventListener('click',()=> x('z'))
plus1.addEventListener('click',()=> x1('y1'))
minus1.addEventListener('click',()=> x1('z1'))
plus2.addEventListener('click',()=> x2('y2'))
minus2.addEventListener('click',()=> x2('z2'))
a.addEventListener('click',function btn(sam) {btninput.value=(+btninput.value) + (+text.innerHTML)} )
a1.addEventListener('click',function btn1(sam1) {btninput.value=(+btninput.value) + (+text1.innerHTML)} )
a2.addEventListener('click',function btn2(sam2) {btninput.value=(+btninput.value) + (+text2.innerHTML)} )



console.log(text2.innerHTML)

console.log(typeof(+text2.innerHTML))

function x(abc){
    if (abc=='y') {
        text.innerHTML++
         pp.value=(+pp.value) + 95;

        
        
    }else if (abc=='z') {
        text.innerHTML--
        pp.value=(+pp.value)-95;
        
    }if (text.innerHTML<1) {
        text.innerHTML=1
        pp.value=95;
        
    }
}



function x1(abc){
    if (abc=='y1') {
        text1.innerHTML++
        pp1.value=(+pp1.value) + 120;
        
    }else if (abc=='z1') {
        text1.innerHTML--
        pp1.value=(+pp1.value) - 120;
        
    }if (text1.innerHTML<1) {
        text1.innerHTML=1
        pp1.value=120;
        
        
    }
}

function x2(abc){
    if (abc=='y2') {
        text2.innerHTML++
        pp2.value=(+pp2.value) + 405;
        
    }else if (abc=='z2') {
        text2.innerHTML--
        pp2.value=(+pp2.value) - 405;
        
    }if (text2.innerHTML<1) {
        text2.innerHTML=1
        pp2.value=405;
        
    }
}





























