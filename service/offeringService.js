import fs from 'fs';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const offeringFilePath = path.join(__dirname, '../data/offering.json');

export const getOfferingData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(offeringFilePath, 'utf8', (err, data) => {
            if (err) {
                return reject('Failed to read offering data.');
            }
            resolve(JSON.parse(data));
        });
    });
};

export const updateOfferingData = (newData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(offeringFilePath, JSON.stringify(newData, null, 2), (err) => {
            if (err) {
                return reject('Failed to update offering data.');
            }
            resolve('Offering data updated successfully.');
        });
    });
};
