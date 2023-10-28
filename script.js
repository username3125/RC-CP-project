// Tags to search
const tags = ["A", "B", "C", "D"];

// Function to perform the search
function searchTags() {
    const searchInput = document.getElementById("tag-search-input").value.toLowerCase(); // Convert search input to lowercase
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = ""; // Clear previous search results

    for (const tag of tags) {
        if (tag.toLowerCase().includes(searchInput)) { // Case-insensitive search
            const resultItem = document.createElement("p");
            resultItem.textContent = tag;
            searchResults.appendChild(resultItem);
        }
    }
}

// Add event listener to the search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchTags);

// Perform the search when Enter key is pressed in the search input
const searchInput = document.getElementById("tag-search-input");
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchTags();
    }
});
