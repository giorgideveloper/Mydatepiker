let date = [true, false, true];
let link = ["http://batumibooking.com/single_cottage/1", "http://localhost2", "http://batumibooking.com/single_cottage/3", ];
let img = ["./img.JPG", "./img2.JPG", "./img3.JPG"];

/* for (let i = 0; i < date.length; i++) {
    if (date[i] === true) {
        let my = document.querySelector(".my").innerHTML = `<a href="${link[0]}"> ${link[0]}</a><div><img src="${img}" alt=""></div> `;

        console.log(my);
    }


}
 */

for (let key in link) {
    if (date[key] === true) {
        console.log(`${key} => ${link[key]} =>${img[key]}`);


    }
    // display the properties

}


/* if (date === true) {

    console.log(my);
    let my = document.querySelector(".my").innerHTML = link[2];
} else {
    let my = document.querySelector(".my").innerHTML = link[1];
    link[2];
} */