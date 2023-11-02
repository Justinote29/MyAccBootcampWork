$(document).ready(() => {
    // alert("it works");
    
    //create

    //cross off items, toggles from crossed off to normal

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });


// delete list item
    
//sets the span within the ul to remove the parent element, the ul
    $('ul').on('click', 'span', function () {
        $(this).parent().remove()
    });

// add items- target input and listen for keypress, get the value user typed in and  prepend to list

    $('input').keypress(function (event) {
        //tests to see if there is anything in the input before trying to creating a new list item
        if (event.which === 13 && $(this).val()) {
            //grabs only the first 30 characters of the string
            let listItem = $(this).val().substring(0, 30);
            // creates the new list item
            $('ul').append(`<li> ${listItem} <span> <i class="fa-solid fa-skull-crossbones"></i> </span></li>`);
            // resets value of input box to an empty string after we create the new list item
            $(this).val("");

        }
    });


//read


    



//update


    



//delete


});
