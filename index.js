
const zodiac  = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () =>{

    switch(zodiac.value){
        case "Aries":
        body.style.backgroundColor = "pink";
        break;
        case "Taurus":
        body.style.backgroundColor = "Yellow";
        break;
        case "Gemini":
            body.style.backgroundColor = "brown";
        break;
        case "Cancer":
            body.style.backgroundColor = "green";
        break;

        default:
            body.style.backgroundColor = "white";
        
    }
}