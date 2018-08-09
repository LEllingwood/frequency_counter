document.getElementById("countButton").onclick = function() {

    let typedText = document.getElementById("textInput").value;
   
        typedText = typedText.toLowerCase()
        typedText = typedText.replace(/[^a-z'\s]+/g, "");
        let letterCounts = {};
   
    for(let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
     
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
         } 

        else {
            letterCounts[currentLetter]++;
         }
     }
    
    
    for(letter in letterCounts) {
       let span = document.createElement("span");
       let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
       span.appendChild(textContent);
       document.getElementById("lettersDiv").appendChild(span);
    }
    
    let wordCounts = {};
    let words = typedText.split(/\s/);
 
    for(let i = 0; i < words.length; i++) {
        let currentWord = words[i];
     
        if (wordCounts [currentWord] === undefined) {
            wordCounts[currentWord] = 1;
         } 

        else {
            wordCounts[currentLetter]++;
         }
     }
    
    
    for(word in wordCounts) {
       let span = document.createElement("span");
       let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
       span.appendChild(textContent);
       document.getElementById("wordsDiv").appendChild(span);
    }
}


