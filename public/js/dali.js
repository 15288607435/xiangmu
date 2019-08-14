$('.ReplyTOcomments').bind("selectstart", function() {return false;});
var erweima = window.location.href;
$('#erweima').qrcode(erweima);
$('#erweima2').qrcode(erweima);

$('.pl').click(function () {
    $('body,html').animate({
        "scrollTop": $('.CommentModule').offset().top-20
    }, 500);
    $('#fbpl').focus()
})

$(document).scroll(function(){

    var wScrollTop = $(document).scrollTop();
    if($('.Disclaimer').offset().top-$(window).height()+120<wScrollTop){
        $('.A_fq').hide()
    }else{
        $('.A_fq').show()
    }
})

$('.dz').click(function(){
    if(authToken==''){
        layer.msg('请先登录');
        return false;
    }

    var data = 'cid='+$('#cid').val()+c_data
    var num = $('.shangwz').text()

    $.post(
        prefix+'community/like',
        data,
        function(d){
            if (d.status){
                num++
                $('.shangwz').text(num)
                $('.dzs').text(num + '点赞')
                $('.dz').parent('li').addClass('active')
            } else{
                num--
                if(num==0){
                    num = ''
                }
                $('.shangwz').text(num)
                $('.dzs').text(num + '点赞')
                $('.dz').parent('li').removeClass('active')
            }
        }
    )
})

$('.sc').click(function(){
    if(authToken==''){
        layer.msg('请先登录');
        return false;
    }

    var data = 'cid='+$('#cid').val()+c_data
    $.post(
        prefix+'community/collect',
        data,
        function(d){
            if (d.status){

                $('.sc').parent('li').addClass('active')
            } else{
                $('.sc').parent('li').removeClass('active')

            }
        }
    )
})

function reply_comment(cname,name,pid=0,tid=0){
    if(authToken==''){
        layer.msg('请先登录');
        return false;
    }

    $('.'+cname).css('display','block')
    $('.'+cname).find('textarea').attr('placeholder','点赞'+name)

    $('.'+cname).find('textarea').attr('pid',pid)
    $('.'+cname).find('textarea').attr('tid',tid)
}

function formatDate(now)   {

    var   year=now.getFullYear();
    var   month=now.getMonth()+1;
    if(month<=9){
        month='0'+month;
    }
    var   date=now.getDate();
    if(date<=9){
        date='0'+date;
    }
    var hour = now.getHours();
    if(hour<=9){
        hour='0'+hour;
    }
    var minute = now.getMinutes();
    if(minute<=9){
        minute='0'+minute;
    }
    var second = now.getSeconds();
    if(second<=9){
        second='0'+second;
    }

    return   year+"年"+month+"月"+date+ ' '+hour+':'+minute;
}

var btn1 = true
$('.fbpl').click(function(){

    var data = 'cid='+$('#cid').val()+'&content='+$('#fbpl').val()+c_data

    if (btn1){
        btn1 = false
        $.post(
            prefix+'community/reply-comment',
            data,
            function(d){
                if (d.status){

                    var num = $('.CommentNumber').text().replace(/\W+/,'')
                    $('.CommentNumber').text(++num+'鏉¤瘎璁�')

                    layer.msg('请先登录')
                    $('#fbpl').val('');
                    var img_src='';
                    if(d.data.avatar_path.substr(0,4)=='http'){
                        img_src=d.data.avatar_path
                    }else if(d.data.avatar_path=='undefined'){
                        img_src='/pc/images/default_touxiang.svg'
                    } else if(d.data.avatar_path){
                        img_src='https://img.95zhushu.com'+d.data.avatar_path+'/raw.jpg';
                    }else{
                        img_src='/pc/images/default_touxiang.svg'
                    }

                    var html = `
                        <div class="CommentReply_list">

                        <div class="MainComment">
                            <div class="MainCommentPeople">
                                <img src="`+img_src+`" alt="">
                                <div>
                                    <p><span>`+d.data.name+`</span><span class="hfsc" onclick="delete_comment(`+d.data.rid+`,1,this)">鍒犻櫎</span></p>
                                    <p>`+formatDate(new Date(d.data.created_at*1000))+`</p>
                                </div>
                            </div>
                            <div class="MainCommentContent">
                                `+d.data.content+`
                            </div>
                        </div>
                            <div class="ReplyTOcomments r`+d.data.rid+`" style="display: none;">
                            <textarea name="" id="t`+d.data.rid+`"></textarea>
                            <div>
                                <span class="qxhf" onclick="cancelReply()">鍙栨秷鍥炲</span>
                                <span class="hf" onclick="comment_fb('`+d.data.rid+`')">鍥炲</span>
                                {{--<span class="hf kd">鍥炲</span>--}}
                            </div>
                        </div>
                    </div>
                        `
                    $('.CommentReply').prepend(html)
                    btn1 = true
                } else{
                    layer.msg(d.msg)
                    btn1 = true
                }
            }
        )
    } else{
        layer.msg('璇风◢鍚�')
    }
})

