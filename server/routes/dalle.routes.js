import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
    });

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });
    console.log("OpenAI API Response:", response);
    // Check if response and response.data are defined and response.data.data is an array
    if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
      const image = response.data[0].b64_json;
      res.status(200).json({ photo: image });
    } else {
      // Handle the case where the data isn't in the expected format
      console.error('Unexpected response structure:', response);
      res.status(500).json({ message: "Unexpected response structure from API" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong in processing the image." });
  }
});

export default router;