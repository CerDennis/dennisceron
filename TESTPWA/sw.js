const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/style.css',
    '/css/materialize.min.css',
    '/css/icon.css',
    '/img/dish.png'
];

// INSTALLO SERVICE WORKER
self.addEventListener('install', e => {
    //console.log('Service worker installato')
    e.waitUntil(
        //WAITUNTIL ATTENDE CHE SIA FINITA LA PROMISE 
        //CACHE.ADDALL PRIMA DI RISOLVERE L'EVENTO INSTALL
        caches.open(staticCacheName)
        .then( cache => {
            console.log( 'Cachiando il tutto' );
            cache.addAll(assets);
        })
    );
});

// ATTIVO SERVICE WORKER
self.addEventListener('activate', e => console.log('Service worker attivato') );

//FETCH EVENTS
self.addEventListener('fetch', e => {
    console.log('Fetch event', e);
});