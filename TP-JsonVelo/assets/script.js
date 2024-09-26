//initialiser la map
let map = L.map('map').setView([46.1635705075646, -1.1268395422898], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// pour chaque data point , le placer sur la carte
data.forEach(item => {
  // Replace commas with dots in latitude and longitude
  const lat = parseFloat(item.fields.station_latitude.replace(',', '.'));
  const lng = parseFloat(item.fields.station_longitude.replace(',', '.'));
  const stationName = item.fields.station_nom;
  
  // Creation du marker
  L.marker([lat, lng]).addTo(map)
    .bindPopup(`<b>${stationName}</b><br>Vélos disponibles: ${item.fields.velos_disponibles}`);
});