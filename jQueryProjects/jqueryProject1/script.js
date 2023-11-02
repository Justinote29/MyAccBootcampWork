$(document).ready(function () {

    let myH1 = $("h1");

    // alert('The content of my h1 tag is ' + myH1.text());

    myH1.text("This is Justin's header");

    $("#canine").text("lion");

    $(".feline:nth-of-type(2)").text("leopard");

    $("img").attr("src", "https://media4.giphy.com/media/pHZ8BDWQhJrvLmL29M/giphy.gif");
    
    let img = $("img");

    $("#imageSrc").text(img.attr("src"));

    // $("input").attr("type", "color");

    $("#colorpicker").attr("type", "color");

    let inputText = $("input:text").val("horse");

    console.log($("input:text").val());

    $("#inputval").text(inputText.val());

    $("li").addClass("box");

    $("img").addClass("imageBox");

    $("li:first").addClass("imageBox");

    $("li:last").removeClass();









});