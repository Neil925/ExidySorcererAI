export default {
    porbability: .10,
    preventOtherEvents: true,
    execute: async () => {
        await browser.storage.local.set({ bsof: true });
    }
}