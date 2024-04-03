console.log("Hello");

let googleContainer=document.getElementById("google_container");
googleContainer.style.cursor="pointer";

googleContainer.addEventListener("click",()=>{
   window.open("./google.html","_blank")
});

let geminiContainer=document.getElementById("gemini_container");
geminiContainer.style.cursor="pointer";

geminiContainer.addEventListener("click",()=>{
   window.open("./gemini.html","_blank")
});

let wikipediaContainer=document.getElementById("wikipedia_container");
wikipediaContainer.style.cursor="pointer";

wikipediaContainer.addEventListener("click",()=>{
   window.open("./wikipedia.html","_blank")
});

