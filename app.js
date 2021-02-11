const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const port = process.env.PORT || 4000;

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
	hello: () => {
		return "Hello world!";
	},
};


app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
