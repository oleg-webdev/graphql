import express from 'express';
// import fetch from 'node-fetch';
import favicon from 'serve-favicon';
import graphQLHTTP from 'express-graphql';
import schema from './schema';

const app = express();
app.use('/', favicon(__dirname + '/favicon.ico'));

// const users = fetch('https://randomuser.me/api/');
// users
//   .then((res) => res.text())
//   .then(body => console.log(body))


app.use(graphQLHTTP({
  schema,
  graphiql: true,
}));

app.listen(5000, () => {
  console.log(
    '\x1b[36m%s\x1b[0m',
    '⭐⭐⭐ Server ready at http://localhost:5000 ⭐⭐⭐'
  )
});
