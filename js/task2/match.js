//
//
// $(function() {
//     $( "#slider-range-min" ).slider({
//         range: "min",
//         value: 4,
//         min: 1,
//         max: 20,
//         slide: function( event, ui ) {
//             $( "#amount" ).val(+ ui.value );
//         }
//     });
//     $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
// });
//

var num = document.getElementById("num");
var icon = document.getElementById("icon");
var a ;
var b ;
var numa = "<div class='row'><div class='block2 g-inlineb'></div><div class='g-inlineb'>杀手1人</div></div>";
//给杀手显示标签赋值给变量numa
var numb = "<div class='row'><div class='block1 g-inlineb'></div><div class='g-inlineb'>水民1人</div></div>";
//给杀手显示标签赋值给变量numb

function num_change() {
    if (num.value <= 18 && num.value >= 4) {
        icon.value = num.value;
    } else {
        alert("请选择范围内的人数");
        num.value = 4;
        icon.value = 4;
    }
}//请选择范围内的玩家人数

function icon_change() {
    num.value = icon.value;
}//滑块的数值赋值给玩家人数

function minus_id() {
    icon.value--;
    if (num.value <= 4) {
        num.value = 4;
        alert("超出范围重新选择")
    } else {
        num.value = icon.value
    }
}//减超出范围重新选择

function plus_id() {
    icon.value++;
    if (num.value >= 18) {
        num.value = 18;
        alert("超出范围重新选择")
    } else {
        num.value = icon.value
    }
}//加超出范围重新选择


$("#change").click(function () {
    if (num.value <= 5) {
        a = 1;
    } else if (num.value <= 8) {
        a = 2;
    } else if (num.value <= 11) {
        a = 3;
    } else if (num.value <= 15) {
        a = 4;
    } else {
        a = 5;
    }
    b = num.value - a;//杀手水民人数分配

    var killer = new Array();
    for (var i = 0; i < a; i++) {
        killer[i] = numa;
    }//杀手数组

    var people = new Array();
    for (var i = 0; i < b; i++) {
        people[i] = numb;
    }//水民数组

    var kp = killer.concat(people);//杀手水民组合数组

    var kp2 = [];
    while (kp.length) {
        var index = ~~(Math.random() * kp.length);
        kp2.push(kp[index]);
        kp.splice(index, 1);
    }//杀手水民数组乱序
    $(".abnum").empty();//清空
    $(".abnum").append(kp2);
});

