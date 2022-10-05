// Requisição Apis Drive
const fs = require('fs');
const { google } = require('googleapis');

module.exports = {
    async deleteFile(fileId) {

        try {
            const auth = new google.auth.GoogleAuth({
                keyFile: './drive/drive.json',
                scopes: ['https://www.googleapis.com/auth/drive']
            });

            const driveService = google.drive({
                version: 'v3',
                auth
            });

            var request = await driveService.files.delete({
                'fileId': fileId
            });
            
        } catch (error) {
            console.log(`Erro aqui no deleteFile: ${error}`)
        }
        
    }
}