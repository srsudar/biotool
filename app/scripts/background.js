'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page');

// This function will be replaced. For now we'll just note that we're calling
// the function correctly with a log statement.
function genericOnClick(info, tab) {
    console.log('item ' + info.menuItemId + ' was clicked');
    console.log('info: ' + JSON.stringify(info));
    console.log('tab: ' + JSON.stringify(tab));
}

// We're going to create some context menu items. We need three such menus:
// paste reverse
// paste complement
// paste reverse complement
// This is following the example set forth in:
// https://developer.chrome.com/extensions/samples#search:
var parentItem = chrome.contextMenus.create(
    {
        'title': 'BioTool test parent item',
        'contexts': ['editable']
    });
var pasteReverse = chrome.contextMenus.create(
    {
        'title': 'Paste Reverse',
        'parentId': parentItem,
        'onclick': genericOnClick,
        'contexts': ['editable']
    });
var pasteComplement = chrome.contextMenus.create(
    {
        'title': 'Paste Complement',
        'parentId': parentItem,
        'onclick': genericOnClick,
        'contexts': ['editable']
    });
var pasteReverseComplement = chrome.contextMenus.create(
    {
        'title': 'Paste Reverse Complement',
        'parentId': parentItem,
        'onclick': genericOnClick,
        'contexts': ['editable']
    });
