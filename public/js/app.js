const body = document.querySelector('body');

const myButton = document.querySelector('.myButton');



myButton.addEventListener('click', () => {

    const colors = [
        "aquamarine",
        "bisque",
        "cadetblue",
        "chartreuse",
        "cornflowerblue",
        "crimson",
        "darkgoldenrod",
        "darkkhaki",
        "deeppink",
        "firebrick",
        "forestgreen",
        "goldenrod",
        "hotpink",
        "indianred",
        "khaki",
        "lavenderblush",
        "lawngreen",
        "lightcoral",
        "lightsalmon",
        "maroon",
        "mediumorchid",
        "midnightblue",
        "navajowhite",
        "orangered",
        "orchid",
        "peachpuff",
        "rosybrown",
        "saddlebrown",
        "seagreen",
        "sienna",
        "tomato"
    ];

        body.style.backgroundColor = colors[ Math.floor(Math.random()*colors.length)]

})



// colors.length=30
// min:0;max:29.000000
