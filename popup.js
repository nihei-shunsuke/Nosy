//window.onload= function(){ //window の load イベントに対応するイベントハンドラ
function initPopup() {
    let box = document.querySelector("#box"); //id要素取得
    let btn = document.querySelector("#btn"); //id要素取得
    let close = document.querySelector("#close") //id要素取得
    
    let boxstyle = box.style; //boxのstyle値をboxstyleに格納
    
    btn.onclick = function(){ //btnがクリックされた時動かす関数
        if(boxstyle.display === "block"){ 
            boxstyle.display = "none";
        }else{
            boxstyle.display = "block";
        }
    };
    
    close.onclick= function(){ //closeがクリックされた時の関数
        boxstyle.display = "none";
    };
    
    }