const cliente = {
    nome : document.querySelector("#nome-clinte"),
    cpf:document.querySelector("#cpf"),

};
    const endereco = {
        nome: document.querySelector("#nome-cliente"),
        cpf : document.querySelector("#cpf"),

    };


    const endereco={
        cep:document.querySelector("#cep"),
        logradouro:document.querySelector("#logradouro"),
        numero: document.querySelector("#numero"),
        complemento:document.querySelector("#complemento"),
        bairro:document.querySelector("#bairro"),
        cidade:document.querySelector("#cidade"),
        uf: document.querySelector("#uf"),

    }
    
    const endereco = {
        
        cep:document.querySelector("#cep"),
        logradouro:document.querySelector("#logradouro"),
        numero: document.querySelector("#numero"),
        complemento:document.querySelector("#complemento"),
        bairro:document.querySelector("#bairro"),
        cidade:document.querySelector("#cidade"),
        uf: document.querySelector("#uf"),


    };

    cliente.formulario.addEventListener('submit')

    async function consultarCEP(cep) {
        const url = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const resposta = await url.json();

        const dadosDoCEP = {
            logradouro:resposta.logradouro,
            complemento:resposta.complemento,
            bairro: resposta.bairro,
            cidade:resposta.localidade,
            uf: resposta.uf,


        };
        console.log(dadosDoCEP);

    }
consultarCEP(cep);




