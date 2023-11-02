//we wait until the document is ready to manipulate it.  Jquery will detect this for us and only run the code withing $( document ).ready() when the DOM is ready for JS code to execute.  document refers to the top of the DOM (document object model).  The Dot (.) is used with JS objects, and gives us access to methods (functions/actions that can be performed on objects (there are also array methods), a js methods is a property containing a function definition).  this refers to the containing object.

//READ- trigger our API within document.ready -  our baseUrl is our local host now because we're running our server on our local computer.  Professionally, we'd have this be wherever we host our app.  This gets our info from Db and puts it in the bucketlist.
const baseUrl = "http://localhost:3000";
$(document).ready(() => {
  //this empties the ul when the page is loaded so we don't see the hardcoded data
  $("ul").empty();
  //make an HTTP request to our server (with fetch and trigger our route handler)  We build our endpoint.
  let route = "bucket";
  let endpoint = `${baseUrl}/${route}`;

  fetch(endpoint)
    .then((response) => {
      if (response.ok) {
        //pass on the parsed response (which is sent in json) to next part of chain (if the response is ok, if not we throw and error)
        return response.json();
      }
      throw Error("Cannot get data at this time");
    })
    .then((data) => {
      //here, the data is an array of object.  We grab each object in the array. and make it an li and add it to the ul.  We pass it it's id as a data attribute to be able to access it later to delete and update.
      data.forEach((el) => {
        //to update data
        let completedClass = el.isComplete ? "completed" : "";
        //Add our list item
        $("ul").prepend(`
          <li data-id=${el._id} class=${completedClass}>
            ${el.description}
          <span>
            <i class="fa-regular fa-trash-can"></i>
          </span>
          </li>
        `);
      });
    })
    .catch((err) => {
      console.log("Error reading data from server", err);
    });
});

//CREATE-  selects the input and makes an event handler function that will check for when the enter key is pressed using the event object, which will have all the keypresses in it.  If enter is pressed (13),  $(this) refers to the input still and will make sure the DOM query is not rerun as it would if we selected the input again with $("input") .  $(this).val().trim() makes sure something was entered, gets the value from the input and trims the whitespace (to see if it's empty- if so this is false and won't run) and if it was and the enter key was pressed, we set Item to what was entered and limit what we can add to just 30 characters.

//we want fetch to run when enter key is pressed and input is not empty so we run it after we create our item.  We have to do a little more work with POST to send data in the body as json with the correct key(s)
$("input").keypress(function (event) {
  //We will check for enter key
  if (event.which === 13 && $(this).val().trim()) {
    //Grab what the user typed in- we'll delete the Item and make it listItem to send to server
    //let Item = $(this).val().trim().substring(0, 30);
    //creates an object to be sent to server by grabbing what the user typed in.
    let listItem = {
      description: $(this).val().trim().substring(0, 50),
    };
    //console.log(Item)
    let route = "bucket";
    //we need to explicitly tell it what verb to use if it's not get.  We need to pass in a second key called headers too. and since list Item is a JS object, we need to stringify and send as JSON as promised in header
    let endpoint = `${baseUrl}/${route}`;
    fetch(endpoint, {
      method: "POST", //tells which verb to use
      headers: {
        "Content-Type": "application/json", //we're putting it in header to say we accept and send json.
      },
      body: JSON.stringify(listItem), //we create the data and stringify it. We create it into a string to make it JSON and send it in the body (b/c it a POST request)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Cannot send data for create in server");
      })
      .then((data) => {
        //data is a JS object at this point (after being parsed)-  now we want to add it to our ul and pull our its description.

        //we also set the data-id attribute to data._id here too so we get an id when we create a list item.
        $("ul").prepend(`
        <li data-id=${data._id} data-alt=${data.description}>
            ${data.description}
            <span>
                <i class="fa-regular fa-trash-can"></i>
            </span>
        </li>
        `);
        //Clear our input box-  we set the value of the input to an empty string.
        $(this).val("");
      })
      .catch((err) => {
        //console.error is like log but has it appear in red.
        console.error(`Error creating data in client: `, err);
      });

    //Add our list item-  We then add this list item to the top (prepend) of our UL.
    // $("ul").prepend(`
    //     <li>
    //         ${Item}
    //         <span>
    //             <i class="fa-regular fa-trash-can"></i>
    //         </span>
    //     </li>
    //     `);
  }
});

//UPDATE-  run an eventhandler function on each li in the ul if it's clicked to toggle (.toggleClass()) give it the class of completed to apply strikethrough with css to indicate it's been completed.  We apply the event handler to the UL b/c then they can process events from descendant elements that are added to the document at a later time (delegated event handlers), and just needs to apply one event handler to the ul instead of individual ones to each li.  Event handlers are bound only to the currently selected elements and they must exist at the time of calling .on() so that's why we use delegated event handlers and select the UL.  this works like this- .on(events[,selector-filters the descendants of the selected element][,data]handler).  .on() attaches event handler to the currently selected set of elements in the jQuery object. So here, we select the UL, and filter with the selector to apply the event handler to only the li's in the ul, this also give the handler bounds and doesn't apply it to other descendants of the ul. Also, .on("click") gives us the ability to create delegated events as opposed to .click() that doesn't, here (this) then applies to the li and not the ul.
$("ul").on("click", "li", function () {
  let itemId = $(this).data("id");
  let route = `bucket/${itemId}`;
  let endpoint = `${baseUrl}/${route}`;
  let li = this;
  fetch(endpoint, {
    method: "PUT",
  })
    .then(function (response) {
      if (!response.ok) {
        throw Error("Issues with sending updating id info");
      }
      return response.json();
    })
    .then(function (data) {
      $(l).toggleClass("completed");
    })
    .catch(function (err) {
      console.log("Error updating todo in client", err);
    });
});

//DELETE- this will run an event handler function when the span of each list item is clicked and delete the span's parent, which is the li it's a child to.  (this) now applies to the span and we remove the parent with .parent().remove().
$("ul").on("click", "span", function () {
  //we can add data to elements with data attributes like data-id in the read;
  //Here we grab the parent of the span and grab the data-id attribute value with .data("id")
  let itemId = $(this).parent().data("id");
  let route = `bucket/${itemId}`;
  let endpoint = `${baseUrl}/${route}`;

  fetch(endpoint, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error("Not able to delete data");
    })
    .then((data) => {
      //here we don't need to do anything with this data, so we'll just throw it away
      $(this).parent().remove();
    })
    .catch((err) => {
      console.error("Error deleting data from server", err);
    });
});
