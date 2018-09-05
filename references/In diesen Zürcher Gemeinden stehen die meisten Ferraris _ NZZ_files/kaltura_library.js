/* kAddEvent( window, 'load', FUNKTION ); */
kAddEvent = function(obj, evType, func) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, func, false);
        return true;
    } else if (obj.attachEvent) {
        var r = obj.attachEvent("on" + evType, func);
        return r;
    } else {
        return false;
    }
}
function kAppendScript(pathToScript) {
    var target = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = pathToScript;
    target.appendChild(js);
}

var NZZ = NZZ || {};
window.is_mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.is_mobile = true;       
    try{ console.log("MOBILE edition: " + navigator.userAgent ); }catch(e){};
}else{
    try{ console.log("DESKTOP edition: " + navigator.userAgent ); }catch(e){};
}
if (typeof(window.$) == 'undefined') {
    try{ console.log("JQUERY is undefined, lets load it..." + window.$); }catch(e){};
    kAppendScript("//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js");
}else{
    try{ console.log("JQUERY is already defined:" + typeof(window.$)); }catch(e){};
    try{ console.log(window.$); }catch(e){};
}
try{ console.log('load uiconf: kaltura_playlistRight' ); }catch(e){};
/** LIVE PLAYER **/
kAppendScript("//cdnapisec.kaltura.com/p/1750922/sp/175092200/embedIframeJs/uiconf_id/33142311/partner_id/1750922");
/** LATEST PLAYER FOR TESTING **/
/**
kAppendScript("//cdnapisec.kaltura.com/p/1750922/sp/175092200/embedIframeJs/uiconf_id/33142731/partner_id/1750922");
**/



if (typeof(window.$) == 'undefined') {
    window.jqueryInterval = setInterval('JqueryReady()',100);
}else{
    if (typeof(window.NZZ) == 'undefined' || typeof(window.NZZ.kaltura) == 'undefined') {
        kAppendScript("//widgets.nzz.ch/js/kaltura_combined.js");
    }
}

JqueryReady = function(){
    if(typeof(window.$) != 'undefined'){
        clearInterval(window.jqueryInterval);

        if (typeof(window.NZZ) == 'undefined' || typeof(window.NZZ.kaltura) == 'undefined') {
            kAppendScript("//widgets.nzz.ch/js/kaltura_combined.js");
        }
    }else{
        try{ console.log("jQery not ready"); }catch(e){};
    }
};

kReady = (function () {
    window.kalturaInterval = setInterval('KalturaReady()',100);
});

KalturaReady = function(){
    if(typeof(Log) != 'undefined' && typeof(mw) != 'undefined'){
        clearInterval(window.kalturaInterval);
        /** INIT NZZ Kaltura Library **/
        try{
            Log = new Log();
            Log.DEBUG = false;
            //Log.setCollapsed(true);
            Log.out('\n\n\n');
            Log.open('NZZ Kaltura init');
            NZZ.kaltura = new NZZ.kaltura();
            NZZ.kaltura.init();
            Log.close();
            Log.out('\n\nASYNC OUTPUT\n');
        }catch(e){};
    }else{
        //try{ console.log('Kaltura not ready'); }catch(e){};
    }
};

if (document.readyState === 'complete') {
    kReady();
} else {
    kAddEvent( window, 'load', kReady );
}                
