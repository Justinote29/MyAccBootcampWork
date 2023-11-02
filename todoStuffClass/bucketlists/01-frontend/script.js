$(document).ready(() => {
    //   alert("It works!!!")
    
//CREATE
$('input').keypress(function(event){
    //We will check for enter key
    if(event.which === 13 && $(this).val().trim()){
    //Grab what the user typed in
      let Item = $(this).val().trim().substring(0, 30);
       //console.log(Item)

       //Add our list item
      $('ul').prepend(`
        <li>
            ${Item}
            <span>
                <i class="fa-regular fa-trash-can"></i>
            </span>
        </li>
        `);
                
        //Clear our input box
        $(this).val("")    
                
    }
    

})

//READ


//UPDATE
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})

//DELETE
$('ul').on('click', 'span', function(){
    $(this).parent().remove()
})

})// Closes .ready