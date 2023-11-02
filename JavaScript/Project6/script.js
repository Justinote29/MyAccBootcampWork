let bgColors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

let body = document.querySelector('body');
let index = 1;

function colorChange() {
    body.style.backgroundColor = bgColors[index];
    index++;
    if (index > bgColors.length - 1) {
        index = 0;
    }
}

// let timeObject = {
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric"
// }
// let formattedDate = date.toLocaleString(
//     "en-US", timeObject);

function timeChange() {
    let date = new Date();
    let str = "";
    str += date.getHours()+ ":" + date.getMinutes()+ ":" + date.getSeconds();
    document.querySelector("#time").innerHTML = str;

}

setInterval(colorChange, 1000);
setInterval(timeChange, 1000);

    



// let time = document.createElement("p");
// time.innerText = formattedDate;

// document.body.appendChild(time);

