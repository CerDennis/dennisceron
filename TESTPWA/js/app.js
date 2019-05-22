if ( 'serviceWorker' in navigator ) {
    //CONTROLLO CHE IL BROWSER SUPPORTI I SERVICE WORKER
    navigator.serviceWorker.register('sw.js')
        .then( reg => console.log('Service Worker registrato', reg) )
        .catch( err => console.log('Service Worker non registrato', err) );
}