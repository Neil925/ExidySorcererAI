async function main() {
    const EventTypes = (await import("./variables.js")).EventTypes;
    const process = (await import("./events/base-handler.js")).default;

    browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
        let event = {
            type: EventTypes.tabUpdate,
            tabId,
            changeInfo,
            tab
        }
    
        process(event);
    });
    
    browser.webNavigation.onCompleted.addListener(async (details) => {
        let event = {
            type: EventTypes.webNavigation,
            details
        }
    
        process(event);
    });

    setInterval(() => {    
        process({ type: EventTypes.interval});
    }, 1000 * 60);
}

main();