
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json({ limit: '1mb' }));
  res.send('Hello World');


  
  app.get('/api', async (req, res) => {
    try {
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
