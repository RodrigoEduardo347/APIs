// Requisição Apis Drive
const fs = require('fs');
const { google } = require('googleapis');

module.exports = {
    async createFolder(nome_da_pasta, idPasta) {

        try {
            const auth = new google.auth.GoogleAuth({
                keyFile: './drive/drive.json',
                scopes: ['https://www.googleapis.com/auth/drive']
            })

            const driveService = google.drive({
                version: 'v3',
                auth
            })

            const fileMetaData = {
                name: nome_da_pasta,
                mimeType: 'application/vnd.google-apps.folder',
                parents: [idPasta]
            }

            let id = '';

            const file = await driveService.files.create({
                resource: fileMetaData,
                fields: 'id',
            }).then((result) => {
                id = result.data.id;
            })
            return id;
        }
        catch (err) {
            console.log(`Erro no createFolder(): ${err}`)
        }
    }
}