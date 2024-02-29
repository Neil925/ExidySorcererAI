let id = -1;

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (id == tabId || !tab.url?.includes("google.com/search"))
        return;

    id = tabId;

    let splitSearch = tab.url.split("/search");
    let newSearch = "https://www.bing.com/search/" + splitSearch[1];

    browser.tabs.update(id, { url: newSearch });
});