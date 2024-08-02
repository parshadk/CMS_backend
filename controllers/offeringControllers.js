import { getOfferingData, updateOfferingData } from '../service/offeringService.js';

export const getOffering = async (req, res) => {
    try {
        const data = await getOfferingData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const updateOffering = async (req, res) => {
    try {
        await updateOfferingData(req.body);
        res.json({ message: 'Offering data updated successfully.' });
    } catch (error) {
        res.status(500).json({ error });
    }
};
