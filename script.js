// var map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


let map;
let markers = [
  ["mark1", 43.59314162425743, 1.4503333829428415, "graphisme/etoile2.png", 45, 45, "flute et douceur <br> 13h30 <br> Nord jardin des plantes"],
  ["mark2", 43.59576794139652, 1.4516230764266673, "graphisme/etoile.png", 45, 45, "Concert de Jazz <br> 18h30 <br> Grand-Rond"],
  ["mark3", 43.594218538035754, 1.4447194230720704, "graphisme/plot1.png", 60, 60, "muscu de rue <br> 11h <br> rue du loubard"],
  ["mark2", 43.593097668183646, 1.4403951566851252, "graphisme/plot2.png", 60, 60, "Entrainement marathon <br> 10h30 <br> rue de la chataigne"],
  ["mark2", 43.59618550427215, 1.4460091165558961, "graphisme/plot3.png", 60, 60, "Course à vélo <br> 8h45 <br> place du piou piou"],
  ["mark2", 43.59016352765081, 1.4499237156104035, "graphisme/1.png", 60, 60, "jeux de role D D <br> 8h45 <br> place du rameau"],
  ["mark2", 43.59540531864014, 1.4432173094945095, "graphisme/2.png", 60, 60, "jeux d'echec <br> 11h45 <br> impasse de la cuillere"],
  ["mark2", 43.59516356893102, 1.4557500955843932, "graphisme/3.png", 60, 60, "origami <br> 16h <br> place du foufou"],
  ["mark2", 43.58205413840038, 1.4521970115612306, "graphisme/etoile.png", 45, 45, "karaoke <br> 18h30 <br> bar saint andre"],
  ["mark2", 43.59834170715651, 1.453312810441687, "graphisme/etoile.png", 45, 45, "Concert de Rock <br> 21h30 <br> bar le lubin"],
  ["mark2", 43.593777174183494, 1.4756300740888664, "graphisme/etoile.png", 45, 45, "dj set <br> 21h30 <br> esplanade les longs"],
  ["mark2", 43.59133762607197, 1.4167864544509399, "graphisme/plot3.png", 60, 60, "Course à vélo <br> 8h45 <br> place du piou piou"],
  ["mark2", 43.61182416134152, 1.4474668896232705, "graphisme/plot3.png", 60, 60, "Course à vélo <br> 8h45 <br> place du piou piou"],
  ["mark2", 43.62373137552097, 1.4307160469439002, "graphisme/plot3.png", 60, 60, "Course à vélo <br> 8h45 <br> place du piou piou"],
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.604652, lng: 1.444209 },
    zoom: 15,
    mapId: "d433e0ad42a5990c",
    mapTypeControl: false, 
    fullscreenControl: false, 
    streetViewControl: false
  });


  for (let i = 0; i < markers.length; i++ ) {
    const markeractuel = markers[i];
    const marker = new google.maps.Marker({
      position: { lat: markeractuel[1], lng: markeractuel[2]},
      map,
      title: markeractuel[0],
      icon: {
        url: "graphisme/etoile.png",
        scaledSize: new google.maps.Size(markeractuel[4], markeractuel[5])
      } 
    });
    const infowindow = new google.maps.InfoWindow({
      content: markeractuel[6],
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
    markers[i].markerObj = marker; 
  }

  map.addListener('zoom_changed', function() {
    let zoomLevel = map.getZoom();
    let scaleFactor = zoomLevel / 15; 


    for (let i = 0; i < markers.length; i++ ) {
      const marker = markers[i].markerObj;
      marker.setIcon({
        url: markers[i][3],
        scaledSize: new google.maps.Size(markers[i][4] * scaleFactor, markers[i][5] * scaleFactor)
      });
    }
  });
}

function togglenotif() {
    var notifdepliant = document.getElementById("notifdepliant"); // Récupère l'élément du menu
    if (notifdepliant.style.display === "block") {
        notifdepliant.style.display = "none"; // Masque le menu s'il est déjà visible
    } else {
        notifdepliant.style.display = "block"; // Affiche le menu s'il est masqué
    }
}
function toggleprofil() {
    var profildepliant = document.getElementById("profildepliant"); // Récupère l'élément du menu
    if (profildepliant.style.display === "block") {
        profildepliant.style.display = "none"; // Masque le menu s'il est déjà visible
    } else {
        profildepliant.style.display = "block"; // Affiche le menu s'il est masqué
    }
}

window.initMap = initMap;


