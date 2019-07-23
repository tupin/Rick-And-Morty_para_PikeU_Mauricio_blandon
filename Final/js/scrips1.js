/* 
 function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('authors');
  const url = 'https://rickandmortyapi.com/api/character/?page=19';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data.results;
    return authors.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.image;
      span.innerHTML = `${author.name}`;z
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   
  */
  var cont = 0;
  var btncaracter = document.getElementById("idCaracter").addEventListener("click",getCaracter);
  var div = document.getElementById("cardDivCaracter");

  var btnlocation = document.getElementById("idLocation").addEventListener("click",getLocation);
  var div = document.getElementById("cardDivLocation");

  var btnepisode = document.getElementById("idEpisode").addEventListener("click",getEpisode);
  var div = document.getElementById("cardDivEpisode");


  function getCaracter(){
    $( "div" ).remove( ".card" );
    cont = 0;
    fetch('https://rickandmortyapi.com/api/character/')
    .then((res)=>  res.json() )
    .then((post)=>{
      let resultado = post.results;
      for(let index = 0 ; index <resultado.length ;index++){
        div.innerHTML += `

        <div id="Caracter" "img-fluid img-thumbnail" alt="Responsive image">
        <div id="mauro">
        <img src="${resultado[cont].image}" class="card-img-top" alt="${resultado[cont].name}" class=>
        
        <div class="card-body">
        <h5 class="card-title">${resultado[cont].name}</h5>
        <p class="card-text">${resultado[cont].species}</p>
        <a href="${resultado[cont].location.url}">Localidad</a>
        </div>
        </div>
        </div>
        `;
        cont= cont+1;
      }
      console.log(resultado);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function getLocation(){
    $( "div" ).remove( ".card" );
    cont = 0;
    fetch('https://rickandmortyapi.com/api/location/')
    .then((res)=>  res.json() )
    .then((post)=>{
      let resultado = post.results;
      for(let index = 0 ; index <resultado.length ;index++){
        div.innerHTML += `
        <div id="Location" class="card">
        <div class="card-body">
        <h5 class="card-title">${resultado[cont].name}</h5>
        <p class="card-text">${resultado[cont].dimension}</p>
        <a href="${resultado[cont].url}">URL</a>
        </div>
        </div>
        `;
        cont= cont+1;
      }
      console.log(resultado);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function getEpisode(){
    $( "div" ).remove( ".card" );
    cont = 0;
    fetch('https://rickandmortyapi.com/api/episode/')
    .then((res)=>  res.json() )
    .then((post)=>{
      let resultado = post.results;
      for(let index = 0 ; index <resultado.length ;index++){
        div.innerHTML += `
        <div id="Episode" class="card">
        
        <div class="card-body">
        <h5 class="card-title">${resultado[cont].name}</h5>
        <p class="card-text">${resultado[cont].episode}</p>
        <a href="${resultado[cont].url}">URL</a>
        </div>
        </div>
        `;
        cont= cont+1;
      }
      console.log(resultado);
    })
    .catch((error)=>{
      console.log(error);
    })
  }