import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.send({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid Email or Password');
	}
});

const createNewUser = asyncHandler(async (req, res) => {
	const { email, password, name } = req.body;
	const userExist = await User.findOne({ email });
	if (userExist) {
		res.status(400);
		throw new Error('User already exists');
	}

	const newUser = await User.create({
        name,
        email,
        password
    });
	if (newUser) {
        res.status(201).json({
            _id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			isAdmin: newUser.isAdmin,
			token: generateToken(newUser._id),
        });
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
});

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('user not found');
	}
});

export { authUser,createNewUser, getUserProfile };
