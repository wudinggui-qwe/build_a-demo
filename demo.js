/**
 * Created by Administrator on 2017/8/12 0012.
 */
var hh=0;
    function change_style(odiv,container){
    var r = Math.floor(Math.random() * 254);
    var g = Math.floor(Math.random() * 254);
    var b = Math.floor(Math.random() * 254);
    var l="rgb(" + r + "," + g + "," + b + ")";
    odiv.css("color",l);
    move(odiv,container);
}
function move(odiv,container){
    var timer = setInterval(function() {
        var screen_width = document.body.clientWidth;
        var x = 0;
        var m = Math.floor(Math.random() * 100);
        var n = Math.floor(Math.random() * 10000);
        var val=$("div h2").eq(0);
        if(odiv==val)
        {val.css("right","0");move(val,container);}
        else {
            if (x > screen_width) {
                clearInterval(timer);
            }
            $(odiv).animate({
                right: screen_width + x + "px"
            }, n);
            x += m;
        }
    },10);
}
function over(){
     $("div h2").eq(3).remove();
    $("div h2").eq(4).remove();
    $("div h2").eq(5).remove();
    $("div h2").eq(1).remove();
    $("div h2").eq(2).remove();
    $("div h2").eq(0).remove();
}
function over1(){
    $("div h2").eq(hh).remove();
}
function judge(odiv,contanier){
    var value=document.getElementById("dm_txt").value;
    if(value==""){
        odiv.html("wudinggui");
    }else {
        odiv.html(value);
    }

    change_style(odiv,contanier);
}
//如果没输入 就是继续将设定好的播放(no)
//将speed属性做成随机值(clear)
//可重复调用函数
//animate要好好调试
//弄好信息接收和修改工作
$(document).ready(function(){
    $("button").click(function (event)
    {
            if(hh>=6) {over();hh=0;}
            var container = document.getElementById("dm_mask");
            var value=document.getElementById("dm_txt").value;
            if(value=="") {
                event.preventDefault();
                alert("请在其中写入内容，否则内容无法提交");
            }
           else {
                // container.innerHTML="";
                           $("#dm_mask").append("<h2 class='text_right'></h2>");
                           var val = $("div h2").eq(hh);
                          judge(val, container); hh++;over1();
            }
    });
            /*for(i=0;i<4;i++) {
            var =document.getElementById("dm_txt").value;
        if(value=="") min.innerHTML="<h2 >wudinggui</h2>"
        else min.innerHTML="<h2 >value</h2>"}*/
    $(".dm_clear").click(function(){
        var min=document.getElementById("dm_mask");
        min.innerHTML="";
        min.innerHTML="<h2 class='text_right'></h2>";
        });


});

//基本任务已完成 还缺少定时功能，缺陷表现为发弹幕之后前面
//未完成的移动也会消失
//优点就是将功能全都打包出来了做成了函数
//这样调用起来就很方便了
//弄一个表单判断的功能，为空就不予提交（ok）