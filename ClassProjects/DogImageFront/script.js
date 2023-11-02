$(document).ready(function () {

    $("img").attr("src", "https://images.dog.ceo/breeds/poodle-medium/PXL_20210220_100624962.jpg");
    //jquery-event listener on button- select button and do something when it's clicked
    $("button").on("click", () => {
        //fetch code inside button event listener.  endpoint is from the dog.ceo api website to get a random dog image.
        let endpoint = "https://dog.ceo/api/breeds/image/random";

        fetch(endpoint)
            .then((response) => {
                //parse the response (data) from the API.  response.json() will parse the json we get back from the API.
                // console.log(response.json());
                
                if (response.ok) return response.json();
                throw Error(!response.json() ? "No data" : "Cannot connect!");

            })

            
            .then((data) => {
                //do something with the data.  here, we'll inject it into the image element
                // console.log(data.message)
                $("img").attr("src", data.message)
            
            })
            .catch((error) => {
                //what if there's an error? console logs the error and changes styles on the paragraph under the h1
            
                console.log("Error: ", error);
                let theStyles = {
                    color: "red",
                    marginTop: 0
                }
                $("#error").text(error).css(theStyles)
            })
    });
})










