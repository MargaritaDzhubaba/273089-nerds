ymaps.ready(init);
var myMap;
function init () {

myMap = new ymaps.Map("map", {
  center: [59.939167313501486,30.321536952296356],
  zoom: 17,
  controls: ["smallMapDefaultSet"]
  }, {
  searchControlProvider: "yandex#search" });

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  hintContent: "Nerds"
  }, {
  iconLayout: "default#image",
  iconImageHref: "img/map-marker.png",
  iconImageSize: [233, 196],
  iconImageOffset: [100, -120]
  });
myMap.geoObjects.add(myPlacemark);
};