

$("#btn").on("click", () => {
        
    console.log("fired");
    const endpoint = "https://api.citybik.es/v2/networks?fields=location,latitude,longitude";
    fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const city = data.network[1][location][city];
            $("#displayLocation").html(city);
        })

    .catch((error) => {
            //what if there is an error?
            console.error("Error from the network: ", error);
        })

});
