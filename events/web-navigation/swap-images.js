export default {
    porbability: 1,
    runForUrls: ["<all>"],
    excemptUrls: [],
    preventOtherEvents: false,
    /**
    *  @param {import("webextension-polyfill").WebNavigation.OnCompletedDetailsType} details
    */
    execute: async (details) => {
        console.log("Test");
        await browser.tabs.executeScript(details.tabId, {file: "../../scriplets/swapImages.js"});
    }
}