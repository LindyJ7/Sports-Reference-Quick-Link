window.addEventListener('mouseup', nameSelected);

function nameSelected() {
    let selectedText = window.getSelection().toString();
    if(selectedText.length > 0){
        let message = {
            text: selectedText
        };
        console.log(message);
        chrome.runtime.sendMessage(message);
    }
}
