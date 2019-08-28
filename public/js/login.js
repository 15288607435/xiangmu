$(function () {
    if(getUrlVars('mobile')){
        $('#style').html('账号密码登录')
        $('.forget').hide()
        $('.information').removeClass('show')
        $('.information').addClass('hide')
        $('.code_login').removeClass('hide')
        $('.code_login').addClass('show')
        $('.login_button').hide()
        $('.code_login_button').show()
        $("#phoneNum").val(getUrlVars('mobile'))
        $(".loginmobile").val(getUrlVars('mobile'));
        $("#drag").slider({
            width: 404, // width
            height: 38, // height
            sliderBg:"#e8e8e8",// 滑块背景颜色
            color:"#a2a2a2",// 文字颜色
            fontSize: 14, // 文字大小
            bgColor: "#8b8075", // 背景颜色
            textMsg: "滑动模块至右侧", // 提示文字
            successMsg: "验证通过", // 验证成功提示文字
            successColor: "#fff", // 滑块验证成功提示文字颜色
            time: 400, // 返回时间
            callback: function(result) { // 回调函数，true(成功),false(失败)
               //验证手机号的状态
               //checkmobile()
            }
        });
        $("#drag").slider({
            width: 404, // width
            height: 38, // height
            sliderBg:"#e8e8e8",// 滑块背景颜色
            color:"#a2a2a2",// 文字颜色
            fontSize: 14, // 文字大小
            bgColor: "#8b8075", // 背景颜色
            textMsg: "滑动模块至右侧", // 提示文字
            successMsg: "验证通过", // 验证成功提示文字
            successColor: "#fff", // 滑块验证成功提示文字颜色
            time: 400, // 返回时间
            callback: function(result) { // 回调函数，true(成功),false(失败)
               //验证手机号的状态
               //checkmobile()
            }
        });
    }
    // else{
    //     $("#yanzheng").slider({
    //         width: 404, // width
    //         height: 38, // height
    //         sliderBg:"#e8e8e8",// 滑块背景颜色
    //         color:"#a2a2a2",// 文字颜色
    //         fontSize: 14, // 文字大小
    //         bgColor: "#8b8075", // 背景颜色
    //         textMsg: "滑动模块至右侧", // 提示文字
    //         successMsg: "验证通过", // 验证成功提示文字
    //         successColor: "#fff", // 滑块验证成功提示文字颜色
    //         time: 400, // 返回时间
    //         callback: function(result) { // 回调函数，true(成功),false(失败)
    //            //验证手机号的状态
    //            checkmobile()
    //         }
    //     });
    //     $("#drag").slider({
    //         width: 404, // width
    //         height: 38, // height
    //         sliderBg:"#e8e8e8",// 滑块背景颜色
    //         color:"#a2a2a2",// 文字颜色
    //         fontSize: 14, // 文字大小
    //         bgColor: "#8b8075", // 背景颜色
    //         textMsg: "滑动模块至右侧", // 提示文字
    //         successMsg: "验证通过", // 验证成功提示文字
    //         successColor: "#fff", // 滑块验证成功提示文字颜色
    //         time: 400, // 返回时间
    //         callback: function(result) { // 回调函数，true(成功),false(失败)
    //            //验证手机号的状态
    //            checkmobile()
    //         }
    //     });
    // }

    function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}

    //登录
    $('#static_login_btn').on('click', function () {
        logosub()
    })
    $(".btn-dl").on("click", "#code_login_btn", function () {
        loginClick()
    })
    $('.forget').on('click', function () {
        window.location.href = "forgetpwd.html" + getParams();
    })
    var num = 0
    $('#style').on('click', function () {
        num++;
        if (num % 2 == 0) {
            $('#style').html('验证码登录')
            $('.forget').show()
            $('.information').removeClass('hide')
            $('.information').addClass('show')
            $('.code_login').removeClass('show')
            $('.code_login').addClass('hide')
            $('.login_button').show()
            $('.code_login_button').hide()
            //$("#drag").slider("restore");
            // $("#yanzheng").slider()
            $(".psw_notice").html("");
            $(".loginmobile").val($.trim($("#phone").val()))
        } else {
            $('#style').html('账号密码登录')
            $('.forget').hide()
            $('.information').removeClass('show')
            $('.information').addClass('hide')
            $('.code_login').removeClass('hide')
            $('.code_login').addClass('show')
            $('.login_button').hide()
            $('.code_login_button').show()
            // $("#yanzheng").slider("restore");
            //$("#drag").slider()
            $(".psw_notice").html("");
            $(".loginmobile").val($.trim($("#phoneNum").val()))
        }
    })

    //  用户账号密码登录
    function logosub() {
        var drag_text = $("#drag").find(".drag_text").text();
        var loginName = $('#phone').val();
        var loginPassword = $('#upwd').val();
        var mtel = /^1[0-9]{10}$/;
        var mreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (loginName == "" || loginName == null || (!mtel.test(loginName) && !mreg.test(loginName))) {
            $(".psw_notice").html("请输入正确的用户名");
            return false
        } else if (drag_text != '验证通过') {
            $(".psw_notice").html("请进行滑动验证");
            return false
        } else if (loginPassword.length < 6) {
            $(".psw_notice").html("请输入正确的密码");
            return false
        } else {
            $.ajax({
                type: "get",
                url: 'http://127.0.0.1:3000/user/login',
                data: {
                    "phone": loginName,
                    "upwd": loginPassword
                },
                async: false,
                success: function (result) {
                    // console.log(result.length);
                    if (result.length ==1) {
                        window.location.href="http://127.0.0.1:3000/index.html"
                        // redirectPage();
                        // console.log(result)
                        alert("登录成功");
                        console.log(loginName,loginPassword);
                    // } else if (result.code == -1) {
                    //     $(".psw_notice").text("请求异常,请稍后尝试");
                    } else if (result.code == 0) {
                        $(".psw_notice").html('您尚未注册会员，请先进行<a href="javascript:void(0);" onclick="window.location.href = \'/register.html\' + (window.location.search?window.location.search : \'\')" style="text-decoration:underline">注册</a>');
                    // } else if(result.code == 1004){
                    //     $(".psw_notice").html('您已注册香榭之吻会员，请授权账号进行登录<a href="javascript:void(0);" class="shouquan" style="text-decoration:underline">授权</a>');
                    // }else {
                    //     $(".psw_notice").text(result.desc);
                    }
                },
                error: function (err) {
                    $(".psw_notice").text("请求异常,请稍后尝试");
                }
            })
        }
    }

    //快捷登录设置密码
    function codesub() {
        var loginName = $('#phone').val();
        var loginPassword = $('#upwd').val();
        var mtel = /^1[0-9]{10}$/;
        var mreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if ($('.password_set').val().length < 6) {
            $(".set_notice").html("密码不能小于六位");
            return false
        } else if ($('.password_set').val().length > 16) {
            $(".set_notice").html("密码不能大于十六位");
            return false
        } else if ($('.make_sure').val() == "") {
            $(".set_notice").html("请输入确认密码");
            return false
        } else if ($('.make_sure').val() != $('.password_set').val()) {
            $(".set_notice").html("输入密码不一致,请重新输入");
            return false
        }
        else {
            $.ajax({
                url: '/api/v1/member-auth/auth/set-password',
                data: {
                    "password": $('.password_set').val(),
                    "confirmPassword": $('.make_sure').val()
                },
                type: 'post',
                async: false,
                success: function (result) {
                    // console.log(result)
                    if (result.code == 200) {
                        // window.location.href='https://www.ido-love.com';
                        redirectPage();
                    } else if (result.code == -1) {
                        $('.set_notice').text('请求异常,请稍后尝试')
                    } else if (result.code == 401) {
                        $('.sign_in').hide()
                    } else if (result.code == 1002) {
                        $('.sign_in').hide()
                    } else {
                        $('.set_notice').text(result.desc)
                    }
                },
                error: function (err) {
                    $(".set_notice").text("请求异常,请稍后尝试");
                }
            })
        }
    }
    var tel=/^1[0-9]{10}$/
    //登录事件封装 
    function loginClick() {
        if ($('#phoneNum').val() == "" || !tel.test($.trim($('#phoneNum').val()))) {
            $(".psw_notice").html("请输入正确的手机号");
            return false
        } else if ($('.code_login').find(".ui-slider-text").text() != '验证通过') {
            $(".psw_notice").html("请拖动滑块至最右端");
            return false
        } else if ($(".yanzheng_input").val() == "") {
            $(".psw_notice").html("请输入动态码");
            return false
            // } else if (!$('#checkLogin_01').get(0).checked){
            // 	$(".login_msg_notice").html("请接受服务条款");
            // 	return false
        } else {
            $.ajax({
                type: "get",
                url: '/routers/index',
                data: {
                    "mobile": $('#phoneNum').val(),
                    "code": $("#password").val()
                },
                async: false,
                success: function (result) {
                    if (result.code == 1) {
                        $(".psw_notice").html('');
                        if (result.data == 'firstLogin') {
                            // window.location.href = '/loginBranch.html'
                            $('.sign_in').show()
                        } else {
                            redirectPage();
                        }
                    } else if (result.code == -1) {
                        $('.psw_notice').html('请求异常,请稍后尝试')
                    } else if (result.code == 0) {
                        $(".psw_notice").html('您尚未注册会员，请先进行<a href="javascript:void(0);" onclick="window.location.href = \'/register.html\' + (window.location.search?window.location.search : \'\')" style="text-decoration:underline">注册</a>');
                    }else if(json.code == 1004){
                        $(".psw_notice").html('您已注册香榭之吻会员，请授权账号进行登录<a href="javascript:void(0);" class="shouquan" style="text-decoration:underline">授权</a>');
                    } else {
                        $('.psw_notice').html(result.desc)
                        // console.log(result.code)
                    }
                },
                error: function (err) {
                    console.log(err)
                }
            });
        }
    }

    function getParams() {
        var params = window.location.search;
        if (params) {
            return params;
        }
        return '';
    }
    function checkmobile(){
        $.ajax({
            type: "get",
            async: false,
            url: '/routers/index',
            data:{
                "mobile":$(".loginmobile").val()
            },
            success: function(json) {
                if (json.code == 0) {
                    $(".psw_notice").text("此手机号尚未注册，请注册");
                    $("#static_login_btn").attr("disabled",true).css("background","#ccc");
                    $("#code_login_btn").attr("disabled",true).css("background","#ccc");
                    
                 }else if (json.code == 1) {
                     $(".psw_notice").text("");
                     $("#static_login_btn").attr("disabled",false).css("background","#fff");
                     $("#code_login_btn").attr("disabled",false).css("background","#fff");
                 }else if(json.code == -1){
                     $(".psw_notice").html('您已注册香榭之吻会员，请授权账号进行登录<a href="javascript:void(0);" class="shouquan" style="text-decoration:underline">授权</a>');
                     $("#static_login_btn").attr("disabled",true).css("background","#ccc");
                     $("#code_login_btn").attr("disabled",true).css("background","#ccc");
                 }
            },
            error: function(err) {
                $(".psw_notice").html('请求异常,请稍后尝试');
            }
        });
    }
    function getUrlVars(key){
        var vars = {}, hash;
        var urls=window.location.search;
        var hashes = urls.slice(urls.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
        return vars[key];
    }
    
});

