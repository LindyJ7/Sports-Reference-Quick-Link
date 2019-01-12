console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.name = "";

function receiver(request, sender, sendResponse){
    console.log(request);
    window.name = request.text;
}