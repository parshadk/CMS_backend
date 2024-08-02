import fs from 'fs';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const workFilePath = path.join(__dirname, '../data/work.json');

export const getWorkData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(workFilePath, 'utf8', (err, data) => {
            if (err) {
                return reject('Failed to read work data.');
            }
            resolve(JSON.parse(data));
        });
    });
};

export const updateWorkData = (newData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(workFilePath, JSON.stringify(newData, null, 2), (err) => {
            if (err) {
                return reject('Failed to update work data.');
            }
            resolve('Work data updated successfully.');
        });
    });
};
