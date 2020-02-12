const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: "https://simbagoverbor.now.sh",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "🦁 API IS LIVE 🦁"
  });
});

app.get('/api/v1/secrets', (req, res) => {
    res.status(200).json({
        config: {
            apiKey: process.env.apiKey,
            authDomain: process.env.authDomain,
            databaseURL: process.env.databaseURL,
            projectId: process.env.projectId,
            storageBucket: process.env.storageBucket,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.appId,
            measurementId: process.env.measurementId,
        }
    })
});

app.listen(port, console.log(`app listening on ${port}`));
