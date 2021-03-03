$(document).ready(function(){
    $("#navBar a ,#foot a").click(function(){
        const theID=$(this).attr("href");
        const val=$(theID).offset().top-$("#head").innerHeight()+1;

        $("html").animate({scrollTop:val},1000,"swing");
        
    })

    function spy(){
        const now=$(document).scrollTop()
        $("section").each(function(){
            const
            id=$(this).attr('id'),
            offset=$(this).offset().top-$("#head").innerHeight(),
            height=$(this).innerHeight();
            if(offset<=now && now<offset+height){ //now落在某個section內
                $("#head a").removeClass("active");
                $(`#head a[href='#${id}']`).addClass("active");
            }
        })
    }
    
    function bgmenu(){
        const 
        now=$(document).scrollTop(),
        height=$("#slider").innerHeight(),
        offset=$("#head").innerHeight(),
        screen=$(document).innerWidth();
        if(screen>=992){
            if(now<height-offset){
                $("#head").removeClass("bg-dark");
                $("#top").removeClass("show");
            }else{
                $("#head").addClass("bg-dark");
                $("#top").addClass("show");
            }
        }else{
                $("#head").addClass("bg-dark");
        }
    }

    $(document).scroll(function(){
        spy();
        bgmenu();
    });
    $(window).resize(bgmenu)
    
    spy();
    bgmenu();

    //鎖右鍵
    document.oncontextmenu=function(event){
        event.preventDefault(); //清除事件預設的行為=> 按右鍵會開啟選單，清除後即無法開啟 
    }
})

// scroll bar 是在html
// scrollTop 是jquery的滾動現象，不是css屬性
// 用某元素的id可以找到offset()的top值

// $("html").animate({scrollTop:val},1000,"swing");  linear 線性 / swing過度