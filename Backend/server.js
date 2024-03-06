import app from './app.js';
import connectionToDB from './configs/Dbconnection.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectionToDB()
  console.log(`App is running at http://localhost:${PORT}`);
});
