const fs = require('fs');
const path = require('path');
const config = require('../settings')
const {nima , commands} = require('../nima')


// Composing (Auto Typing)
nima({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});
