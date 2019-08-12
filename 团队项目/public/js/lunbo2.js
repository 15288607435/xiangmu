var w=1;
            $(".two-l>ul>li").mouseenter(function(){
                var n=$(this).index();
                if(w>0){
                    w++;
                    console.log(w);
                }
                // console.log($(this).index());
                $(".two-r").children().eq(n).css("zIndex",w);
            })
            $(".two-l>ul>li").click(function(){
                var n=$(this).index();
                // console.log($(this).index());
                $(".two-r").children().eq(n).css("zIndex",w);
            })