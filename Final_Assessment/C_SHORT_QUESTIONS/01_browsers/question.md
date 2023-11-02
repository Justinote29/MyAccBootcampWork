Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Put it in a sample page, load it and check out the network tab in the Devtools.

Provide the test page and image that you used within the answer to this question. Then answer the question.


Answer: 
Yes, a GET request is made when the page first loads.  It returns a 404 Not Found, but a get request is triggered for both images below when the page loads.


Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`


Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`
