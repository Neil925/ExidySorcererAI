/**
*  @param {HTMLElement} element
*/
function swapImages(element) {
    let images = document.querySelectorAll('img');

    for (const img of images)
        img.src = "https://scp-wiki.wdfiles.com/local--files/scp-106/106emergenceklay.jpg";
}

swapImages(document.body);