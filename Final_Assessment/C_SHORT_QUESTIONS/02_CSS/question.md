Take a look at this code snippet

  https://jsbin.com/rufarat/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

You can't set the margin-top on the span because it is an inline element and you can't apply custom margins to it unless you change it's display to inline block or block.


1. Why can I not set the margin-top on the img with the id "pic" in the head section?


You can, but it is being overridden by the inline styles you're applying to the image.