var btn2 = true
function comment_fb(cname){

    var data = 'cid='+$('#cid').val()+'&content='+ $('#t'+cname).val()+'&pid='+ $('#t'+cname).attr('pid')+'&tid='+ $('#t'+cname).attr('tid')+c_data

    if(btn2){
        btn2 = false
        $.post(
            prefix+'community/reply-comment',
            data,
            function(d){
                if (d.status){
                    layer.msg('璇勪环鎴愬姛')
                    $('.ReplyTOcomments').css('display','none')
                    $('#t'+cname).val('')

                    var num = $('.CommentNumber').text().replace(/\W+/,'')
                    $('.CommentNumber').text(++num+'鏉¤瘎璁�')


                    var img_src='';
                    if(d.data.avatar_path.substr(0,4)=='http'){
                        img_src=d.data.avatar_path
                    }else if(d.data.avatar_path=='undefined'){
                        img_src='/pc/images/default_touxiang.svg'
                    } else if(d.data.avatar_path){
                        img_src='https://img.95zhushu.com'+d.data.avatar_path+'/raw.jpg';
                    }else{
                        img_src='/pc/images/default_touxiang.svg'
                    }

                    var html = `
<div class="ReplyTOcommentsList-1-2">
                                    <div class="MainCommentPeople">
                                        <img src="`+img_src+`" alt="">
                                        <div>
                                            <p>
                                                <span>`+d.data.name+`<span> 鍥炲 </span>`+d.data.pname+`</span>
                            <span class="hfsc" onclick="delete_comment(`+d.data.rid+`,2,this)">鍒犻櫎</span>
                            </p>
                            <p>`+formatDate(new Date(d.data.created_at*1000))+`</p>
                                        </div>
                                    </div>
                                    <div class="MainCommentContent">
                                        `+d.data.content+`
                            </div>
                        </div>
                        `
                    var html1 = ''
                    if($('.r1-'+$('#t'+cname).attr('tid')).length > 0){
                        html1 = html
                        $('.r1-'+$('#t'+cname).attr('tid')).prepend(html1)
                    }else{
                        html1 = `<div class="ReplyTOcommentsList">
                                <i></i>
                                <div class="ReplyTOcommentsList-1 r1-`+d.data.tid+`">`+html+`</div></div>`
                        $('.r-'+$('#t'+cname).attr('tid')).append(html1)
                    }
                    btn2 = true
                } else{
                    layer.msg(d.msg)
                    btn2 = true
                }
            }
        )
    }else{
        layer.msg('璇风◢鍚�')
    }

}

function cancelReply(){
    $('.ReplyTOcomments').css('display','none')
}

var btn3 = true
function delete_comment(rid,type,e) {
    layer.confirm('纭畾鍒犻櫎锛�', {
        btn: ['纭畾','鍙栨秷'] //鎸夐挳
    }, function(){
        var data = 'rid='+rid+c_data
        if(btn3){
            btn3 = false
            $.post(
                prefix+'community/delete-reply-comment',
                data,
                function(d){
                    layer.msg(d.msg)
                    if (d.status){

                        var num = $('.CommentNumber').text().replace(/\W+/,'')
                        $('.CommentNumber').text(--num+'鏉¤瘎璁�')

                        if(type==1){
                            $(e).parents('.CommentReply_list').remove()

                        }else if(type==2){
                            if($(e).parents('.ReplyTOcommentsList').find('.ReplyTOcommentsList-1-2').length>1){
                                $(e).parents('.ReplyTOcommentsList-1-2').remove()
                            }else{
                                $(e).parents('.ReplyTOcommentsList').remove()
                            }
                        }
                    }
                    btn3 = true
                }
            )
        }else{
            layer.msg('璇风◢鍚�')
        }

    });
}

$('.LogIn').find('textarea').keyup(function(){
    if($(this).val().length > 0){
        $('.LogIn').find('div span').addClass('kd')
    }else{
        $('.LogIn').find('div span').removeClass('kd')
    }
})

$('.ReplyTOcomments').find('textarea').keyup(function(){
    if($(this).val().length > 0){
        $('.ReplyTOcomments').find('div span').addClass('kd')
    }else{
        $('.ReplyTOcomments').find('div span').removeClass('kd')
    }
})
