// Initialize the map
let map = L.map('map').setView([46.1635705075646, -1.1268395422898], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Loop through the data points and place them on the map
data.forEach(item => {
  const lat = item.geometry.coordinates[1];
  const lng = item.geometry.coordinates[0];
  const schoolName = item.fields.ee_libelle;
  const schoolAddress = item.fields.ee_adresse;

  // Create the marker
  L.marker([lat, lng]).addTo(map)
    .bindPopup(`<b>${schoolName}</b><br>${schoolAddress}`);
});
