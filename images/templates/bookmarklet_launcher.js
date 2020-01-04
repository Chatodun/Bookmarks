(function () {
    if (window.MyBookmarklet !== undefined) {
        myBookmarklet();
    } else {
        document.body.appendChild(
            document.createElement('script')
        ).src = '' + //added address ngrok
            Math.floor(Math.random() * 99999999999999999999);
    }
})();