let id = -1;

// Google Bing Redirect
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (id == tabId || !tab.url?.includes("google.com/search"))
        return;

    id = tabId;

    let splitSearch = tab.url.split("/search");
    let newSearch = "https://www.bing.com/search/" + splitSearch[1];

    browser.tabs.update(id, { url: newSearch });
});

// Bing User Alert 🤮
browser.webNavigation.onCompleted.addListener((details) => {
    let tabId = details.tabId;
    let url = details.url;
    if (!url.includes("bing.com")) 
        return;
    browser.tabs.executeScript(tabId, { code: 'alert("Ewww you use bing! 🤮");' });
  });
  