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

initialize = async function() {
  const url = "https://my-json-server.typicode.com/mandanakhademi/Google-Map/locations";
  let locations = await getLocation(url);

  
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(51.5141487121582, -0.10019999742507935),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  let infowindow = new google.maps.InfoWindow();
  
  let markers = [];
  let marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
      map: map
    });
    markers.push(locations[i].name);


    google.maps.event.addListener(marker, 'click', (function(marker, i)
    {
        return function() {
          infowindow.setContent(locations[i].name);
          infowindow.open(map, marker);
        }
    })(marker, i));
  }
  addToList(markers);
  
}

addToList = function(cities) {
  let list = document.getElementById("list");
  for (i = 0; i < cities.length; i++){

    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(cities[i]));
    list.appendChild(listItem);

  }
}

getLocation = function(url){
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      return json;
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
