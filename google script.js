let searchButton = document.getElementById("search_button");
let messageContainer = document.getElementById("latest_container");
let userInput = document.querySelector("#input_search");

async function googleSearch() {
  let searchTerms = userInput.value;
  console.log(searchTerms);
  const url = `https://real-time-web-search.p.rapidapi.com/search?q=${searchTerms}&limit=5`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e02ff809eemsh20e61b4f4afc4a1p1c29f9jsn4554e45aee3b',
		'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
	}
};

  try {
    if (userInput.value === "") {
      alert("Please fill the input...");
      return;
    }

    searchButton.innerText = "Loading...";
    searchButton.style.width = "150px";
    searchButton.style.background = "linear-gradient(45deg, #ff0000, #00ff00)";

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    messageContainer.style.display = "block";
    result.data.forEach(element => {
       let divCon=document.createElement("div");
        divCon.textContent = element.snippet;
        messageContainer.append(divCon);
        console.log(divCon.textContent) ; 
    });

    

    searchButton.innerText = "Search";
    searchButton.style.width = "120px";
    searchButton.style.background =
      "linear-gradient(45deg, #2f2ff7, #b282e2, #ff00ff)";
  } catch (error) {
    alert(error);
    console.error(error);
  }
}

// Example usage
searchButton.addEventListener("click", googleSearch);