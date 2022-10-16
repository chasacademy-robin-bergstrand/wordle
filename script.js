const letter_entry = document.querySelectorAll(".grid-letterbox-entry");
const rows = document.querySelectorAll(".row");

//const correct_word = ["c", "r", "a", "s", "h"];
var correct_word = ["c", "r", "a", "s", "h"];
var guess_amount = 0; 
var current_row_nr = 0;
var i = 0;

async function getFile(fileURL){
    let fileContent = await fetch(fileURL);
    fileContent = await fileContent.text();
    return fileContent
}

getFile('words.txt').then(content =>{
    console.log(content);
    // Using split method and passing "\n" as parameter for splitting
    let wordsArray =  content.trim().split("\n");
    console.log(wordsArray);
    var randomNumber = (Math.floor(Math.random() * wordsArray.length));
   // console.log(Math.floor(Math.random() * namesArray.length));
    var randomWordArray = wordsArray[randomNumber];
    let randomWord = randomWordArray.trim().split("");
    console.log(randomWord);
    correct_word = randomWord;
 }).catch(error =>{
     console.log(error);
 });
 





//function insertLetter(){
//    letter_entry[0].innerHTML = "H";
//}

//insertLetter();

window.addEventListener('keydown', logKey);
letter_entry[i].style.background = "lightgray";
function logKey(e){
    var key = e.key;
    console.log(key);
    if (key == "a" || key == "b" || key == "c" || key == "d" || key == "e" || key == "f" || key == "g" || key == "h" || key == "i" || key == "j" || key == "k" || key == "l" || key == "m" || key == "n" || key == "o" || key == "p" || key == "q" || key == "r" || key == "s" || key == "t" || key == "u" || key == "v" || key == "w" || key == "x" || key == "y" || key == "z"){
        console.log(i);
        letter_entry[i].innerHTML = e.key;
        console.log(key);
        letter_entry[i].style.background = "white";
        if (i<4){
            i++
        }
        letter_entry[i].style.background = "lightgray";
    }
    if (key == "Backspace"){
        if(i>0){
            console.log(key + " = REMOVE")
            letter_entry[i].innerHTML = " ";
            letter_entry[i].style.background = "white";
            i--
            letter_entry[i].style.background = "lightgray";
        }   
        else if(i == 0){
            letter_entry[i].innerHTML = " ";
        }
    }
    else if (key == "Enter"){
        console.log(letter_entry[0].innerHTML + letter_entry[1].innerHTML + letter_entry[2].innerHTML + letter_entry[3].innerHTML + letter_entry[4].innerHTML);
        wordToRow();
        letter_entry[0].innerHTML = " ";
        letter_entry[1].innerHTML = " ";
        letter_entry[2].innerHTML = " ";
        letter_entry[3].innerHTML = " ";
        letter_entry[4].innerHTML = " ";
        letter_entry[i].style.background = "white";
        i = 0;
        letter_entry[i].style.background = "lightgray";
    } 
}

letter_entry[0].addEventListener('click', clicked);
letter_entry[1].addEventListener('click', clicked);
letter_entry[2].addEventListener('click', clicked);
letter_entry[3].addEventListener('click', clicked);
letter_entry[4].addEventListener('click', clicked);

function clicked(item){
    console.log("YOU CLICKED IT: " + item);
    console.log(this);
}

function wordToRow(){
    let currentRow = rows[current_row_nr].querySelectorAll(".grid-letterbox");
    guess_amount++
    console.log(currentRow);
    for(let i = 0; i < currentRow.length; i++){
        currentRow[i].innerHTML = letter_entry[i].innerHTML;
        console.log("CurrentRow[i] = " + currentRow[i]);
        console.log("correct_word[i] = " + correct_word[i]);
        if(currentRow[i].innerHTML == correct_word[i]){
            currentRow[i].classList.add("perfect-letter");
        }
        else if(correct_word.includes(currentRow[i].innerHTML)){
            currentRow[i].classList.add("wrong-spot");
        }
        else if(!correct_word.includes(currentRow[i].innerHTML)){
            currentRow[i].classList.add("wrong");
        }
    }
    var guessed_word = (currentRow[0].innerHTML + currentRow[1].innerHTML + currentRow[2].innerHTML + currentRow[3].innerHTML + currentRow[4].innerHTML);
    if(guessed_word == correct_word.join('')){
        document.querySelector(".guess-amount").innerHTML = guess_amount;
       // document.querySelector(".congratulations").style.display = "block";
       // document.querySelector(".congratulations").style.opacity = "100%";
       document.querySelector(".congratulations").classList.remove("hidden");
        console.log("YOU DID IT");
    }
    current_row_nr++
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

