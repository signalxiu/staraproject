
function random_color(){
    var r = function () {
        return Math.floor(Math.random()*256) };
    return "rgb(" + r() +"," + r() +"," + r() +")";
}//随机获得一种颜色

var color = String(random_color());
//函数变为字符串，设变量
var box = document.getElementsByClassName("box");

function star_color() {
    setInterval (function change() {
        for(var i = 0, max = box.length ; i < max ; i++) {
            box[i].style.background = "orange";}//遍历每个box类变成原色
        var idx = Math.floor(Math.random() * box.length) ;
        return box[idx].style.backgroundColor = color;
    },1000);
}//随机选择一格变随机颜色，1000毫秒重复执行


function stop_color() {
    window.location.reload();
}//刷新页面