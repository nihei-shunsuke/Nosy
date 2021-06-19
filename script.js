function addOption() {
    // selectタグを取得する
    var select = document.getElementById("sampleSelect");
    // optionタグを作成する
    var option = document.createElement("option");
    // optionタグのテキストを4に設定する
    option.text = 4;
    // optionタグのvalueを4に設定する
    option.value = 4;
    // selectタグの子要素にoptionタグを追加する
    select.appendChild(option);
   }