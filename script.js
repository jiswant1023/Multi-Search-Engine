console.log("Hello");
let latestNews = document.getElementById("image_cont");

let googleContainer = document.getElementById("google_container");
googleContainer.style.cursor = "pointer";

googleContainer.addEventListener("click", () => {
  window.open("./google.html", "_blank");
});

let geminiContainer = document.getElementById("gemini_container");
geminiContainer.style.cursor = "pointer";

geminiContainer.addEventListener("click", () => {
  window.open("./gemini.html", "_blank");
});

let wikipediaContainer = document.getElementById("wikipedia_container");
wikipediaContainer.style.cursor = "pointer";

wikipediaContainer.addEventListener("click", () => {
  window.open("./wikipedia.html", "_blank");
});

async function news() {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2024-04-03&" +
    "sortBy=popularity&" +
    "apiKey=ac0a078a330e4700ac7a5c05093eb137";


try {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);

     result.articles.forEach(element => {
    console.log(element.url);
    let contDiv=document.createElement("div");
    contDiv.style.display="flex";
    contDiv.style.flexDirection="column";
    contDiv.style.width="220px";
    

    let imgField = document.createElement("img");
    imgField.style.height = "200px";
    imgField.style.width = "195px";
    imgField.style.margin = "10px";
    imgField.style.border = "2px solid black";
    imgField.style.borderRadius = "5px";
    imgField.src = element.urlToImage;

    let para=document.createElement("p");
    para.style.height="100px";
    para.style.width="100%";
    para.innerText=element.title;
    console.log(para.innerText);

    contDiv.append(imgField,para);
    latestNews.append(contDiv);
  });
} catch (error) {
	console.error(error);
}

 }
news();
