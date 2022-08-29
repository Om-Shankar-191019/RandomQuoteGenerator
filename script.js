const url = "https://type.fit/api/quotes";

const getData = ()=>{
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildQuotes(data);
    })
    // .catch((err)=>{
    //     console.log(err);
    // })
}


let index = 0;
const buildQuotes = (data)=>{
    let randomIndex;
    do{
        randomIndex = getRandom(0,data.length);
    }while(randomIndex==index);
    index = randomIndex;
    let quote = data[randomIndex].text;
    let author = data[randomIndex].author;
    document.querySelector(".quotes").innerText = quote;
    document.querySelector(".author").innerText = author;
}


function getRandom(first,last){
    var r = Math.random()*(last+1-first);
    return(Math.floor(r)+first)
}
