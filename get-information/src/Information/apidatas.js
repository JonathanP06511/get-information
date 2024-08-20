const express = require('express');
const router = express.Router();
const fetch = (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { User } = require('../models');

router.get('/:item_valueid', async (req, res) => {
    const { item_valueid } = req.params;

    try {
        const user = await User.findOne({
            where: {
                idusers: item_valueid
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const decryptmail = await fetch(`http://localhost:4017/apidecrypt/${user.mail}`);
        if (!decryptmail.ok) {
            throw new Error('Failed to fetch decrypted email');
        }

        const mail = await decryptmail.json();
        user.mail = mail;

        res.status(200).json(user);
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
