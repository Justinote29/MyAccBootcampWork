$('#twd').accordion({
    collapsible: true,
    active: false,
    animate: 400,
    event: "mouseover"
});


$('#cast').sortable({
// let's you move only the even items because they are zero indexed.
    items: "> li:odd",
    axis: "y",
    cursor: "pointer",
    placeholder: "sortable-placeholder"
});


$("#innerDiv1").draggable({
    //container the ability to drag to the parent container (div here)
    containment: "parent",
    //pulls the element back to starting position after being dragged
    revert: true
});

//disables the ability to drag
// $("#innerDiv1").draggable("disable");

$("article").resizable();



$("#cal").datepicker({
    constrainInput: true,
    beforeShowDay: $.datepicker.noWeekends,
    changeMonth: true,
    changeYear: true,
    firstDay: 1,
    prevText: "",
    nextText: ""
});


$("#circleDiv").click(function() {
    $("#bounceCircle").toggle("bounce", {
        times: 10,
        distance: 100,

    }, "slow")

    });


$("#explodeDiv").click(function () {
    $("#explodeCircle").toggle("explode", {
        pieces: 100, easing: "easeOutBounce",
    duration: 5000});

});

$("#foldDiv").click(function () {
    $("#foldCircle").toggle("fold", {
        horizFirst: true,
        duration: 2000,
        size: "50%"
    });
});