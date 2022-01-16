const imagem = document.querySelector('img');
const botao = document.querySelector('botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

traduzirCondição = (data) => {
if(data.status) == 'unknow'){
     return "Não sabemos";
     }else if(data.status == 'Alive'){
     return 'Sim';
     }else {
return 'Não. Está morto';

    }

}
gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 3);

}

 pegarPersonagem = () => {

    let numeroAleatorio = gerarValorAleatorio();

    return fetch (`http://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
      
            method:'GET',
            headers: {
            Accept: 'application/json',
           "Content-type": 'application/json'

   }

   }).then((Response) => Response.json()).then((data) => {
         imagem.src = data.image;
         imagem.alt = data.name;
         nomeDoPersonagem.innerHTML = data.name;
         especie.innerHTML = data.especies;
         condicao.innerHTML = data.status;
         condicao.innerHTML = traduzirCondição(data);

});

}

botao.onclick = pegarPersonagem;