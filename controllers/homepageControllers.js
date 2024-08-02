import { getHomepageData, updateHomepageData } from '../service/homepageService.js';

export const getHomepage = async (req, res) => {
    try {
        const data = await getHomepageData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const updateHomepage = async (req, res) => {
    try {
        await updateHomepageData(req.body);
        res.json({ message: 'Homepage data updated successfully.' });
    } catch (error) {
        res.status(500).json({ error });
    }
};
