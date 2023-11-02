$(document).ready(() => {


    // $("img").click(() => {
    //     alert("You have clicked the image");
    // });

    // $("li").click(() => {
    //     alert("You have clicked on a list element");
    // });

    // $("li").on("click", function () {
    //     $(this).fadeOut();
    // });

    $("li").on("click", function () {
        alert(this.innerText);
    });


    $("p").click((event) => {
        event.stopPropagation();
        $("p").remove();
    });


    $("span").click((event) => {
        event.stopPropagation();
        $("span").remove();
    });

    $("div").click(function (event) {
        $("div").remove();
    });
    

    $("#keyDemo").keypress(function (event) {
        console.log(event);
        if (event.which === 13) {
            alert("You have pressed enter in the input box");
        }
    })

    
    $("ol").append("<li>Red</li>");

    
    $("ol").prepend("<li>Orange</li>");

    
    $("img").on("click", function () {
        $(this).fadeOut(5000, function () {
            alert("The image is now gone")
        });
    });



});