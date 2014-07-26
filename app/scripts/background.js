'use strict';

/**
 * The function that will handle our context menu clicks.
 */
function onClickHandler(info, tab) {
    if (info.menuItemId === 'pasteReverse') {
        console.log('clicked paste reverse');
    } else if (info.menuItemid === 'pasteComplement') {
        console.log('clicked paste complement');
    } else if (info.menuItemId === 'pasteReverseComplement') {
        console.log('clicked paste reverse complement');
    } else {
        console.log('unrecognized context menu id: ' + info.menuItemId);
    }
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
        },
        function() {
            if (chrome.extension.lastError) {
                console.log(
                    'Got unexpected error in pasteReverse item: ' +
                    chrome.extension.lastError.message);
            }
            console.log('calling paste');
            //document.getElementsByTagName('textarea')[0].focus();
            //document.execCommand('paste');
            //alert('hello');
        });
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

