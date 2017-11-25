function initMap() {
  var uluru = {lat: 50.47719458, lng: 30.82746506};
  var map = new google.maps.Map(document.getElementById('map'), 
    {
      zoom: 14,
      center: uluru,
      disableDefaultUI: true,
      scrollwheel: false
    });
  // Создаем маркер на карте
  var marker = new google.maps.Marker({
      // Определяем позицию маркера
      position: {lat: 50.477, lng: 30.827}, 
      // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
      map: map,
      animation: google.maps.Animation.DROP,
      // position: {lat: 50.477, lng: 30.827}
      // Пишем название маркера - появится если навести на него курсор и немного подождать
      title: 'Группа компаний Фьюжн',
      // Укажем свою иконку для маркера
      icon: '../img/marker.png'
    });

   


  var contentString = 
      '<h1 id="firstHeading">Группа компаний Фьюжн</h1>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

  marker.addListener('click', function() {
      infowindow.open(map, marker);
    });


  map.panTo(new google.maps.LatLng(50.478497, 30.851157));

}