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





























// const array_reduce = [1,5,6,2,3];
// let x=array_reduce.reduce(function(a,b){
//     return a + b;
// })
// console.log(x)


////////////////////////////////////


// const array_join = ["H", "E", "L", "L", "O"]

// console.log(array_join.join(""));


////////////////////////////////////////

// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let x=[];

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i])
//     for (let k = 0; k < matrix[i].length; k++) {
//         x.push(matrix[i][k])
        
//     }
//     console.log(x)
    
// }



///////////////////////////////////////////////////////



// ?????????
    //console.log(find_index([1,5,6,2,3]), 5) // petq e lini 1
    //console.log(find_index([1,5,7,1,17]), 1) // petq e lini 3
    
    // let find_index=[1,5,6,2,3]

    // function find_index(arr, num){
    //  return index;
    // }
    // console.log(index)



/////////////////////////////////



//inchpes karox em gtnel name - erkarutyun@
//inchpes karox em gtnel et "b" tar@ vorerrordna name-i mej

// ??????
//Inchpes gtnm te qani angama "e" tar@ krknvum
//////
// const name = "Elizabeth";

// console.log(name.length);
// console.log(name.indexOf("b"));




/////////////////////////////////



// const stundentsData = [
//     {
//       name: "item ",
//       price:  1 
//     },
//     {
//         name: "item ",
//         price:  2 
//     },
//     {
//         name: "item ",
//         price:  3 
//     },
//   ];
//   const exam_Data = stundentsData.reduce((acc, exam)=>{
//            acc[exam.name]= exam.price
//     console.log(acc);
//   },{})

// /////////////////////////


// const name = "Elizabeth"
// const array = name.toLowerCase().split('')

// let count = array.reduce((acc, cur) => {
//     if(cur === 'e') {
//         acc++
//     }
//     return acc;
// }, 0)

// console.log(count)


