//let unko ="Hello World!";
//unko = "Hello World2";
//const bigUnko = "He..Hell....Hello World!";

let inoki = ['いち','にい','3','だー！'];

//console.log(inoki[2]);

//ループ文
//let index = 0;
//while(index < inoki.length){
//    console.log(inoki[index])
//    index++;
//}

//if(inoki.length > 5){
//    console.log('ボンバイエ！')
//}
//else{
//    console.log('ボンバ！')
//}
const test= (arg) => {
    if(inoki.length > arg){
        console.log('ボンバイエ！')
    }
    else{
        console.log('ボンバ！')
    }
};
const unko2 = {
    color:"pink",
    size:"large",
    perfume:"mint",
    goTOilet:() => {
        console.log('Hello World!');
    }
};
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    console.log('Hallo World!');
});
