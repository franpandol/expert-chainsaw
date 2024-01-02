const { app } = require('@azure/functions');

app.timer('generatePosts', {
    schedule: '0 0 1 * * *',
    handler: (myTimer, context) => {
        return generatePosts();
    }
});
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generatePosts() {

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.data);
    return chatCompletion.data;


}