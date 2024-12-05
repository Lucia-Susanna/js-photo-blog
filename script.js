// prendo gli elementi che mi serviranno: la column in cui andrò a inserire l'html delle card, la img della card e la caption
//l'api in questo caso serve a generare un numero di immagini con descrizione pari a quanto indicato in _limit 
// mi restituisce un json in cui mi rervono questi elementi: title e url
// salvando questi due elementi in una costante vado a inserirli man mano (con unn ciclo) nell'html della card concatenandoli


// richiamo i nodi dal document
const row = document.querySelector('.row');
const cardNumber = 9

//salvo l'endpoint
const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=' + cardNumber;

//faccio la chiamata all'api
axios.get(endpoint)
  .then(response =>{
    const photosArray = response.data
    console.log(photosArray)
    photosArray.forEach(photo => {
      const {title, url} = photo
      row.innerHTML += `<div class="column debug">
         <div class="card debug">
           <img class="pin" src="./assets_day1/img/pin.svg" alt="">
           <div class="img">
             <img id="photo" src="${url}" alt="img">
           </div>
           <div class="caption">
             <p>${title}</p>
           </div>
         </div>
        </div>        `
    });
    
  })
  .catch(e =>
    console.log(e)
  )
