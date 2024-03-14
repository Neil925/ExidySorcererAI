export default {
    porbability: .3,
    runForUrls: ["<all>"],
    excemptUrls: [],
    preventOtherEvents: false,
    /**
    *  @param {import("webextension-polyfill").WebNavigation.OnCompletedDetailsType} details
    */
    execute: async (details) => {
        await browser.tabs.executeScript(details.tabId, {file: "../../scriplets/shakeElements.js"});
    }
}