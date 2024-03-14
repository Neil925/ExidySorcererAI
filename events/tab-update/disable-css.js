export default {
    porbability: .15,
    preventOtherEvents: true,
    //Either loading or complete
    stage: "loading",
    runForUrls: ["<all>"],
    excemptUrls: [],
    /**
    * @param {number} tabId 
    * @param {import("webextension-polyfill").Tabs.OnUpdatedChangeInfoType} changeInfo
    * @param {import("webextension-polyfill").Tabs.Tab} tab
    */
    execute: async (tabId, changeInfo, tab) => {

        await browser.tabs.executeScript(tab.id, { code: "document.head.remove();" });

    }
}