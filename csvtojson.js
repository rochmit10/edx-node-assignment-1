const fs = require('fs');
const csv = require('csvtojson');

const convertCsvToJson = (file = './customer-data.csv') => {
    let jsonData = [];
    csv()
        .fromFile(file)
        .on('json', (data) => {
            jsonData.push(data);
        })
        .on('end', (error) => {
            fs.writeFileSync('./customer-data.json', JSON.stringify(jsonData, null, 2));
            console.log('CSV file converted to JSON');
        });
}

convertCsvToJson('./customer-data.csv');
