let processedTabs = [];

// Google Bing Redirect
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!tab.url?.includes("google.com/search")) {
    processedTabs = processedTabs.filter((id) => id !== tabId);
    return;
    }

    if (processedTabs.includes(tabId)) return;

    processedTabs.push(tabId);

    let splitSearch = tab.url.split("/search");

    //randomly generate either 0 or 1
    let randNum = Math.floor(Math.random() * 2);

    //set newSearch to an empty string
    let newSearch = ""

    if (randNum.toString() == '0') {
        newSearch = "https://www.bing.com/search/" + splitSearch[1];
    }
    else if (randNum.toString() == '1') {
        newSearch = "https://duckduckgo.com/" + splitSearch[1];
    }
    else {
        return;
    }

    browser.tabs.update(tabId, { url: newSearch });
});

// Bing User Alert 🤮
browser.webNavigation.onCompleted.addListener((details) => {
    let tabId = details.tabId;
    let url = details.url;
    if (!url.includes("bing.com")) return;
    browser.tabs.executeScript(tabId, { code: 'alert("Ewww you use bing! 🤮");' });
});
