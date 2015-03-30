'use strict';

/**
 * Insert the text at the cursor into the active element. Note that we're
 * intentionally not appending or simply replacing the value of the editable
 * field, as we want to allow normal pasting conventions. If you paste at the
 * beginning, you shouldn't see all your text be replaced.
 * Taken from:
 * http://stackoverflow.com/questions/7404366/how-do-i-insert-some-text-where-the-cursor-is
 */
function insertTextAtCursor(text) {
    // This will let us use the undo history. It doesn't seem to be working for
    // the contentEditable="true" divs gmail uses, though. Text inputs but
    // doesn't undo.
    var el = document.activeElement;
    var e = document.createEvent('TextEvent');
    e.initTextEvent('textInput', true, true, null, text);
    el.focus();
    el.dispatchEvent(e);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'paste') {
        insertTextAtCursor(request.data);
    } else if (request.type === 'message') {
        // currently we will assume that all of the messages are errors.
        makeErrorToast(request.message);
    }
});

/**
 * Configure our toasting library.
 */
function initializeToastr() {
    toastr.options = {
        'closeButton': false,
        'debug': false,
        'newestOnTop': false,
        'progressBar': false,
        'positionClass': 'toast-top-right',
        'preventDuplicates': false,
        'onclick': null,
        'showDuration': '300',
        'hideDuration': '1000',
        'timeOut': '2000',
        'extendedTimeOut': '1000',
        'showEasing': 'swing',
        'hideEasing': 'linear',
        'showMethod': 'fadeIn',
        'hideMethod': 'fadeOut'
    };
}

function makeErrorToast(text) {
    initializeToastr();
    toastr.error(text);
}
