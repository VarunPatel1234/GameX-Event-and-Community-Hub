const express = require('express');
const mysql = require('mysql2');
const app = express();

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'gamex_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Get All Tournaments API
app.get('/api/tournaments', (req, res) => {
    const sql = 'SELECT * FROM tournaments';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
