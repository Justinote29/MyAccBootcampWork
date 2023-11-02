
// $("#btn").on("click", () => {
//   var endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";  
//    fetch(endpoint)
//    .then((response) => {
//     //parse the response
//     if(!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response.json();
//         // if (response.ok) return response.json();
//         // throw Error(!response.json() ? "No data" : "Cannot connect!");
//    })
//    .then((data) =>{
//     //do something with the data
//     //Inject that data to the webpage!
//     var country = $("input[name='country']:checked").val();
//     // console.log(data);
//     // console.log(country);
//     var rate = data.bpi[country].rate_float.toFixed(2)
//     var symbol = data.bpi[country].symbol;
//     console.log(rate);
//     console.log(symbol);
//     $("#displayPrice").html(symbol + rate)
//    })
//    .catch((error) => {
//     //what if there is an error?
//     console.error("Error from the network: ", error);
//    })
// })

$("#btn").on("click", () => {
    const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";
    console.log("fired");

    fetch(endpoint)
        .then((response) => {
            //parse the response
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            //do something with the data, inject the data to the webpage
            const country = $('input[name="country"]:checked').val();
            const rate = data.bpi[country].rate_float.toFixed(2);
            const symbol = data.bpi[country].symbol;
            $("#displayPrice").html(symbol + rate);
            console.log(rate);
            console.log(symbol);
        })
        
        .catch((error) => {
            //what if there is an error?
            console.error("Error from the network: ", error);
        })
});