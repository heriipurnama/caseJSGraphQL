const { writer, book, categorie } = require("../db/models");

const resolvers = {
	Query: {
		hello: () => "He!",
		users: () => ({
			name: "heriipurnama",
			addr: "German",
		}),
		writers: () => writer.findAll(),
		categories: () => categorie.findAll(),
		books: () => book.findAll(),
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
			let result = await categorie.update({ category },
				{
					where: {
						id: id,
					},
				},
				
			);
			let resultUpdate = await categorie.findByPk(id); 

			return resultUpdate;
		},
	},
};

module.exports = resolvers;
