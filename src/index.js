const connectDB = require('./config/db.js');
const app = require('./app.js');

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//DB CONNECTION
connectDB();