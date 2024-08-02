import { getWorkData, updateWorkData } from '../service/workService.js';

export const getWork = async (req, res) => {
    try {
        const data = await getWorkData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const updateWork = async (req, res) => {
    try {
        await updateWorkData(req.body);
        res.json({ message: 'Work data updated successfully.' });
    } catch (error) {
        res.status(500).json({ error });
    }
};
