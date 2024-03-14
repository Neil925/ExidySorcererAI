export default {
    porbability: 1,
    preventOtherEvents: true,
    execute: async () => {
        await browser.storage.local.set({ bsof: true });
    }
}