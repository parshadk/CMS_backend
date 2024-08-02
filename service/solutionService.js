import fs from 'fs';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const solutionFilePath = path.join(__dirname, '../data/solution.json');

export const getSolutionData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(solutionFilePath, 'utf8', (err, data) => {
            if (err) {
                return reject('Failed to read solution data.');
            }
            resolve(JSON.parse(data));
        });
    });
};

export const updateSolutionData = (newData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(solutionFilePath, JSON.stringify(newData, null, 2), (err) => {
            if (err) {
                return reject('Failed to update solution data.');
            }
            resolve('Solution data updated successfully.');
        });
    });
};
