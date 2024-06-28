// script.js
// Recupera o host do atributo de dados

// Use host como necessário no seu código JavaScript

//import './style.css';


//const ENDPOINT =  // Endpoint da API
//console.log("host: "+ENDPOINT);
// script.js
let ENDPOINT = "//"+document.getElementById('host').getAttribute('data-host')+"/"; // Endpoint da API
ENDPOINT = String(ENDPOINT);
console.log("host: "+ENDPOINT);
$('#theForm').submit((e) => {
    e.preventDefault();
    $("#resultado").empty(); // limpa o conteúdo da div
    $("#processamento").empty();
    $('#mostrar-etapas').empty();
    var inputImagem = $('#inputImagem')[0].files[0]; //Imagem alvo
    var inputFundo = $('#inputFundo')[0].files[0]; //Imagem fundo
    var formData = new FormData($('#theForm')[0]);
    const carregando = document.getElementById('carregando');

    // Mensagem de processamento
    //carregando.classList.remove('d-none');
    carregando.innerHTML = `
        <img class="Dao" src="${carregando.getAttribute('imgsrc')}" alt="UDAO" />
        <p><span class="bold">Aguarde</span> o processo...</p>
    `;
    $('#resultado').innerHTML = '';

    

    // Requisicao AJAX pelo jQuery
    $.ajax({
        type: "POST",
        url: ENDPOINT + "processar",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            carregando.innerHTML = " ";
            // Recebe o JSON resposta da API caso sucesso
            carregando.innerHTML = "<h1>Resultado:</h1>";
            // Exibir resultado
            document.getElementById('resultado').innerHTML +=  ` 
            <div class="card-resultado">          
                <img id="minhaImagem" class="imagem-resultado" src="data:image/png;base64, ${data.resultado}" alt="">
                <h1 class="texto-card-resultado">Resultado Final</h1>
            </div>`;
            // Exibir imagem processada
            document.getElementById('resultado').innerHTML += cardModel(data.imagem_semfundo, 'Sem Fundo');
            // Exibir imagem original
            document.getElementById('resultado').innerHTML += cardModel(data.imagem_original,'Original');
            // Exibir imagem em escala de cinza
            document.getElementById('processamento').innerHTML += cardModel(data.imagem_gray,'Escala Cinza');
            // Exibir imagem canny
            document.getElementById('processamento').innerHTML +=  cardModel(data.imagem_canny, 'Canny');
            // Exibir imagem limiarizada
            document.getElementById('processamento').innerHTML +=  cardModel(data.imagem_limiarizacao, 'Limiarização');
            // Exibir imagem sobelizada
            document.getElementById('processamento').innerHTML +=  cardModel(data.imagem_sobel, 'Filtro Sobel');
            // Exibir imagem somada
            document.getElementById('processamento').innerHTML += cardModel(data.imagem_soma, 'Soma');

            // Temporario Merge
            document.getElementById('botao-download').innerHTML=`  
                <button onclick="downloadImagem('minhaImagem')" class="botao m-3 px-5 fs-3">Download</button>
            `;
            document.getElementById('mostrar-etapas').innerHTML+=`
            <button onclick="mostrarEtapas()" id="botaoMostrar" class="btn btn-secondary">Mostrar Etapas</button>
            `;
            
        },
        error: function (xhr,status,error) {
            // Recebe o JSON resposta caso erro
            console.log('Erro ao processar imagem:', xhr.responseJSON);
            document.getElementById('resultado').innerHTML = 'Erro ao processar imagem: <br>';
            document.getElementById('resultado').innerHTML += `<div class='erro-msg text-danger'>${xhr.responseJSON.erro}</div>`; //pega o erro do objeto
        }
    });
});

// OUTRAS FUNCOES
function downloadImagem(id) {

    // Selecionar a tag <img> pelo ID
    var imgTag = document.getElementById(id);
    
    // Criar um link <a> temp
    var link = document.createElement('a');
    
    // Configurar o link com o URL da imagem atual e o nome do arquivo desejado
    link.href = imgTag.src;
    link.download = 'bentrimagem.jpg';
    
    // Adicionar o link ao corpo do documento
    document.body.appendChild(link);
    
    // Simular um clique no link para iniciar o download
    link.click();
    
    // Remover o link do corpo do documento
    document.body.removeChild(link);
}

function openMenu(){
    const menu = document.querySelector('#menuMobile');
    
    if(menu.classList.contains('escondido')){
        menu.classList.remove('escondido');
        menu.classList.add('transicao');
    }
    else{
        menu.classList.add('escondido');
        menu.classList.remove('transicao');
    }
}

function arquivoEnviado(el,input){
    const fileInput = document.getElementById(input);
    
    if (fileInput.files && fileInput.files.length > 0) {
        document.querySelector('#'+el).classList.remove('d-none');
      } else {
        document.querySelector('#'+el).classList.add('d-none');
      }
}

function cardModel(data, texto = "..."){
    return `
    <div class="card-resultado">          
        <img class="imagem-resultado" src="data:image/png;base64, ${data}" alt="">
        <h1 class="texto-card-resultado">${texto}</h1>
    </div>
    `;
}
