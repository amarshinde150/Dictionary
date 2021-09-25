let searchSubmitBtn = document.getElementById("searchSubmitBtn");

searchSubmitBtn.addEventListener("click",()=>{
    let wordInput = document.getElementById("wordInput");
    str = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
    str+= wordInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET",str,true);

    xhr.onload = function(){
        let displayData = document.getElementById("displayData");
        let parsedJson = JSON.parse(xhr.responseText);
        displayData.innerHTML = parsedJson[0].origin;
    }

    xhr.send();
});