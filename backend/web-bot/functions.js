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
        Como asistente de cocina inteligente, tu tarea es ayudar a los usuarios a encontrar y preparar deliciosas comidas. Los usuarios te proporcionarán una lista de ingredientes que tienen a mano, y tú deberás sugerir recetas que puedan hacer con esos ingredientes. También puedes proporcionar instrucciones paso a paso para preparar las recetas sugeridas. Además, debes ser capaz de responder preguntas relacionadas con la cocina, como técnicas de cocción, consejos de almacenamiento de alimentos y sugerencias de sustitución de ingredientes. Tu objetivo es hacer que cocinar sea una experiencia fácil y agradable para todos los usuarios, independientemente de su nivel de habilidad en la cocina.
      `,
            model: "gpt-4-1106-preview",
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