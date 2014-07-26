'use strict';

console.log('\'Allo \'Allo! Content script');

function pasteContent(toBePasted) {
    document.activeElement.value = toBePasted;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ?
        'from a content script: ' + sender.tab.url :
        'from the extension');
    if (request.data) {
        console.log('trying to paste: ' + request.data);
        pasteContent(request.data);
    }
    console.log('wrapping up response');
});

