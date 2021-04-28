const app = require('./app');
const PORT = 4000;

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
