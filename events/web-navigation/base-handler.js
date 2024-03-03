const tabUpdateEventFiles = [
    "uses-bing"
];

let tabUpdateEvents = [];

export default async function baseHandler(event) {
    if (tabUpdateEvents.length == 0) {
        for (let file of tabUpdateEventFiles)
            tabUpdateEvents.push((await import(`./${file}.js`)).default);
    }

    console.debug(tabUpdateEvents);

    if (event.details.url == undefined)
        return null;

    for (let event of tabUpdateEvents)
        event.run = async x => await event.execute(x.details);

    return tabUpdateEvents;
}