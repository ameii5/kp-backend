const express = require('express');
const app = express();

const userRouter = require('./routes/users');

// //route untuk halaman home
// app.get('/',(req, res) => {
//   res.send('Welcome To Express');
// });
 
// //route untuk halaman about
// app.get('/about',(req, res) => {
//   res.send('This is about page');
// });
 
app.use('./namadatabase/users', userRouter);

// app.listen(3000, () => {
//   console.log('Server is running at port 3000');
// });

module.exports = app;