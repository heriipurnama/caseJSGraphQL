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
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/public/pages/index"));

app.listen({ port }, () =>
	console.log(`Now browse to http://localhost:${port}` + server.graphqlPath )
);