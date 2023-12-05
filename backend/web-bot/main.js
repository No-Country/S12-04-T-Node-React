import express from "express";
import "dotenv/config.js";
import { OpenAI } from "openai";
import {createAssistant} from "./functions.js";


// Start Express app
const app = express();
const port = process.env.PORT || 8080;

// Init client
const client = new OpenAI({
    key:
        process.env.OPENAI_API_KEY
});

// Create new assistant or load existing
const assistantId = createAssistant(client);

// Start conversation thread
app.get("/start", (req, res) => {
    console.log("Starting a new conversation..."); // Debugging line
    const thread = client.beta.threads.create();
    console.log(`New thread created with ID: ${thread.id}`); // Debugging line
    res.json({ thread_id: thread.id });
});

// Generate response
app.post("/chat", express.json(), (req, res) => {
    const { thread_id, message } = req.body;

    if (!thread_id) {
        console.log("Error: Missing thread_id"); // Debugging line
        return res.status(400).json({ error: "Missing thread_id" });
    }

    console.log(`Received message: ${message} for thread ID: ${thread_id}`); // Debugging line

    // Add the user's message to the thread
    client.beta.threads.messages.create({
        thread_id,
        role: "user",
        content: message,
    });

    // Run the Assistant
    let run;
    (async () => {
        run = await client.beta.threads.runs.create({
            thread_id,
            assistant_id: assistantId,
        });

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
