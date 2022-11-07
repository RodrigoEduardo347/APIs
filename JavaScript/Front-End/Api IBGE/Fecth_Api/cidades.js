async function buscaCidades() {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/municipios';

    const cidadesJSON = await fetch(url, options);
    const cidades = await cidadesJSON.json();

    const top = `<option selected disabled>Selecione a cidade onde vive...</option>`;
    document.getElementById("municipio").innerHTML = top;
    for (item in cidades) {
        await insereOption(cidades[item].nome)
    }
}