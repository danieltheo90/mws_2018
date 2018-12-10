const URL="../data/peta.json";

f(URL);
async function f(url){
	try {
		const resp= await(fetch(url));
		const resp2= await resp.json();

		let Ob=[];
		Ob.push(resp2);
		
		localStorage.setItem('placeSync',JSON.stringify(Ob));

		let place = await JSON.parse(localStorage.getItem ('placeSync'));
		this.places = place[0].places;

		for (var p of places) {
			var marker= L.marker(p.lokasi).addTo(mymap)
			.bindPopup(p.sponsor);
			marker.on('click', showLocation);
		}

	}
	catch(err){
		console.log(err);
	}
}


// fetch(URL).then(function(response){
// 	if (response.status !== 200) { //HTTP Status
// 		console.log('Ada masalah. Status Code: ' +	response.status);
// 		throw response.statusText;
// 	}
// 		return response.json()
// 	})
// 	.then ( resp => {
// 			let places= resp.places;
// 			localStorage.setItem('place',JSON.stringify(places));
// 			this.places = JSON.parse(localStorage.getItem('place'));

// 			for (var p of places) {
// 				var marker= L.marker(p.lokasi).addTo(mymap)
// 				.bindPopup(p.sponsor);
// 				marker.on('click', showLocation);
// 			}
// 		})
// 	.catch(function(err){console.log(err);});

function findLocation(x,y) {
// console.log(x,y);
	for (var i=0; i< places.length;i++) {
		if (places[i].lokasi[0]==x &&
			places[i].lokasi[1]==y) {
			return i;
		}
	}
	return -1;
}
function showLocation(e) {
	//console.log("you clicked " + e.latlng.lat + " dan "+	e.latlng.lng);
	let ix= findLocation(e.latlng.lat,e.latlng.lng);
	if (ix >=0) {
		img.src= places[ix].gambar;
		par.textContent=places[ix].review;
	}
}

let gmb= document.getElementById("gmb");
let rev= document.getElementById("review");
let img= document.createElement('img');
let par= document.createElement('p');

gmb.appendChild(img);
rev.appendChild(par);
// let r0="Toko Retail PDG";
// let r1="Toko Retail PDGII";
// let r2="Toko Retail PKU";
// let r3="Toko Retail JMB";
// let r4="Toko Grosir JKT";
// let r5="Toko Grosir PDG";
// let r6="Showroom Ikad";
// let r7="Toko Grosir PLM";
// let places= [
// 	{"lokasi": [-0.951676,100.357971], "sponsor" : "SentralTukang CB","gambar":"images/planB.jpg","review": r0},
// 	{"lokasi": [-0.9519472,100.3558956], "sponsor" : "SentralTukang KCS","gambar":"images/warkop.jpg","review": r1},
// 	{"lokasi": [0.5350475,101.42927], "sponsor" : "SentralTukang PKU", "gambar":"images/ikan_bakar.jpg","review": r2},
// 	{"lokasi": [-1.6073146,103.6129283], "sponsor" : "SentralTukang Jmb","gambar":"images/steak.jpg","review": r3},
// 	{"lokasi": [-6.2420599,106.6515281], "sponsor" : "Klassen", "gambar":"images/seafood.jpg","review": r4},
// 	{"lokasi": [-0.8574366,100.3715877], "sponsor" : "Ikad Grosir PDG", "gambar":"images/seafood.jpg","review": r5},
// 	{"lokasi": [-0.9556456,100.3531283], "sponsor" : "Showroom Ikad", "gambar":"images/seafood.jpg","review": r6},
// 	{"lokasi": [-2.9650582,104.7951457], "sponsor" : "Ikad GrosirPLM", "gambar":"images/seafood.jpg","review": r7}
// ];
