let id = -1;
let searchURLS = ["google.com/search?q=", "bing.com/search?q=", "duckduckgo.com/?q="];

export default {
    porbability: .5,
    preventOtherEvents: true,
    //Either loading or complete
    stage: "loading",
    runForUrls: ["google.com/search?q=", "bing.com/search?q=", "duckduckgo.com/?q="],
    excemptUrls: [],
    /**
    * @param {number} tabId 
    * @param {import("webextension-polyfill").Tabs.OnUpdatedChangeInfoType} changeInfo
    * @param {import("webextension-polyfill").Tabs.Tab} tab
    */
    execute: async (tabId, changeInfo, tab) => {

        if (changeInfo.url == undefined) return;

        if (tabId == id) return;

        console.debug(changeInfo);

        let splitSearch = tab.url.split("/search?q=");

        console.debug(splitSearch);

        if (splitSearch.length == 1)
            splitSearch = tab.url.split("/?q=");

        //randomly generate either 0 or 1 
        let randNum = Math.floor(Math.random() * 2);

        let validSearchUrls = searchURLS.filter(x => !tab.url.includes(x.url));

        //set newSearch to an empty string 
        let newSearch = "http://www." + validSearchUrls[randNum] + splitSearch[1];

        id = tabId;
        setTimeout(() => id = -1, 3000);

        await browser.tabs.update(tabId, { url: newSearch });
    }
}