$(document).ready(function(){
    //Activate carousel
    $("#card").carousel();

    //Enable Carousel-indicators
    $(".button1").click(function(){
        $("#card").carousel(0);
    });

    $(".button2").click(function(){
        $("#card").carousel(1);
    });

    $(".button3").click(function(){
        $("#card").carousel(2);
    });

    //Enable Carousel controls
    $(".carousel-control-prev").click(function(){
        $("#card").carousel("prev");
    });

    $(".carousel-control-next").click(function(){
        $("#card").carousel("next");
    });
});