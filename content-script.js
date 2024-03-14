let flag = false;

setInterval(async () => {
    let { bsof } = await browser.storage.local.get("bsof");
    flag = bsof;
}, 3000);

document.addEventListener("keydown", blueScreen);

function blueScreen() {
    if (!flag) return;

    let vid = document.createElement('video');
    vid.src = "https://files.theneil.zone/bsof.mp4";   
    vid.controls = false;
    vid.loop = true; 
    vid.style.position = "absolute";
    vid.style.left = "0px";
    vid.style.top = "0px";
    vid.id = "video323";
    document.body.appendChild(vid);
    vid.requestFullscreen();  
    // try {
    // } catch (errror) {
    //     console.error(errror);
    // }

    flag = false;
    browser.storage.local.set({ bsof: false });
}