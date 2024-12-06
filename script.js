// prendo gli elementi che mi serviranno: la column in cui andrò a inserire l'html delle card, la img della card e la caption
//l'api in questo caso serve a generare un numero di immagini con descrizione pari a quanto indicato in _limit 
// mi restituisce un json in cui mi rervono questi elementi: title e url
// salvando questi due elementi in una costante vado a inserirli man mano (con unn ciclo) nell'html della card concatenandoli


// richiamo i nodi dal document
const row = document.querySelector('.row');
const cardNumber = 6

//salvo l'endpoint
const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=' + cardNumber;

//faccio la chiamata all'api
axios.get(endpoint)
.then(response =>{
  const photosArray = response.data
  
  photosArray.forEach(photo => {    
    const {title, url} = photo
    row.innerHTML  += `<div class="column d-flex center debug">
    <div class="card relative debug">
    <img class="pin absolute" src="./assets_day1/img/pin.svg" alt="">
    <div class="img">
    <img src="${url}" alt="img">
    </div> 
    <div class="caption">
    <p>${title}</p>
    </div>
    </div>
    </div>`
  })
  
  // seleziono nel codice html tutti i tag con classe img
  const images = document.querySelectorAll('.img')

  // per ogni tag selezionato aggiungo l'evento che mostra l'overlay
  images.forEach(image =>{
    image.addEventListener('click', () => overlay.classList.remove('hide'))  
})

})
.catch(e =>
  console.log(e)
)

// al click del bottone aggiungo la classe hide all'overlayer
// al click di una qualsiasi card tolgo la classe hide

const btn = document.querySelector('.close')
const overlay = document.querySelector('.overlay')


btn.addEventListener('click', () => overlay.classList.add('hide'))





