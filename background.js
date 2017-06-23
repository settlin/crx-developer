var pairs = {
	'https://portal.settlin.in': 'http://localhost:3000',
	'http://localhost:3000': 'http://localhost:4000',
	'http://localhost:4000': 'https://settlin.in',
	'https://settlin.in': 'https://portal.settlin.in',
};
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
	for (var url in pairs) {
		if (pairs.hasOwnProperty(url)) {
			if (tab.url.startsWith(url)) {
				chrome.tabs.executeScript({
					code: 'location.href="' + tab.url.replace(url, pairs[url]) + '"'
				});
			}
		}
	}
});
