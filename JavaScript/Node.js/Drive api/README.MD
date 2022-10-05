# Como usar a API do Google Drive #

Os arquivos dessa APi podem ser reaproveitados, mas antes disso é necessário instalar as ferramentas da biblioteca do Google Drive Api, configurar a autenticação no site do Google Cloud e baixar o arquivo JSON que será gerado. 

OBS: Será necessário acessar esse arquivo JSON na opção <code>keyFile: './drive/drive.json'</code> em todos os arquivos, sendo que o valor do KeyFile é o endereço de onde está o arquivo. Neste exemplo, eu renomeei o JSON como drive.json e o coloquei dentro da pasta chamada drive.

OBS 2: Ao gerar a autenticação, precisaremos informar o id de uma pasta <b>pai</b> para conseguirmos criar pastas e enviar arquivos dentro dela.

## Arquivos ##

### createFolder.js ###
Este arquivo recebe como parametro: o nome que a pasta terá ao ser criada, além do Id da pasta <b>pai</b>. Como o próprio nome sugere, esse arquivo cria subpastas dentro do pasta informada através do ID. O arquivo também retorna o id da pasta criada caso seja necessário utilizá-lo. 
Podemos concatenar o ID da pasta criada com o link <code>https://drive.google.com/drive/u/0/folders/</code> + <code>ID da Pasta</code> para acessarmos a pasta.

### uploadFile.js ###
Este arquivo recebe como parametro: o nome que o arquivo irá ter, o ID da pasta do Google Drive onde iremos salvar o arquivo, o arquivo em si, além da extensão que o arquivo terá, como por exemplo .pdf ou .docx. O arquivo retornará o id do arquivo ao salvá-lo no Google Drive.
Podemos concatenar o ID do arquivo enviado com o link <code>https://drive.google.com/file/d/</code> + <code>ID do arquivo</code> + <code>/view</code> para acessarmos o arquivo via Google Drive.

### deleteFile.js ###
Este arquivo, apesar do nome, serve para apagar tanto pastas quanto arquivos salvos no google drive. Ele recebe como parâmetro o ID daquilo que você quer apagar. Como a função apenas apaga arquivos/pastas, eu não a configurei para dar algum tipo de retorno.

### drive.json ###
Como dito acima, o arquivo JSON será gerado após fazer as configurações de autenticação no site do Google Cloud. Este arquivo possui informações únicas de cada pasta onde usa-se essa api. Deixei esse arquivo apenas como modelo.

## Links ##
<ul>
    <li><a href="https://developers.google.com/drive/api">Api do Google Drive</a></li>
    <li><a href="https://developers.google.com/drive/api/guides/about-sdk">Introdução a API do Google Drive</a></li>
    <li><a href="https://www.youtube.com/watch?v=GSHc5vlj6aQ">Usando a api do Google Drive na prática</a></li>
</ul>