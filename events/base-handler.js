const EventTypes = (await import("../variables.js")).EventTypes;

let processIntervalEvent;
let processTabUpdate;
let processWebNavigation;

const viableCondition = (x, url) =>
    (x.runForUrls.includes("<all>") || x.runForUrls.some(x => url.includes(x))) && !x.excemptUrls.includes(url);

export default async function baseHandler(eventData) {
    let events;

    if (processIntervalEvent == undefined)
        processIntervalEvent = (await import("./interval-events/base-handler.js")).default;

    if (processTabUpdate == undefined)
        processTabUpdate = (await import("./tab-update/base-handler.js")).default;

    if (processWebNavigation == undefined)
        processWebNavigation = (await import("./web-navigation/base-handler.js")).default;

    switch (eventData.type) {
        case EventTypes.interval:
            events = await processIntervalEvent(eventData);
            break;
        case EventTypes.tabUpdate:
            events = await processTabUpdate(eventData);
            break;
        case EventTypes.webNavigation:
            events = await processWebNavigation(eventData);
            break;
        case undefined:
        case null:
        default:
            console.error(`Event type ${eventData.type} is not valid!`);
            return;
    }

    if (events == null || events.length == 0)
        return;

    let viableEvents = events;

    if (eventData.type != EventTypes.interval)
        viableEvents = events.filter(x => viableCondition(x, eventData.tab?.url ?? eventData.details.url));

    viableEvents.sort((a, b) => b.preventOtherEvents - a.preventOtherEvents);

    for (let event of viableEvents) {
        if (event.porbability > Math.random()) {
            await event.run(eventData);
            if (event.preventOtherEvents) break;
        }
    }
}