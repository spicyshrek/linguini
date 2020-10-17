'use strict';

//this is the code for the options page button
document.querySelector('#openOptions').addEventListener("click", function() {
	if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL('options.html'));
	}
});

//trying to select highlighted text and display it
chrome.tabs.executeScript( {
	code: "window.getSelection().toString();"
}, function(selection) {
	document.getElementById('output').value = selection[0];
});

//alternative selection method, not sure how to implement
/*
let el = activeWindow.document.activeElement; 	
if (isTextElem(el)) { 		
	if ('selectionStart' in el && el.selectionStart !== el.selectionEnd) { 			
		return el.value.substring(el.selectionStart, el.selectionEnd); 		
	} 	
}*/