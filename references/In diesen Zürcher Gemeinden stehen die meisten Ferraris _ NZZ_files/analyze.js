var ammpu;

if(document.getElementById('ammpu')){
  ammpu=0;
} else {
  ammpu=1;
}

var r=new XMLHttpRequest();
r.open('POST','https://www.adblockanalytics.com/analyze/');
r.setRequestHeader('Content-type','application/x-www-form-urlencoded');

if(typeof abaI !== 'undefined'){
  r.send('psVzRkNU='+abaI+'|'+ammpu);
} else if(typeof iammpu !== 'undefined'){
  r.send('psVzRkNU='+iammpu+'|'+ammpu);
} else {
  r.send('psVzRkNU='+id+'|'+ammpu);
}

r.onreadystatechange=function(){
  if(r.readyState==4 && r.status==200){

    if(ammpu==0){
      ammpu='No';
    } else {
      ammpu='Yes';
    }
    
    if(r.responseText.indexOf("intGaDimension") > -1){
      if(typeof ga !=='undefined'){
        ga('set', 'Blocking Ads', ammpu);
      }
    }

    if(r.responseText.indexOf("intGaEvent") > -1){
      if(typeof ga !=='undefined'){
        ga('send','event','Blocking Ads',ammpu,{'nonInteraction':1});
      } else if(typeof _gaq !=='undefined'){
        _gaq.push(['_trackEvent','Blocking Ads',ammpu,undefined,undefined,true]);
      }
    }
  }
}