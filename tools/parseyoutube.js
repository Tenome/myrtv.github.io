//JS YT->RTV playlist converter
var T=document.getElementsByClassName('pl-video yt-uix-tile'),n=document.getElementsByClassName('pl-header-title')[0].innerText,p={"info":{"name":n,"start_epoch_gtm":0,"end_epoch_gtm":0,"service":"youtube"},"playlist":[]};for(i=0;i<T.length;i++){var a=T[i].getElementsByClassName('timestamp')[0].getElementsByTagName('span')[0].innerText.split(':');p.playlist.push({"name":T[i].dataset.title,"duration":(+a[a.length-1])+(+a[a.length-2]*60)+((a.length==3)?(+a[a.length-3]*3600):0),"qualities":[{"src":T[i].dataset['videoId']}]})};prompt(name+'\n'+p.playlist.length+' videos',JSON.stringify(p));void(0)