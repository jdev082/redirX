// config
blockedOperatingSystems = ["windows"];
blockedOSPage = "html/blocked-os.html";

// if user is using windows set os to windows the last part of the userAgent is the version
// if user is using mac set os to mac the last part of the userAgent is the version
// if user is using linux set os to linux the last part of the userAgent is the version
function detectOS() {
    if (navigator.userAgent.indexOf("Windows") != -1) {
        os = "windows";
    }
    else if (navigator.userAgent.indexOf("Mac") != -1) {
        os = "mac";
    }
    else if (navigator.userAgent.indexOf("Linux") != -1) {
        os = "linux";
    }
}

detectOS();

// if variable windows is in the blockedOperatingSystems array, redirect to blockedOSPage
if (blockedOperatingSystems.includes(os)) {
    window.location.replace(blockedOSPage);
}
else {
    console.log("This operating system is supported");
}