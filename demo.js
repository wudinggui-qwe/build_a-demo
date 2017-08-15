/**
 * Created by Administrator on 2017/8/12 0012.
 */

/*function move(odiv,container){
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
}*/
//如果没输入 就是继续将设定好的播放(no)
//将speed属性做成随机值(clear)
//可重复调用函数
//animate要好好调试
//弄好信息接收和修改工作

//基本任务已完成 还缺少定时功能，缺陷表现为发弹幕之后前面
//未完成的移动也会消失
//优点就是将功能全都打包出来了做成了函数
//这样调用起来就很方便了
//弄一个表单判断的功能，为空就不予提交（ok）
$(function(){
    var tem=$('#template');
    var wall=$('#dmmask');
    var input=$('#text');
    var height=wall.height();
    var width=wall.width();

    function change_style(odiv){
        var r = Math.floor(Math.random() * 254);
        var g = Math.floor(Math.random() * 254);
        var b = Math.floor(Math.random() * 254);
        var zi= Math.floor(Math.random() * 30);
        var zi1=Math.floor(Math.random() * 10);
        if(zi<10)  {while(zi<10+zi1) zi++;}
        var l="rgb(" + r + "," + g + "," + b + ")";
        odiv.css({
            "color": l,
            "display": "block",
            "font-size":zi+"px"
         });
    }
    function change_top_left(odiv){
        var top=Math.random()*height;
        if(top<=20) top+=20;
        odiv.css({
            top:top+"px",
            left:width+"px"
        })
    }
    function move(odiv){
        odiv.animate({left:"20px"},20000,function(){
            //if(odiv.left()==)
            odiv.hide();
        }
    )
    }
    $('form').submit(function(event){
        event.preventDefault();
    })
    function checkform(e){
        var value=document.getElementsByClassName("dm_text").value;
        if(value=="") return false;
        else return true;
     }
    $('#btn').click(function(event){
        var value=input.val();
        if(value=="")  alert("请输入内容，否则无法提交")
        else {
            var danmu = tem.clone();
            danmu.text(input.val());
            var top = Math.random() * height;
            change_style(danmu);
            change_top_left(danmu);
            move(danmu);
            $('#dmmask').append(danmu);}
    })
    $('#clear').click(function(){
        wall.empty();
    })
})