// background.js

// Example background script code (modify as needed)

// Listen for a message from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Handle messages from the content script here
  if (message.action === 'addTransactionIDs') {
    // Perform any necessary processing and modification of the QuickBooks report
    // For example, you can send a message to the content script to trigger the modification
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'modifyQuickBooksReport', data: message.data });
    });
  }
});

// You can also handle other extension logic here
