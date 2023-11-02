$("#btn").on("click", () => {
        
    alert("fired");
    const endpoint = "https://zenquotes.io/api/quotes/";
    fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            
        })

    .catch((error) => {
            //what if there is an error?
            console.error("Error from the network: ", error);
        })

});