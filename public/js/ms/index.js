//实现多个页面切换
(function(){
  //DOM 4步:
  //1. 查找触发事件的元素
  var as=document.querySelectorAll(
    "#tab>div>[data-target]"
  );
  //2. 绑定事件处理函数
  var i=10;//累积zIndex
  for(var a of as){
    a.onclick=function(){
      //3. 查找要修改的元素
      //获得保存在a上的自定义扩展属性data-target中的id名
      var id=this.getAttribute("data-target");
          //this.dataset.target;
      var div=
        document.getElementById(id);
      //4. 修改元素
      div.style.zIndex=i++;
    } 
  }
})();
(function(){
  var div=document.querySelectorAll("ul.roes>li");
  for(var i=0;i<div.length;i++){
    var btn=div[i]
    btn.onmousedown=function(){
      console.log(11)
      var id = this.getAttribute("data-id");
      var ul = document.getElementById(id);
      var room = document.querySelectorAll("div.roms>ul");
      for (var t = 0; t < room.length; t++) {
          var tu = room[t];
          tu.className = "search_room1";
      }
      ul.className = "search_room1 show";
  
    }
  }
})()