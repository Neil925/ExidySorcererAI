const Browser = require("webextension-polyfill");

Browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!tab.url?.includes("google.com/search"))
        return;

    let splitSearch = tab.url.split("/search");
    let newSearch = "https://www.bing.com/search/" + splitSearch[1];

    tab.url = newSearch;
    Browser.tabs.create({ url: newSearch });
});