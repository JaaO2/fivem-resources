require('dotenv').config();
const websiteURL = process.env.WEBSITE_URL;

onNet('sendWebsiteURL', () => emitNet('receiveWebsiteURL', source, websiteURL) );