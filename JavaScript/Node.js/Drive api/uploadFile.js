// Requisição Apis Drive
const fs = require('fs');
const { google } = require('googleapis');

// Requisição Stream
const { Readable } = require('stream');

function bufferToStream(buffer) {

    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    return stream;
}

module.exports = {

    async uploadFile(nomeArquivo, idPasta, documento, extensaoArquivo) {

        try {
            const auth = new google.auth.GoogleAuth({
                keyFile: './drive/drive.json',
                scopes: ['https://www.googleapis.com/auth/drive']
            });

            const driveService = google.drive({
                version: 'v3',
                auth
            });

            const fileMetaData = {
                'name': nomeArquivo + extensaoArquivo,
                'parents': [idPasta]
            };

            const media = {
                mimeType: documento.mimetype,
                body: bufferToStream(documento.buffer)
            };

            const response = await driveService.files.create({
                resource: fileMetaData,
                media: media,
                fields: 'id'
            });

            return response.data.id;
        }
        catch (err) {
            console.log(`Erro no uploadFileModularizado(): ${err}`);
        }
    }
}