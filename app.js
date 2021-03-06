const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./src/schema/index");

const app = express();
app.use(express.json());

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection:true,
	playground:{
		settings:{
			"schema.polling.enable":false,
		}
	}

});


server.applyMiddleware({ app, path:"/todosApi" });
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/public/pages/index"));

app.listen({ port }, () =>
	console.log(`Now browse to http://localhost:${port}` )
);