//JS app file
let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/municipios';

// requisição JSON
$.getJSON(url, function(data){

    // percorre o array
    let conteudo = '<optiongroup>';
    conteudo+= '<option selected disabled>'+ "Selecione uma cidade..." +'</option>';

    $.each(data, function(v, val){
        conteudo+= '<option>'+ val.nome +'</option>';
    });
    
    conteudo += '</optiongroup>';

    $("#municipio").html(conteudo);
});