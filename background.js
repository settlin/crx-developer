chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  var url = tab.url.replace('https://portal.settlin.in', 'http://localhost:3000');
  console.log(url);
  chrome.tabs.executeScript({
    code: 'location.href="' + url + '"'
  });
});