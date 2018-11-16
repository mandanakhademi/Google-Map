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





