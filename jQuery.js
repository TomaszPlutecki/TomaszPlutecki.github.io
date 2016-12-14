$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(4000)
    .end()
    .appendTo('#slideshow');
},  4000);


$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $(this).height();
		
        $("header").height(bodyheight/4);
		$("#headline").css("line-height", bodyheight/4+"px"); 
		$("header").css("background-size", 100+"%"+ bodyheight/4+"px"); 
		$("#navbar").height(bodyheight/10);
    }).resize();
});



    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true
    });

