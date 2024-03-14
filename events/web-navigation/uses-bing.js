export default {
    porbability: .8,
    runForUrls: ["bing.com"],
    excemptUrls: [],
    preventOtherEvents: false,
    execute: async (details) => { 
        let { tabId } = details;
        await browser.tabs.executeScript(tabId, { code: 'alert("Ewww you use bing! 🤮");' });
    }
}