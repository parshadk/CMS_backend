import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getHomePageContent = (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/homepage.json');
    const content = fs.readFileSync(dataPath, 'utf-8');
    res.json(JSON.parse(content));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateHomePageContent = (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/homepage.json');
    fs.writeFileSync(dataPath, JSON.stringify(req.body, null, 2));
    res.json({ msg: 'Content updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
