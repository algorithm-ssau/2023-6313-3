const EasyYandexS3 = require('easy-yandex-s3').default;

const env = process.env.NODE_ENV || 'localDevelopment';
const config = require('../../config/config.json')[env];

class YandexS3Service {
    constructor() {
        this.s3 = new EasyYandexS3({
            auth: {
                accessKeyId: config.yandexCloudSettings.accessKeyId,
                secretAccessKey: config.yandexCloudSettings.secretAccessKey,
            },
            Bucket: config.yandexCloudSettings.bucketName,
            debug: config.yandexCloudSettings.debug,
        });
    }

    async uploadFile(carId, fileBuffer){
        let fileExtension = fileBuffer.mimetype.split('/')[1];
        let fileName = this.generateFileKey(carId, fileExtension);
        let uploadResult = await this.s3.Upload(
            {
                buffer: fileBuffer.buffer,
                name: fileName
            },
            '/images'
        );
        return uploadResult.Location;
    }

    generateFileKey(carId, fileExtension){
        return `${carId}/image_${new Date().getTime()}.${fileExtension}`
    }
}

module.exports = YandexS3Service;