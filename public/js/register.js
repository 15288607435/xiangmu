	$(function(){
		// $("#drag").slider({
		// 	width: 404, // width
		// 	height: 38, // height
		// 	sliderBg:"#e8e8e8",// 滑块背景颜色
		// 	color:"#a2a2a2",// 文字颜色
		// 	fontSize: 14, // 文字大小
		// 	bgColor: "#8b8075", // 背景颜色
		// 	textMsg: "滑动模块至右侧", // 提示文字
		// 	successMsg: "验证通过", // 验证成功提示文字
		// 	successColor: "#fff", // 滑块验证成功提示文字颜色
		// 	time: 400, // 返回时间
		// 	callback: function(result) { // 回调函数，true(成功),false(失败)
		// 	   //验证手机号的状态
		// 	   checkmobile()
		// 	}
		// });
		$(".enroll_box").on("click",".gologin",function(){
			window.location.href="/login.html?phone="+$("#phone").val();
		})
		// $("#phoneNum").on("blur",function(){
		// 	$("#drag").slider("restore");
		// })
		$(".enroll_box").on("click",".shouquan",function(){
			$.ajax({
				type: "get",
				url: "127.0.0.1:3000/login.html",
				data:{
					phone:$("#phone").val()
				},
				success: function (result) {
					if (result.code == 200) {
						$(".psw_notice").text("授权成功，请登录");
						window.location.href="http://127.0.0.1:3000/lolgin.html?phone="+$("#phone").val();
					} else {
						$(".psw_notice").text("授权失败")
					}
				},
				error: function (err) {
					console.log(err)
				}
			});
			
		})
		var tel = /^1[0-9]{10}$/;
		//$('#zhuce').drag();
		$('#yanzheng_btn').on('click', function() {
			sendMobsmsValidate();
		})
		$('.xieyi').on('click',function(){
			$("#screen").show();
			$('.userprotocol').show()
		})
		$('.userprotocol_close').on('click',function(){
			$('.userprotocol').hide();
			$("#screen").hide();
		})
		$('.agr').on('click',function(){
			$('.checkbox').attr('checked','checked')
			$('.userprotocol').hide();
			$("#screen").hide();
		})
		$('.sign-in-btn').on('click',function(){
			loginClick()
		})
	
		//注册
		function loginClick() {
			if($('#phone').val() == "请填写手机号*" || !tel.test($.trim($('#phone').val()))) {
				$(".login_msg_notice").html("请输入正确的手机号").show();
				// console.log('1')
				return false
			// } else if ($(".yanzheng_input").val() == "") {
			// 	$(".login_msg_notice").html("请输入验证码").show();
			// 	// console.log('3')
			// 	return false
			} else if ($(".setPass").val() == "" || $(".setPass").val().length<6) {
				$(".login_msg_notice").html("密码不能小于六位").show();
				// console.log('4')
				return false
			} else if ($(".setPass").val().length > 16) {
				$(".login_msg_notice").html("密码不能大于十六位").show();
				// console.log('4')
				return false
			} else if ($(".confirmpwd").val() !=$(".setPass").val()) {
				$(".login_msg_notice").html("两次请输入相同的密码").show();
				// console.log('4')
				return false
			} else if (!$("input[type='checkbox']").is(':checked')){
				$(".login_msg_notice").html("请接受服务条款").show();
				// console.log('5')
				return false
			} else {
				$.ajax({
					type: "get",
					url: 'http://127.0.0.1:3000/user/register',
					data: {
						"phone": $.trim($('#phone').val()),
						"code": $(".yanzheng_input").val(),
						// "password":$('.setPass').val()
						"upwd":$('#upwd').val()
					},
					success: function(result) {
						// console.log(result);
						if(result == 1) {
							$(".login_msg_notice").html();
							// redirectPage();
							alert("注册成功");
							window.location.href="http://127.0.0.1:3000/login.html"
						} else if (result.code == -1){
							$('.login_msg_notice').html('请求异常,请稍后尝试').show()
						} else if (result.code == 1003){
							$('.login_msg_notice').html("您已注册会员，请先进行<a href='javascript:void(0);' onclick='window.location.href = \"/login.html\" + (window.location.search?window.location.search : \"\")' style='text-decoration:underline'>登录</a>").show()
						}else if (result.code == 1004){
							$('.login_msg_notice').html('您已注册香榭之吻会员，请授权账号进行登录<a href="javascript:void(0);" class="shouquan" style="text-decoration:underline">授权</a>').show();
						} else{
							$('.login_msg_notice').html(result.desc).show()
						}
					},
					error: function(err) {
						console.log(err)
					}
				});
	
			}
	
		}
		function checkmobile(){
			$.ajax({
				type: "get",
				async: false,
				url: 'http://127.0.0.1:3000/user/lolgin',
				data:{
					"phone":$("#phone").val()
				},
				success: function(json) {
					if (json.code == 1002) {
						$(".login_msg_notice").text("").hide()
						$(".personal_pwd").attr("disabled",false)
						 $(".sign-in-btn").attr("disabled",false).css("background","#fff")
					 }else if (json.code == 1003) {
						 $(".login_msg_notice").html('此手机号已经注册，请<a href="javascript:void(0);" class="gologin" style="text-decoration:underline">登录</a>').show();
						 $(".personal_pwd").attr("disabled",true)
						 $(".sign-in-btn").attr("disabled",true).css("background","#ccc")
					 }else if(json.code == 1004){
						 $(".login_msg_notice").html('您已注册香榭之吻会员，请授权账号进行登录<a href="javascript:void(0);" class="shouquan" style="text-decoration:underline">授权</a>').show();
						 $(".resigitermobile").val("1");
						 $(".personal_pwd").attr("disabled",true);
						 $(".sign-in-btn").attr("disabled",true).css("background","#ccc")
					 }
				},
				error: function(err) {
					$(".login_msg_notice").html('请求异常,请稍后尝试');
				}
			});
		}
	})