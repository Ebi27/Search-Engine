
const searchResultHandler = (searchResult) => {
  const searchResult = document.getElementsById("search-result");
  for (const result in searchResult) {
    let searchResultOption = document.createElement("searchResultOption");
    searchResultDisplay.title = result.title;
    searchResultDisplay.description = result.description;
    searchResultDisplay.snippet = result.snippet;
    searchResultDisplay.url = result.url;
  }
};

searchResultHandler();