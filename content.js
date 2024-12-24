function CatCounter(){
    const counter= (document.body.innerText.match(/cat/gi) || []).length;
    return counter;   
}

function countWords() {
    const text = document.body.innerText || document.body.textContent;
    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    return wordCount;
}

function CatScore(){
    const catScore = (CatCounter() / countWords())*100;
    return catScore;
}

function CatReport(){
    if (CatScore()<=5){
        alert("Your Cat Score is " + CatScore().toFixed(2) + "%"+ " Your website is a total cat-astrophe! The feline gods command you to add more cats 😡 :( ");}
    else if (CatScore() <= 20 && CatScore() > 5){
        alert("Your Cat Score is " + CatScore().toFixed(2) + "%"+ " Cut the Cattitude. You can do better! 🐱🐱🐱");}
    else if (CatScore() < 50 && CatScore() > 20){
        alert("Your Cat Score is " + CatScore().toFixed(2) + "%"+ " Are you a cat purr-son? You certainly have the potential to be! 🐈");}
    else if (CatScore() >= 50){
        alert("Your Cat Score is " + CatScore().toFixed(2) + "%"+ " You’ll go down in hiss-story for being the best cat fur-end!😻");}
    
}

CatReport();


