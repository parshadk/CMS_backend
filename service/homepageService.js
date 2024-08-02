import fs from 'fs';
import path from 'path';
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const homepageFilePath = path.join(__dirname, '../data/homepage.json');

export const getHomepageData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(homepageFilePath, 'utf8', (err, data) => {
            if (err) {
                return reject('Failed to read homepage data.');
            }
            resolve(JSON.parse(data));
        });
    });
};

export const updateHomepageData = (newData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(homepageFilePath, JSON.stringify(newData, null, 2), (err) => {
            if (err) {
                return reject('Failed to update homepage data.');
            }
            resolve('Homepage data updated successfully.');
        });
    });
};
