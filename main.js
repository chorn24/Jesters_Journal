async function fetch_API() {
     const response = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`);
     const API = await response.json();
     console.log(API)
    if (API["type"] == "twopart"){
        document.getElementById("Setup").innerHTML = API["setup"];
        document.getElementById("Joke").innerHTML = API["delivery"];
    }
    else {
        document.getElementById("Setup").innerHTML = API["joke"];
        document.getElementById("Joke").innerHTML = "";
    }
    }
