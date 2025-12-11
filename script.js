console.log("OK");

// Objeto que armazena os dados do cliente
const cliente = {
  nome: document.querySelector("#nome-cliente"),
  cpf: document.querySelector("#cpf"),
  formulario: document.querySelector("#form-cliente"),
};

// Objeto que armazena os dados do endereço
const endereco = {
  cep: document.querySelector("#cep"),
  logradouro: document.querySelector("#logradouro"),
  numero: document.querySelector("#numero"),
  complemento: document.querySelector("#complemento"),
  bairro: document.querySelector("#bairro"),
  cidade: document.querySelector("#cidade"),
  uf: document.querySelector("#uf"),
};

const produto = {
  quantidade:document.querySelector("#quantidade"),
  nome: document.querySelector("#produto"),
  preco:document.querySelector("#preco"),
  formulario: document.querySelector("afora-produto"), 
  lista:{}

  



};

// Adiciona um "ouvinte" para capturar o disparo do evento de submit do formulário
cliente.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne o reload da página
  consultarCEP(cep.value);
});

// Função que faz a busca do CEP digitado
async function consultarCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
  // Variável do tipo objeto para receber os dados do CEP do usuário
  const dadosDoCEP = {
    logradouro: resposta.logradouro,
    complemento: resposta.complemento,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    uf: resposta.uf,
  };
  // console.log(dadosDoCEP);
 inserirEndereco (dadosDoCEP)
}

// consultarCEP(cep);

function inserirEndereco(dadosDoCEP){
  endereco.logradouro.value = dadosDoCEP.logradouro
  endereco.complemento.value = dadosDoCEP.complemento
  endereco.bairro.value = dadosDoCEP.bairro
  endereco.cidade.value = dadosDoCEP.cidade
  endereco.uf.value = dadosDoCEP.uf
}

produto.formulario.addEventListener("submit",(evento) =>{
  evento.preventDefault();
let item = {
  quantidade:produto.quantidade.value,
  nome: produto.nome.value,
  preco: produto.preco.value,

};

listaProdutos(item);




});
function listaProdutos(item){
  produto.lista.push(item);
  console.log(produto.lista);

}
