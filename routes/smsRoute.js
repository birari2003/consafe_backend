// // Required modules
// const twilio = require('twilio');
// const express = require('express');
// const router = express.Router();

// // Twilio credentials
// const  Sid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
// const client = twilio(Sid, authToken);

// // Route to send SMS
// router.post('/api/send-employee-sms', async (req, res) => {
//   const { phone, name, password } = req.body;

//   if (!phone || !password || !name) {
//     return res.status(400).json({ success: false, message: 'Missing data' });
//   }

//   const messageBody = `Hi ${name}, your account has been created.\nPassword: ${password}\nMilkMate`;

//   try {
//     await client.messages.create({
//       body: messageBody,
//       from: twilioPhone,
//       to: `+91${phone}` // ensure country code
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error('SMS error:', error);
//     res.status(500).json({ success: false, message: 'Failed to send SMS' });
//   }
// });

// module.exports = router;
