function main() {
    createShakeAnimationStyle();
    shake(document.body);
}

function createShakeAnimationStyle() {
    const style = document.createElement('style');
    const keyFrames = `
      @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
      }
  
      .shake-animation {
        animation: shake 0.5s ease-in-out infinite;
      }
    `;

    // Insert the CSS into the <style> element
    if (style.sheet) {
        // This is required for IE8 and below.
        style.sheet.cssRules = keyFrames;
    } else {
        style.appendChild(document.createTextNode(keyFrames));
    }

    // Append the <style> element to the <head> of the document
    document.head.appendChild(style);
}

/**
*  @param {HTMLElement} doc
*/
function shake(doc) {
    setTimeout(() => {
        doc.classList.add("shake-animation");
    }, 1000 * Math.random());

    for (const el of doc.children)
        shake(el);
}

main();