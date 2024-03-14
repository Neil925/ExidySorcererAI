let id = -1;
let searchURLS = ["google.com/search", "bing.com/search", "duckduckgo.com/?q="];

export default {
    porbability: 1,
    preventOtherEvents: true,
    //Either loading or complete
    stage: "loading",
    runForUrls: ["google.com/search"],// "bing.com/search", "duckduckgo.com/?q="],
    excemptUrls: [],
    execute: async (tabId, changeInfo, tab) => {
        if (tabId == id)
            return;

        console.debug(changeInfo);

        let splitSearch = tab.url.split("/search");

        if (splitSearch == undefined)
            splitSearch = tab.url.split("/?q=");

        //randomly generate either 0 or 1 
        let randNum = Math.floor(Math.random() * 3);

        //set newSearch to an empty string 
        let newSearch = "http://www." + searchURLS[0] + splitSearch[1];

        id = tabId;
        setTimeout(() => id = -1, 3000);

        await browser.tabs.update(tabId, { url: newSearch });
    }
}