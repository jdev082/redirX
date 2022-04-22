// the config
browserBlockedPage = "html/blocked.html";
unsupportedBrowsers = ["IE", "edge"];
unsupportedBrowserAction = "block"; // options: block or warn

function detectBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser = "opera";
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        browser = "edge;"
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser = "chrome";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser = "safari";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser = "firefox";
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        browser = "IE";
    }
    let a = document.createElement('audio');
    let supportsAAC = !!(a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''));
    let is_iphone = ['iPhone Simulator', 'iPhone'].includes(navigator.platform)
    return is_iphone && !supportsAAC
    if (is_iphone && !supportsAAC) {
        browser = "appleWatch";
    }
}

// if value of browser is in unsupportedBrowsers, redirect to blockedBrowserPage
function redirectIfUnsupportedBrowser() {
    // if browser is in not supported array, redirect to blocked page
    if (unsupportedBrowsers.includes(browser)) {
        window.location.replace(browserBlockedPage);
    }
    // if browser is not in unsupportedBrowsers array, say this browser is supported
    else {
        console.log("This browser is supported");
    }
}

detectBrowser();

// if unsupportedBrowserAction is block, run redirectIfUnsupportedBrowser
if (unsupportedBrowserAction == "block") {
    redirectIfUnsupportedBrowser();
}
// if unsupportedBrowserAction is warn, make alert box
else if (unsupportedBrowserAction == "warn") {
    alert("This browser is not supported. Please use a supported browser.");
}