import { getSolutionData, updateSolutionData } from '../service/solutionService.js';

export const getSolution = async (req, res) => {
    try {
        const data = await getSolutionData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const updateSolution = async (req, res) => {
    try {
        await updateSolutionData(req.body);
        res.json({ message: 'Solution data updated successfully.' });
    } catch (error) {
        res.status(500).json({ error });
    }
};
