import { NextFunction, Request, Response } from 'express';
import { User } from '../../models/userModel';

export const getUserById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = String(req.params['id']);
	if (!id) {
		return res.status(400).json({
			success: false,
			message: 'bad request',
		});
	}
	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		} else {
			return res.status(200).json({
				success: true,
				message: 'get user successful',
				user: {
					id: user._id.toString(),
					name: user.name,
					email: user.email,
					profileImage: user.profileImage,
					role: user.role,
					status: user.status,
					activities: user.activities,
					createdAt: user.createdAt,
				},
			});
		}
	} catch (error) {
		// console.log(error);
		return res.status(422).json({
			success: false,
			message: 'unprocessible',
		});
	}
};
