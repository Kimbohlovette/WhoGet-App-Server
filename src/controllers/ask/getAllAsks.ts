import { Request, Response } from 'express';

export const getAllAsks = async (req: Request, res: Response) => {
	return res.status(200).json({ success: true });
};
