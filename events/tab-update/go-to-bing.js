let id = -1;

export default {
    porbability: 0,
    preventOtherEvents: true,
    //Either loading or complete
    stage: "loading",
    runForUrls: ["google.com/search"],
    excemptUrls: [],
    execute: async (tabId, changeInfo, tab) => {
        if (tabId == id)
            return;

        console.debug(changeInfo);

        let splitSearch = tab.url.split("/search");
        let newSearch = "https://www.bing.com/search/" + splitSearch[1];

        id = tabId;
        setTimeout(() => id = -1, 3000);

        await browser.tabs.update(tabId, { url: newSearch });
    }
}