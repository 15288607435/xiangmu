
$(document).ready(function() {
    function ckgd(slideHeight_1,wrap_div_1) {
        var slideHeight = slideHeight_1; // px
        var wrap_div = wrap_div_1;
        var defHeight = $('.'+wrap_div+'').height();
        if(defHeight > slideHeight){
            $('.'+wrap_div+'').css('height' , slideHeight + 'px');
            //<img class="jiantou" src="../../../pc/images/down.png" alt="">
            $('.'+wrap_div+'').siblings(".ckgd_div").append('<span>查看更多</span>');
            $('.'+wrap_div+'').siblings(".ckgd_div").children().click(function(){
                var index_dq = $(this).parents(".ckgd_div").siblings('.'+wrap_div);
                var curHeight = index_dq.height();
                var id = $('.'+wrap_div).parent().find("h2").attr('id');
                var parentsid = $('#'+id).offset().top - "100" + "px";
                $('html,body').animate({scrollTop:parentsid},300);
                if(curHeight == slideHeight){
                    if(wrap_div == wrap_div5){
                        index_dq.animate({
                            height: $('.ruzhuxuzhi_div_ul').height()
                        }, "normal");
 
                    }else{
                        index_dq.animate({
                            height: defHeight
                        }, "normal");
                    }
 
                    index_dq.siblings(".ckgd_div ").children('span').html('点击收藏');
                    //index_dq.siblings(".ckgd_div ").children('.jiantou').attr('src','../../../pc/images/ups.png');
                }else{
                    var id = $('.'+wrap_div).parent().find("h2").attr('id');
                    var parentsid = $('#'+id).offset().top - "100" + "px";
                    $('html,body').animate({scrollTop:parentsid},300);
                    index_dq.animate({
                        height: slideHeight
                    }, "normal");
                    //index_dq.siblings(".ckgd_div ").children('.jiantou').attr('src','../../../pc/images/down.png');
                    index_dq.siblings(".ckgd_div").children('span').html('查看更多');
                }
                return false;
            });
        }
    }
     var wrap_div1 = 'wrap_div1';
     ckgd(112,wrap_div1);
     var wrap_div2 = 'wrap_div2';
     ckgd(112,wrap_div2);
     var wrap_div3 = 'wrap_div3';
     ckgd(265,wrap_div3);
     var wrap_div5 = 'wrap_div5';
     ckgd(119,wrap_div5);
 
 
     $('.seemore').hide();
     $('.seemoreyc').hide();
 
     if($(".box").find(".fwpj_list_1").length > 2){
         $('.seemore').show();
     }
 
     var plheight = $(".box").height();
 
     if($(".box").find(".fwpj_list_1").eq(0).height()  > 0 ){
         var xianshiH = $(".box").find(".fwpj_list_1").eq(0).height() + $(".box").find(".fwpj_list_1").eq(1).height() + 50;
     }
 
     var fwpjlist = $(".box");
     fwpjlist.height(xianshiH);
     $('.seemore').click(function(){
         fwpjlist.animate({
             height: plheight
         }, "normal");
         $('.seemoreyc').css("display","inline-block");
         $('.seemore').hide();
         $('#page').show();
     });
 
     if($(".box").find(".fwpj_list_1").length > 2){
         var city_top = $('#fwpjname').offset().top - "100" + "px";
     }
     $('.seemoreyc').click(function(){
         $('html,body').animate({scrollTop:city_top},400);
         fwpjlist.animate({
             height: xianshiH,
         }, "normal");
         $('.seemoreyc').hide();
         $('.seemore').show();
         $('#page').hide();
     });
     function nav(){
         var height=0;
         var top = $('.Details_Explain_w1200_dibu').offset().top -$(".Details_Explain_w380").height() - 100;
         var oNav = $('.Details_Explain_w1200_2_1');
         var aNav = oNav.find('a');
         var aDiv = $('.Details_Explain .widget');
         var scroll_yici = false;
         var rili = $('#ui-datepicker-div')  
         var rili_left,rili_left_2,rili_left2;
         height = $(".J_Cover").height()+ $(".w100_lunbotu").height();
         var isfalse = true;
         var t;
         $(window).scroll(function() {
             if(!scroll_yici){
                  rili_left = rili.position().left ;
             }
             if(rili_left != 0){
                 scroll_yici = true;
             }
 
 
             var w = $("body").scrollTop() || $(document).scrollTop(); 
             var winH = $(window).height();
             var iTop = $(document).scrollTop();
 
             if (w > top){
                 $(".Details_Explain_w380").removeClass("w380_xq_xd")
                 $(".Details_Explain_w380").css('top', top+'px');
                 $(".Details_Explain_w380").css('position', 'absolute');
                 $(".Details_Explain_w380").css('marginLeft', '820px');
                 $('.ruzhurenshu_xuanze').hide();
 
                 if(rili_left != 0) {
                     rili.css('top', top + 'px');
                     rili.css('position', 'absolute');
                     rili.css('left', rili_left + 'px');
                 }
 
             }else if(w > height){
                 $(".Details_Explain_w380").css('top', '83px');
                 $(".Details_Explain_w380").css('marginLeft', '818px');
                 $(".Details_Explain_w380").css('position', 'fixed');
                 $(".Details_Explain_w380").addClass("w380_xq_xd")
 
                 if(rili_left != 0) {
                     rili.css('top', '251px');
                     rili.css('left', rili_left + 'px');
                     rili.css('position', 'fixed');
                 }
             }else{
                 $(".Details_Explain_w380").removeClass("w380_xq_xd")
                 $(".Details_Explain_w380").css('top', '0');
                 $(".Details_Explain_w380").css('marginLeft', '0');
                 $(".Details_Explain_w380").css('position', 'relative');
 
                 if(rili_left != 0) {
                     rili.css('top', 949 + 'px');
                     rili.css('position', 'absolute');
                     rili.css('left', rili_left + 'px');
                 }
             }
             if(w > height) {
                 $(".Details_Explain_w1200").addClass("w100_xq_xd");
                 $(".Details_Explain_w380").addClass("w380_xq_xd");
             } else if(w <= 0){
                 $(".Details_Explain_w1200").removeClass("w100_xq_xd")
             }else{
                 $(".Details_Explain_w1200").removeClass("w100_xq_xd")
                 $(".Details_Explain_w380").removeClass("w380_xq_xd")
             }
             $.each(aDiv,function(index){
                 if(isfalse){
                     if (winH + iTop - $(this).offset().top -83-83> winH / 2) {
                         if(isfalse){
                             aNav.removeClass('active').eq(index).addClass('active');
                         }
                         if($(window).scrollTop() == t){
                             isfalse = true
                         }
                      }
                 }
             });
         });
         aNav.click(function() {
             isfalse = false
             t = aDiv.eq($(this).index()).offset().top-83;
             $('body,html').animate({"scrollTop":t},500,function(){
                     isfalse = true
             });
             $(this).addClass('active').siblings().removeClass('active')
         });
     }
     nav();
     function tuikuan() {
         document.addEventListener('click',function(e){
             if(e.target.className=='tkrulesimg'){
                 $(".tuikuans").toggle();
             }else{
                 $(".tuikuans").hide();
             }
         })
 
     }
     tuikuan();
 });
 $(function () {
     $('#ruzhurenshu').click(function () {
         $("#ruzhurenshu_xuanze").show();
     })
     $('#kefang_renshu_div_img').click(function () {
         $('#ruzhurenshu').click()
     })
     $(document).bind('click',function(){
         var e = e || window.event; 
         var elem = e.target || e.srcElement;
         while (elem) {
             if (elem.id && elem.id == 'ruzhurenshu_xuanze' || elem.id && elem.id == 'ruzhurenshu' || elem.id && elem.id == 'kefang_renshu_div_img') {
                 return;
             }
             elem = elem.parentNode;
         }
         $('#ruzhurenshu_xuanze').css('display','none');
     });
     $('.ruzhurenshu_xuanze ul li a').click(function () {
         $('#ruzhurenshu').val($(this).attr('data-renshu')+' 位客房')
         $('#ruzhurenshu_chuanzhi').val($(this).attr('data-renshu'))
         sessionStorage.h_people_num=$(this).attr('data-renshu')
         $(".ruzhurenshu_xuanze").hide();
     })
     $('.share').click(function () {
         $(".share_weixin").show();
     })
     $(document).bind('click',function(){
         var e = e || window.event;
         var elem = e.target || e.srcElement;
         while (elem) {
             if (elem.id && elem.id == 'share_weixin' || elem.id && elem.id == 'share') {
                 return;
             }
             elem = elem.parentNode;
         }
         $('#share_weixin').css('display','none');
     });
 
 })
 function   formatDate(now)   {
     var   year=now.getFullYear();
     var   month=now.getMonth()+1;
     if(month<=9){
         month='0'+month;
     }
     var   date=now.getDate();
     if(date<=9){
         date='0'+date;
     }
     //console.log(year+"-"+month+"-"+date+ ' '+hour+':'+minute+':'+second)
     return   year+"年"+month+"月"+date+"日";
 }
 function texte(p,hid){
     $.get(
         location.origin+ "/house/h_comments/"+hid+"/1?page="+p,
         function (d) {
             $(".fwpj_list .box").empty();
             var data = d.evaluate.data;
             var html = '';
             var html1 = ``;
             var img1 = ``;
             var img = '';
            var content =  ``;
             var since = '';
             var start = '';
             var excellent = '';
             for (var i in data) {
                 if(data[i].avatar_path.substring(0,4)=='http'){
                     img=`<img src="${data[i].avatar_path}">`;
                 }else if(data[i].avatar_path==='undefined'){
                     img=`<img src="../pc/images/user_default.png">`;
                 }else if(data[i].avatar_path){
                     img=`<img src="https://img.95zhushu.com${data[i].avatar_path}/300X300.jpg">`;
                 }else{
                     img=`<img src="../pc/images/user_default.png">`;
                 }
                 since = `${data[i].nickname.substring(0,1)}**** ${data[i].nickname.substr(-1)}`;
                 html1 = ``;
                  for(var j = 0 ;j < data[i].star;j++ ){
                    html1 += `<img src="/pc/images/wujiaoxing.svg" alt="">`;
                 }
                 img1 = ``;
                  if(data[i].img){
                      data[i].img.forEach(function(index,item){
                          img1 += `<li class="span3"> 
                            <a class="galpop-multiple" data-galpop-group="multiple" href="${index}/raw.jpg">
                           <img src="${index}/400x300.jpg" alt="">
                           </a>
                          </li>`
                      },this)
                  }
                 if(data[i].img){
                     excellent =  '<div class="fwpj_list_1_pj_tp">'+
                                            '<ul class="thumbnails"> '+
                         img1+
                                         '</ul>'+
                                        '</div> '
                 }else{
                     excellent =  ``;
                 }
                 if(data[i].content){
                     content =  `${data[i].content}`;
                 }else{
                     content =  ``;
                 }
                 //娣诲姞鍥炲
                 var huifu = '<div class="huifu">' +
                 '<p>鎴夸笢鍥炲锛�</p>' +
                 '<div>鏁翠綋鍒璁捐涓虹畝绾︾殑娆у紡椋庯紝铻嶅叆浜嗙幇浠ｇ殑鐢熸椿鍏冪礌锛岄€氳繃瀹岀編鐨勬洸绾裤€�</div>'+
                 '</div>'
 
 
                html+=
             '<div class="fwpj_list_1">'+
                     '<div class="fwpj_list_1_yh">'+
                    img+
                     '<div class="fwpj_list_1_yh_1">'+
                     '<p class="start">'+
                     '<span>'+ since +'</span>'+
                             html1+
                 '</p>'+
                 '<p>'+
                    formatDate(new Date(data[i].created_at * 1000))+
             '</p>'+
                 '</div>'+
                 '</div>'+
                 '<div class="fwpj_list_1_pj">'+
                     '<div class="fwpj_list_1_pj_wz wrap_div wrap_div4">'+
                     content+
             '</div>'+
                 '<div class="ckgd_div"></div>'+
                    excellent+
                 '</div>'+
                    //娣诲姞鍥炲
                    '<div>' +
                    huifu+
                    '</div>'+
                 '</div>'
             }
             $(".fwpj_list .box").append(html);
             // $('.fwpj_list_1_yh_1 .start').append(html1)
             // $(document).ready(function() {
             //     $('.thumbnails img').fsgallery()
             // })
             $(document).ready(function() {
                 $('.galpop-multiple').galpop();
             });
         }
     )
 }
 function collect(t){
 
     var hid=$(t).attr('hid');
     var data1='token='+token+'&authToken='+authToken+'&time='+nowtime+'&hid='+hid;
     $.ajax({
         url:  prefix+'tenant/collect',
         method: 'post',
         //  dataType: 'json',
         data:data1,
         success: function (data) {
             if (data.status == '1') {
                 //console.log(data)
                 if(data.data.length==0){
                     $(t).attr('src','/pc/images/Bcang.svg');
                 }else{
                     $(t).attr('src','/pc/images/Rcang.svg');
                 }
                 layer.msg(data.msg,{verticalAlign: 'center'});
 
             }else if(data.status == '100'){
                 layer.msg(data.msg,{verticalAlign: 'center'});
                 location.href="/login"
             }
         }
     });
 
 }
 
 
 function xqprice(hid,check_in_time,check_out_time){
     data1='&token='+token+'&authToken='+authToken+'&time='+nowtime+'&hid='+hid+'&check_in_time='+check_in_time+'&check_out_time='+check_out_time;
     // console.log(data1);
     $.ajax({
         url: prefix+ "order/order-price",
         method: "post",
         data: data1,
         success: function (data) {
             // console.log(data);
             if (data.status == '1') {
                 $('.b_price').text('锟�'+data.data[0].middle_rate.substring(0,data.data[0].middle_rate.length-3))
                 // $('.gongji').text('姣忔櫄')
             }
         },
     });
 }
 
// 预定详情
