// // File: sw.js
// self.addEventListener('fetch', event => {
// 	console.log( "event.request" );
// })

// self.addEventListener('fetch', event => {
// 	event.respondWith( new Response('intersepsi jawaban!'));
// })

// self.addEventListener('fetch', event => {
// 	event.respondWith( new Response('<b>intersepsi</b> jawaban!',{headers: {'content-type':'text/html'}}));
// })

// self.addEventListener('fetch', event => {
// 	event.respondWith(fetch('./images/checkmark.png'));
// })

// self.addEventListener('fetch', event => {
// 	event.respondWith(
// 		fetch(event.request).then ( resp => {
// 			if (resp.status == 404) {
// 				return new Response ("File tidak ditemukan");
// 			}
// 				return resp; // jawaban normal tanpa error
// 		})
// 		.catch ( error => {
// 			return new Response("Terjadi Error: " + error);
// 		})
// 	)
// })

const NAMACACHE = 'mws-v1';
let filesToCache = [
	'.',
	'index.html',
	'404.html',
	'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
	'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
	'./assets/css/style.css',
	'./assets/css/mystyle.css',
	'./assets/css/styleIndex.css',
	'./assets/js/add2numbers.js',
	'./assets/js/peta_async.js',
	'./assets/js/peta_promise.js',
	'project 1/kalkulator.html',
	'./assets/image/icon.png',
	'./assets/image/profile.jpg',
	'./assets/image/1.jpg',
	'./assets/image/2.jpg',
	'./assets/image/3.jpg',
	'./assets/image/4.jpg',
	'./assets/image/5.jpg',
	'./assets/image/6.jpg',
	'./assets/image/7.jpg',
	'./assets/image/async.png',
	'./assets/image/400dpiLogoCropped.png',
	'./assets/image/kalkulator.jpg',
	'./assets/image/mapbox.png',
	'./assets/image/promise.png',
	'project 2/map.html',
	'project 3/app.html',
	'project 4/app.html',
	'./data/peta.json'
	
];
self.addEventListener('install', event => {
	console.log('Persiapan Cache');
	event.waitUntil(caches.open(NAMACACHE)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

// // self.addEventListener('fetch', event => {
// // 	event.respondWith(
// // 		caches.match(event.request)
// // 		.then( ada_response => {
// // 			return ada_response;
// // 		})
// // 		.catch(error => {
// // 			return new Response("Waduh " + error);
// // 		})
// // 	);
// // });

// self.addEventListener('fetch', event => {
// 	event.respondWith(
// 		caches.match(event.request)
// 		.then( ada_response => {
// 			if (ada_response) {
// 				return ada_response;
// 			}
// 		// tidak ada response, ambil ke jaringan
// 			else {
// 				return fetch(event.request)
// 				.then( jawaban => {
// 				// Periksa jika jawaban itu tidak kosong
// 						if (!jawaban.ok) {
// 						throw Error( jawaban.statusText);
// 					}
// 				// tulis jawaban di cache dan juga berikan jawaban
// 				// ke browser
// 					return caches.open(NAMACACHE)
// 					.then(function(cache) {
// 						cache.put(url, response.clone());
// 						return response;
// 					});
// 				})
// 			}
// 		})
// 		.catch(error => {
// 			return new Response("Waduh " + error);
// 		})
// 	);
// });

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then( ada_response => {
if (ada_response) {
return ada_response;
}
// tidak ada response, ambil ke jaringan
else {
return fetch(event.request)
}
})
.catch(error => {
return new Response("Waduh " + error);
})
);
});