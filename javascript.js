showMapView = function(){
  let list = document.getElementsByClassName('list-view');
  let gmap = document.getElementsByClassName('map-view');

  if (!list[0].classList.contains('hide')){
    list[0].classList.add('hide');
  }

  if (gmap[0].classList.contains('hide')){
    gmap[0].classList.remove('hide');
  }

}

showListView = function(){
  let list = document.getElementsByClassName('list-view');
  let gmap = document.getElementsByClassName('map-view');

  if (!gmap[0].classList.contains('hide')){
    gmap[0].classList.add('hide');
  }

  if (list[0].classList.contains('hide')){
    list[0].classList.remove('hide');
  }

}

initialize = function() {
  
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(51.5141487121582, -0.10019999742507935),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
}
 
loadScript = function() {
let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
    'callback=initialize';
document.body.appendChild(script);
}

window.onload = loadScript;





