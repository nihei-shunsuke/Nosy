let nico = new nicoJS({
    app       : document.getElementById('app'),
    width     : 600,
    height    : 400,
    font_size : 50,     // opt
    color     : '#000'  // opt
})


nico.listen();
document.getElementById('btn').onclick = function() {
    var text = document.getElementById('comment').value;
    nico.send(text + "の予定入ったwww");
    nico.send(text, '#000000'); // 色変更
    nico.send(set_startminute() + "分からだってwwww");
}

function set_startminute(minute) {
    startminute = minute;
    return minute;
}