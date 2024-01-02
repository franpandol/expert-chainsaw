const { app } = require('@azure/functions');

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
app.http('generatePostsEndpoint', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        text = generatePosts();
        return { body: `${text}!` };
    }
});