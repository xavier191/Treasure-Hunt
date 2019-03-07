$("button").click(function() {
    $(".first-clue").show() ;
   
});
 $("button").dblclick(function() {
    $("h1").text("click on my bird");
    $(".second-clue").fadeIn();
    });
    $("button").hover(function() {
        $("h1").text("click on my skull");
        $(".third-clue").slideDown();
    });

