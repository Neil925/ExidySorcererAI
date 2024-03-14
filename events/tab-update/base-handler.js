const tabUpdateEventFiles = [
    "go-to-bing",
    "disable-css"
];

let tabUpdateEvents = [];

export default async function baseHandler(eventData) {
    if (tabUpdateEvents.length == 0) {
        for (let file of tabUpdateEventFiles)
            tabUpdateEvents.push((await import(`./${file}.js`)).default);
    }

    if (eventData.tab == undefined || eventData.tab.url == undefined)
        return null;


    for (let event of tabUpdateEvents)
        event.run = async x => await event.execute(x.tabId, x.changeInfo, x.tab);

    return tabUpdateEvents.filter(x => x.stage == eventData.changeInfo.status);
}