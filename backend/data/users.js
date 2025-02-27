import bcrypt from "bcryptjs";

const users = [
	{
		name: "Md. Najib Islam",
		email: "developernajib@gmail.com",
		password: bcrypt.hashSync("123456789", 10),
		isAdmin: true,
	},
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456789", 10),
		isAdmin: true,
	},
	{
		name: "User",
		email: "user@example.com",
		password: bcrypt.hashSync("123456789", 10),
		isAdmin: false,
	},
];

export default users;
