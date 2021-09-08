const question = "ゲーム市場、最も売れたゲーム機は？";
const answers = [
'スーパーファミコン'
,'PS2'
,'ニンテンドースイッチ'
,'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const setUpQuiz = ()=>{
document.getElementById('js-question').textContent = question;
let buttonIndex = 0;

while( buttonIndex < buttonLength ){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
}
}
setUpQuiz();

const clickHandler = ()=>{
    if( correct ===  e.target.textContent){
        window.alert(correct+"で正解です。");
    }
    else{
        let $selectValue = e.target.textContent
        window.alert($selectValue +"ではありません。")
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        if( correct === e.target.textContent){
            window.alert(correct+"で正解です。");
        }
        else{
            console.log(e.target)
            let $selectValue = e.target.textContent
            window.alert($selectValue +"ではありません。")
        }
    });
    handlerIndex++;
}
