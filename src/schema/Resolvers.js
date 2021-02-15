const bcrypt = require("bcrypt");
const getToken = require("../helpers/token");

const {
	writer,
	book,
	categorie,
	user,
	todo,
	todos_item,
} = require("../db/models");

const resolvers = {
	Query: {
		hello: () => "He!",
		profileAuthor: () => ({
			name: "heriipurnama",
			addr: "German",
		}),

		writers: () => writer.findAll(),
		books: () => book.findAll(),
		categories: () => categorie.findAll(),

		writerById: async (root, { id }) => {
			let res = await writer.findByPk(id, {
				include: book,
			});
			return res;
		},
	},
	Mutation: {
		createCategory: async (root, { category }) => {
			let result = await categorie.create({ category });
			return result;
		},
		updateCategory: async (root, { id, category }) => {
			let result = await categorie.update(
				{ category },
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await categorie.findByPk(id);
			return resultUpdate;
		},
		deleteCategory: async (root, { id }) => {
			let resultDelete = await categorie.findByPk(id);
			let result = await categorie.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},

		createWriter: async (root, { full_name, email, photo }) => {
			let result = await writer.create({ full_name, email, photo });
			return result;
		},
		updateWriter: async (root, { id, full_name, email, photo }) => {
			let result = await writer.update(
				{ full_name, email, photo },
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await writer.findByPk(id);
			return resultUpdate;
		},
		deleteWriter: async (root, { id }) => {
			let resultDelete = await writer.findByPk(id);
			let result = await writer.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},

		createBook: async (
			root,
			{ writer_id, category_id, title, description, photo }
		) => {
			let result = await book.create({
				writer_id,
				category_id,
				title,
				description,
				photo,
			});
			return result;
		},
		updateBook: async (
			root,
			{ id, writer_id, category_id, title, description, photo }
		) => {
			let result = await book.update(
				{ writer_id, category_id, title, description, photo },
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await book.findByPk(id);
			return resultUpdate;
		},
		deleteBook: async (root, { id }) => {
			let resultDelete = await book.findByPk(id);
			let result = await book.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},

		// Handle user
		signupAdmin: async (_, { username, email, password, role }) => {
			let result = await user.create({
				username,
				email,
				password: await bcrypt.hash(password, 10),
				role,
			});
			return result;
		},
		signupGuest: async (_, { username, email, password }) => {
			let result = await user.create({
				username,
				email,
				password: await bcrypt.hash(password, 10),
				role: "Guest",
			});
			return result;
		},
		signin: async (_, { username, password }) => {
			const restUsers = await user.findOne({ where: { username } });

			if (!restUsers) {
				throw new Error("No user with that username");
			}

			const valid = await bcrypt.compare(password, restUsers.password);

			if (!valid) {
				throw new Error("Incorrect password");
			}

			const token = await getToken(restUsers);
			return { token: token };
		},

		// create todo
		createTodo: async (_, { userId, title, description }) => {
			let resultTodo = await todo.create({
				user_id: userId,
				title,
				description,
			});

			let todoId = resultTodo.id;
			let todoDescription = resultTodo.description;

			await todos_item.create({
				todos_id: todoId,
				description: todoDescription,
			});

			return resultTodo;
		},
		updateTodo: async (
			root,
			{ id, userId, title, description }
		) => {
			await todo.update(
				{ user_id:userId, title, description },
				{
					where: {
						id: id,
					},
				}
			);

			await todos_item.update(
				{ todos_id:id, description},
				{ where : {
					todos_id:id
				}
				}
			);
			let resultUpdate = await todo.findByPk(id);
			return resultUpdate;
		},
		deleteTodo: async (root, { id }) => {
			let resultDelete = await todo.findByPk(id);
	
			await todo.destroy({
				where: {
					id: id,
				},
			});
			await todos_item.destroy({
				where: {
					todos_id: id
				}
			});
			return resultDelete;
		},
	},
};

module.exports = resolvers;
