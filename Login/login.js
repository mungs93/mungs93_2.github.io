$(function(){
    $("#main, #page").css({
        "width" : function(){
            var width = window.innerWidth;
            width *= .80;
            width -= 30;
            return width;
        },
        "height" : function(){
            var height = window.innerHeight;
            height *= .80;
            height -= 30;
            return height;
        }
    });
    $("#page").slideUp(0);
    $("#login").on("touchstart click", function(){
        var pass = $("#pass").val();
        var user = $("#user").val();
        if(!pass){
            $("#pass").css({
                "borderLeft" : "solid 2px #F77",
                "background" : "rgba(255, 0, 0, .1)"
            });
        }
        else{
            $("#pass").css({
                "borderLeft" : "solid 2px #AAA",
                "background" : "rgba(240, 240, 240, .5)"
            });
        }
        if(!user){
            $("#user").css({
                "borderLeft" : "solid 2px #F77",
                "background" : "rgba(255, 0, 0, .1)"
            });
        }
        else{
            $("#user").css({
                "borderLeft" : "solid 2px #AAA",
                "background" : "rgba(240, 240, 240, .5)"
            });
        }
        if(user && pass){
            $("#main").slideUp(1000);
            setTimeout(function(){
                $("#username").text(user)
                $("#page").slideDown(1000);
                
            }, 1080);
        }
    });
    $("#user").keyup(function(e){
        if(e.which == 13){
            $(this).trigger("blur");
            $("#pass").trigger("focus");
        }
        else{}
    });
    $("#pass").keyup(function(e){
        if(e.which == 13){
            $(this).trigger("blur");
        }
        else{}
    });
    $("#img").on("touchmove", function(){
        // Brute Force Easter Egg!!!
        alert("Starting Brute Force Easter Egg...")
        var i = 0;
        var loop;
        function randStr(){
            var str = "";
            var e = 0;
            while(e <= (Math.round(Math.random() * 5) + 5)){
                str += String.fromCharCode(Math.round(Math.random() * 150));
                ++e
            }
            return str;
        }
        loop = setInterval(function(){
        if(i < 100){
            $("#user").val("Administrator");
            $("#pass").val(randStr());
            ++i;
        }
        else{
            $("#user").val("Administrator");
            $("#pass").val("password");
            setTimeout(function(){
            $("#login").trigger("click");
            clearInterval(loop);
            }, 250);
        }
        }, 80);
        $("#logout").on("touchstart click", function(){
            $("#user").val("");
            $("#pass").val("");
            $("#page").slideUp(1000);
            setTimeout(function(){
                $("#main").slideDown(1000);
            }, 1080);
        });
    });
    $("#next").click(function(){
        window.open("https://code.sololearn.com/WySbw5sV5266/?ref=app");
    });
});