(function(win,doc){
    function refreshRem(){
        var docEl=doc.documentElement;
        var rem=20*docEl.clientWidth;
        rem=rem>40?40:rem;
        docEl.style.fontSize=rem+ 'px';
    }
    var tid;
    win.addEventListener("resize",function(e){
        win.addEventListener('resize', function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }, false);
    })
    refreshRem()
})(window,window.document)
