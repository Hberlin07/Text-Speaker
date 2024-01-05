const speak = document.getElementById("speakButton")
speak.addEventListener("click",()=>{
    const textToRead = document.getElementById('textToRead').value;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    window.speechSynthesis.speak(utterance);
  }) 

