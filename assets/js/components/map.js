import L from 'leaflet';


if (document.getElementById('map')) {
  initMap()
}

function initMap() {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });

  const map = L.map('map');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const bounds = [];
  const markers = document.querySelectorAll('.map-item');
  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    const { lat, lng } = marker.dataset;
    L.marker([lat, lng]).addTo(map)
      .bindPopup(marker.innerHTML);

    bounds.push(L.latLng(lat, lng));
  }

  const latLngBounds = L.latLngBounds(bounds).pad(.1);
  map.fitBounds(latLngBounds);
}
