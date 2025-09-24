const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log('Test server is running and should NOT exit...');
});