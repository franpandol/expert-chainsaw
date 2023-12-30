const { app } = require('@azure/functions');

const listPosts = [{
        "title": "mkdir",
    }
];

app.http('getPosts', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        console.log("blobStoragePath")
        console.log(blobStoragePath)
        context.log(`Http function processed request for url "${request.url}"`);

        const titles = [];
        for (const post of listPosts) {
            titles.push(post.title);
        }
        return {
            status: 200,
            body: JSON.stringify(titles), // Flatten the array and stringify it
            headers: {
                'Content-Type': 'application/json', // Explicitly set the content type
            },
        };
    }
});
