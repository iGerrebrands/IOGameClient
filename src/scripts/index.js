import '../style/index.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWdlcnJlYnJhbmRzIiwiYSI6ImNqbXJ4aW43NjF6NXYzcG9lZHhzc28xbDEifQ.DgTgTjTdQK5-Ewvw8RwK0g';

let init = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            new mapboxgl.Map({
                container: 'game',
                style: 'mapbox://styles/mapbox/streets-v10',
                center: [pos.coords.longitude, pos.coords.latitude],
                zoom: 13,
            });
        });
    } else {
        document.getElementById('game').innerHTML = 'Geolocation is not supported by this browser.';
    }
};

init();
