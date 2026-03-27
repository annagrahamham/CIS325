
function ChangeImage() {
        if (document.getElementById("image").src.endsWith("agbaby.jpg")){
    document.getElementById("image").src = "agtoddler.jpg";
    }else if (document.getElementById("image").src.endsWith("agtoddler.jpg")){
        document.getElementById("image").src = "agkid.jpg";
    } else if (document.getElementById("image").src.endsWith("agkid.jpg")){
        document.getElementById("image").src = "agpreteen.jpg";
    }else if (document.getElementById("image").src.endsWith("agpreteen.jpg")){
        document.getElementById("image").src = "aghs.jpg";
    }else if (document.getElementById("image").src.endsWith("aghs.jpg")){
            document.getElementById("image").src = "agbaby.jpg";
    }else {
        document.getElementById("image").src = "aghs.jpg";
    }
    CustomFunction();
}
function ShowAge() {

    if (document.getElementById("image").src.endsWith("agbaby.jpg")) {
        alert("I was like 2 seconds old");
    } else if (document.getElementById("image").src.endsWith("agtoddler.jpg")) {
        alert("I was 2 I think");
    } else if (document.getElementById("image").src.endsWith("agkid.jpg")) {
        alert("I was 5");
    } else if (document.getElementById("image").src.endsWith("agpreteen.jpg")) {
        alert("I was 11");
    } else if (document.getElementById("image").src.endsWith("aghs.jpg")) {
        alert("I was 17");
    }
}
function CustomFunction() {
    console.log("Changed the Picture");
}