// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
document.querySelector('#btn').addEventListener('click', () => {
    var form = document.querySelector("#form");
    var link = document.querySelector("#linkler").value;
    form.remove()
    var iframe = document.createElement("iframe")
    iframe.src = link;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = 0;
    iframe.allowFullscreen = true;
    
    var body = document.querySelector("#body")
    body.appendChild(iframe)

    
    console.log("aaaaAAAAAAAHHHHHH")
})
