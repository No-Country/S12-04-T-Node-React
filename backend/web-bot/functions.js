const fs = require("fs");

async function createAssistant(client) {
    const assistantFilePath = "assistant.json";

    if (fs.existsSync(assistantFilePath)) {
        const assistantData = JSON.parse(
            fs.readFileSync(assistantFilePath, "utf-8")
        );
        const assistantId = assistantData.assistant_id;
        console.log("Loaded existing assistant ID.");
        return assistantId;
    } else {
        const file = await client.files.create({
            file: fs.createReadStream("knowledge.docx"),
            purpose: "assistants",
        });

        const assistant = await client.beta.assistants.create({
            instructions: `
        The assistant, Smith's Solar Sales Assistant, has been programmed to help junior sales reps with learning company standard operating procedures and selling techniques as a salesperson.
        A document has been provided with information on Smith's solar sales processes and training info.
      `,
            model: "gpt-3.5-turbo-0301",
            tools: [{ type: "retrieval" }],
            file_ids: [file.id],
        });

        fs.writeFileSync(
            assistantFilePath,
            JSON.stringify({ assistant_id: assistant.id })
        );
        console.log("Created a new assistant and saved the ID.");

        return assistant.id;
    }
}

module.exports = {
    createAssistant,
};
