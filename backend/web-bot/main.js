const express = require("express");
const { OpenAI } = require("openai");
const functions = require("./functions.js");
require("dotenv").config();

// Check OpenAI version is correct
// const requiredVersion = "1.1.1";
// const currentVersion = require("openai/package.json").version;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// if (currentVersion < requiredVersion) {
//     throw new Error(
//         `Error: OpenAI version ${currentVersion} is less than the required version ${requiredVersion}`
//     );
// } else {
//     console.log("OpenAI version is compatible.");
// }

// Start Express app
const app = express();
const port = 8080;

// Init client
const client = new OpenAI({
    key: OPENAI_API_KEY,
});

// Create new assistant or load existing
const assistantId = functions.createAssistant(client);

// Start conversation thread
app.get("/start", async (req, res) => {
    console.log("Starting a new conversation..."); // Debugging line
    const thread = await client.beta.threads.create();
    console.log(`New thread created with ID: ${thread.id}`); // Debugging line
    res.json({ thread_id: thread.id });
});

// Generate response
app.post("/chat", express.json(), async (req, res) => {
    const { thread_id, content } = req.body;

    if (!thread_id) {
        console.log("Error: Missing thread_id"); // Debugging line
        return res.status(400).json({ error: "Missing thread_id" });
    }

    const text = content.text;
    console.log(`Received message: ${text} for thread ID: ${thread_id}`); // Debugging line
    
    // Add the user's message to the thread
    client.beta.threads.messages.create({
        thread_id,
        role: "user",
        content: content,
    });

    // Run the Assistant
    console.log(`thread_id: ${thread_id}`);
    let assistantId = "asst_vtmdjtAYxkYK2dKUqlyew0oY";
    console.log(`assistantId: ${assistantId}`);
    console.log(`content: ${JSON.stringify(content)}`);

    let run;
    (async () => {
        run = await client.beta.threads.runs.create({
            thread_id,
            assistant_id: assistantId,
            input: content,
        })


        // Check if the Run requires action (function call)
        while (true) {
            const runStatus = await client.beta.threads.runs.retrieve({
                thread_id,
                run_id: run.id,
            });

            console.log(`Run status: ${runStatus.status}`);
            if (runStatus.status === "completed") {
                break;
            }

            await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for a second before checking again
        }

        // Retrieve and return the latest message from the assistant
        const messages = await client.beta.threads.messages.list({
            thread_id,
        });

        const response = messages.data[0].content[0].text.value;

        console.log(`Assistant response: ${response}`); // Debugging line
        res.json({ response });
    })();
});

// Run server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
