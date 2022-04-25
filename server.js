const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const upload = multer({});
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/views/index.html'))
);

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  res.json({ originalname: req.file.originalname, size: req.file.size });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Node.js listening ...');
});