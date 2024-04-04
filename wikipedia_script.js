let searchButton = document.getElementById("search_button");
let messageContainer = document.getElementById("latest_container");
let userInput = document.querySelector("#input_search");

async function wikipediaSearch() {
  let searchTerms = userInput.value;
  console.log(searchTerms);
  const url = `https://wikipedia-api1.p.rapidapi.com/get_summary?q=${searchTerms}&lang=en&sentences=10`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e02ff809eemsh20e61b4f4afc4a1p1c29f9jsn4554e45aee3b",
      "X-RapidAPI-Host": "wikipedia-api1.p.rapidapi.com",
    },
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
    //console.log(result.data);

    messageContainer.style.display = "block";
    messageContainer.textContent = result.data;

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
searchButton.addEventListener("click", wikipediaSearch);