/* 
 * drag 1.0
 * create by tony@jentian.com
 * date 2015-08-18
 * 拖动滑块
 */
(function($){
    $.fn.drag = function(options){
        var x, drag = this, isMove = false, defaults = {
        };
        var options = $.extend(defaults, options);
        //添加背景，文字，滑块
        var html = '<div class="drag_bg"></div>'+
                    '<div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>'+
                    '<div class="handler handler_bg"></div>';
        this.append(html);
        
        var handler = drag.find('.handler');
        var drag_bg = drag.find('.drag_bg');
        var text = drag.find('.drag_text');
        var maxWidth = drag.width() - handler.width();  //能滑动的最大间距
        
        //鼠标按下时候的x轴的位置
        handler.mousedown(function(e){
            isMove = true;
            x = e.pageX - parseInt(handler.css('left'), 20);
        });
        
        //鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
        $(document).mousemove(function(e){
            var _x = e.pageX - x;
            if(isMove){
                if(_x > 0 && _x <= maxWidth){
                    handler.css({'left': _x});
                    drag_bg.css({'width': _x});
                }else if(_x > maxWidth){  //鼠标指针移动距离达到最大时清空事件
                    dragOk();
                }
            }
        }).mouseup(function(e){
            isMove = false;
            var _x = e.pageX - x;
            if(_x < maxWidth){ //鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
                handler.css({'left': 0});
                drag_bg.css({'width': 0});
            }
        });
        
        //清空事件
        function dragOk(){
            handler.removeClass('handler_bg').addClass('handler_ok_bg');
            text.text('验证通过');
            drag.css({'color': '#fff'});
            handler.unbind('mousedown');
            $(document).unbind('mousemove');
            $(document).unbind('mouseup');
        }
    };
})(jQuery);