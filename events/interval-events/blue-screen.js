export default {
    porbability: 0,
    preventOtherEvents: true,
    execute: async () => {
        await browser.storage.local.set({ bsof: true });
    }
}