var needle = require("needle");

// needle.get("http://www.google.com", function (error, response, body) {
//   if (!error && response.statusCode == 200) console.log(body);
// });

// needle.get(
//   "https://jsonplaceholder.typicode.com/users",
//   function (error, response, body) {
//     if (!error && response.statusCode == 200) console.log(body[0].name);
//     console.log(body[0].address.geo.lat);
//   }
// );

needle.get("https://type.fit/api/quotes", function (error, response, body) {
  if (!error && response.statusCode == 200) var obj = JSON.parse(body);

  console.log(obj[0].text);
  //   console.log(body[3].author);
});
