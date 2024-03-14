const tabUpdateEventFiles = ["blue-screen"];

let tabUpdateEvents = [];

export default async function baseHandler(eventData) {
    if (tabUpdateEvents.length == 0) {
        for (let file of tabUpdateEventFiles)
            tabUpdateEvents.push((await import(`./${file}.js`)).default);
    }

    for (let event of tabUpdateEvents)
        event.run = async x => await event.execute();

    return tabUpdateEvents;
}