'use strict';

// A gotcha of sorts with chrome extensions involving clipboard actions is that
// only the content scripts can interact with the page that a user loads. This
// means that we can't put our calls to actually paste into the page in the
// background file, because the background scripts are not able to paste into
// the dom of the page. However, only background pages are able to access the
// system clipboard. Therefore we have to do a little trickery to move between
// the two. We're going to define the functions here to actually read from the
// clipboard into a textarea we've defined in our background html, and then
// we'll get that pasted data from the background page and do the actual
// insertion in our content script. The idea of this comes from:
// http://stackoverflow.com/questions/7144702/the-proper-use-of-execcommandpaste-in-a-chrome-extension
/**
 * Retrieve the current content of the system clipboard.
 */
function getContentFromClipboard() {
    var result = '';
    var sandbox = document.getElementById('sandbox');
    sandbox.value = '';
    sandbox.select();
    if (document.execCommand('paste')) {
        result = sandbox.value;
        console.log('got value from sandbox: ' + result);
    }
    sandbox.value = '';
    return result;
}

/**
 * The function that will handle our context menu clicks.
 */
function onClickHandler(info, tab) {
    console.log('info: ' + JSON.stringify(info));
    console.log('tab: ' + JSON.stringify(tab));
    var clipboardContent = getContentFromClipboard();
    var functions = window.sequenceFunctions;
    if (functions === undefined) {
        console.log('could not load sequence functions, will cause errors');
    }
    console.log('clipboardContent: ' + clipboardContent);
    if (info.menuItemId === 'pasteReverse') {
        console.log('clicked paste reverse');
        var reverse = functions.getReverse(clipboardContent);
        sendPasteToContentScript(reverse);
    } else if (info.menuItemId === 'pasteComplement') {
        console.log('clicked paste complement');
        var complement = functions.getComplement(clipboardContent);
        sendPasteToContentScript(complement);
    } else if (info.menuItemId === 'pasteReverseComplement') {
        console.log('clicked paste reverse complement');
        var reverseComplement =
            functions.getReverseComplement(clipboardContent);
        sendPasteToContentScript(reverseComplement);
    } else {
        console.log('unrecognized context menu id: ' + info.menuItemId);
    }
}

/**
 * Send the value that should be pasted to the content script.
 */
function sendPasteToContentScript(toBePasted) {
    // We first need to find the active tab and window and then send the data
    // along. This is based on:
    // https://developer.chrome.com/extensions/messaging
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: toBePasted});
    });
}
chrome.contextMenus.onClicked.addListener(onClickHandler);

// we're going to set up the context menu tree at install time.
chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);

    // We're going to create some context menu items. We need three such menus:
    // paste reverse
    // paste complement
    // paste reverse complement
    // This is following the example set forth in:
    // https://developer.chrome.com/extensions/samples#search:
    var parentItem = chrome.contextMenus.create(
        {
            'title': 'BioTool test parent item',
            'id': 'parentItem',
            'contexts': ['editable']
        });
    var pasteReverse = chrome.contextMenus.create(
        {
            'title': 'Paste Reverse',
            'id': 'pasteReverse',
            'parentId': parentItem,
            'contexts': ['editable']
        });
        //},
        //function() {
            //if (chrome.extension.lastError) {
                //console.log(
                    //'Got unexpected error in pasteReverse item: ' +
                    //chrome.extension.lastError.message);
            //}
            //console.log('calling paste');
            ////document.getElementsByTagName('textarea')[0].focus();
            ////document.execCommand('paste');
            ////alert('hello');
        //});
    var pasteComplement = chrome.contextMenus.create(
        {
            'title': 'Paste Complement',
            'id': 'pasteComplement',
            'parentId': parentItem,
            'contexts': ['editable']
        });
    var pasteReverseComplement = chrome.contextMenus.create(
        {
            'title': 'Paste Reverse Complement',
            'id': 'pasteReverseComplement',
            'parentId': parentItem,
            'contexts': ['editable']
        });
});

console.log('\'Allo \'Allo! Event Page');

