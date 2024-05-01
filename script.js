let button = document.querySelector(".submit");
let fullParagraph = document.querySelector(".result");

button.onclick = function() {
    fullParagraph.style.display = "block";
    let animal = document.querySelector(".animal").value;
    let insideout = document.querySelector(".earth").value;
    if (animal === "dog" && insideout === "outside") {
        fullParagraph.innerHTML = "your a honeycrips";
    } else if (animal === "dog" && insideout === "Inside") {
        fullParagraph.innerHTML =  "you are a Golden " + "Delicious";
    }
    if (animal === "cat" && insideout === "inside") {
        fullParagraph.innerHTML = "you are a fuji" + "apple";
        console.log("hi");
    } else if (animal === "cat" && insideout === "outside") {
        // let animal = document.querySelector(".animal").value;
        fullParagraph.innerHTML = "you are a honey" + "crips";
        fullParagraph.innerHTML = "your a pink" + "lady";

    }
};