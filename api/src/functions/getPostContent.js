const { app } = require('@azure/functions');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var blobStoragePath = process.env.BLOB_STORAGE_PATH;
const listPosts = [{
        "url": `${blobStoragePath}/mkdir.md`,
        "title": "mkdir",
    }
];

app.http('getPostContent', {
    methods: ['GET', ],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // handle url params
        console.log("blobStoragePath")
        console.log(blobStoragePath)
        const url = new URL(request.url);
        const title = url.searchParams.get("title");
        context.log(`Received request for title: "${title}"`);

        // find post
        var content = "";
        for (const post of listPosts) {
            if (post.title == title) {
                context.log(post.url)
                const response = await fetch(post.url);
                content = await response.text();
                context.log(content);
                break;
            }
        }
        
        return {
            status: 200,
            body: JSON.stringify(content), // Flatten the array and stringify it
            headers: {
                'Content-Type': 'application/json', // Explicitly set the content type
            },
        };
    }
});