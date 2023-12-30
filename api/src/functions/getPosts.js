const { app } = require('@azure/functions');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var blobStoragePath = process.env.BLOB_STORAGE_PATH;
const listPosts = [{
        "url": `${blobStoragePath}/mkdir.md`,
        "title": "mkdir",
    }
];

app.http('getPosts', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
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
