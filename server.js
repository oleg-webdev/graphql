import express from 'express';
import favicon from 'serve-favicon';
import graphQLHTTP from 'express-graphql';
import schema from './schema';

const app = express();
app.use(favicon(__dirname + '/favicon.ico'));

app.use(graphQLHTTP({
  schema,
  graphiql: true,
}));

app.listen(5000, () => {
  console.log('⭐⭐⭐ Server ready at http://localhost:5000 ⭐⭐⭐')
});