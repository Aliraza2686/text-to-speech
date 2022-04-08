
function getInputValue(){

   const text = document.getElementById("myInput").value;
   let speech = new SpeechSynthesisUtterance()

   speech.text = text
   speech.pitch = 1 
   speech.volume = 1
   speech.lang = "en-US"
   speech.rate = 1

   speechSynthesis.speak(speech)
}