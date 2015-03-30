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
    var el = document.activeElement;
    var val = el.value;
    var startIndex;
    var endIndex;
    var range;
    var sel;
    if (typeof el.selectionStart === 'number' &&
        typeof el.selectionEnd === 'number') {
        // input and textarea
        startIndex = el.selectionStart;
        endIndex = el.selectionEnd;
        el.value = val.slice(0, startIndex) + text + val.slice(endIndex);
        // standard behavior is move to the end of the selection
        el.selectionEnd = startIndex + text.length;
    } else if (el.tagName === 'DIV') {
        // We're pasting into an editable div, like gmail.
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                var pastedText = document.createTextNode(text);
                range.insertNode(pastedText);
                range.setStartAfter(pastedText);
                sel.removeAllRanges();
                sel.addRange(range);
            } else {
                console.log('getRangeAt or rangeCount not defined');
            }
        } else if (document.selection && document.selection.createRange) {
            document.selection.createRange().text = text;
        }
    } else {
        // We aren't imitating pasting for this tag yet.
        console.log('Not handling paste for tag type: ' + el.tagName);
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.data) {
        insertTextAtCursor(request.data);
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

function makeSuccessToast(text) {
    initializeToastr();
    toastr.success(text);
}
