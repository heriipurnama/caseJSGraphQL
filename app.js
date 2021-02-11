const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./src/schema/index");

const app = express();
app.use(express.json());

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: "/codesandBoxBook",
	},
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log("Now browse to http://localhost:4000" + server.graphqlPath )
);