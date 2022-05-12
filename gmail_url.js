(function(){
    const newURL = window.location.href.replace(/(mail.google.com\/mail\/(?:[^\/#]*\/)*)#((?:[^\/]*\/)*)([^\/]*)?/, "$1#all/$3");
    if (newURL !== window.location.href) {
	window.location.href = newURL;
    }
})();
