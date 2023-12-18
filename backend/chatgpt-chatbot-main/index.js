import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let chatHistory = [];

app.get("/start", (req, res) => {
    chatHistory = [];
    // Agrega un mensaje inicial antes de que el usuario comience a escribir
    const initialMessage = `
       "¡Hola! Soy CookGTP, tu asistente de cocina inteligente. Estoy aquí para ayudarte con recetas y consejos culinarios. Solo responderé preguntas relacionadas con alimentos y cocina. Si surge algo fuera de esos temas, indicaré que no puedo ayudar.
       INSTRUCCIONES: Proporcióname al menos tres ingredientes de plantas legales, asegurándote de que los nombres sean culturalmente apropiados y cumplan con las leyes locales. Te sugeriré recetas basadas en esos ingredientes y proporcionaré instrucciones paso a paso. También, responderé a preguntas sobre técnicas de cocción, almacenamiento y sustituciones.
       RESTRICCIONES: Solo acepto ingredientes de plantas legales; se excluyen sustancias prohibidas, como drogas ilegales. Ignoraré elementos no relacionados o nocivos. Haremos que cocinar sea fácil y agradable para todos, sin importar su habilidad culinaria."
    `;
    chatHistory.push(["assistant", initialMessage]);
    res.send("Chat iniciado");
});

app.post("/message", async (req, res) => {
    const userInput = req.body.message;

    try {
        const messages = chatHistory.map(([role, content]) => {
            if (content === null) {
                content = "";
            }
            return {
                role,
                content,
            };
        });

        messages.push({ role: "user", content: userInput });

        const completion = await openai.chat.completions.create({
            model: "gpt-4-1106-preview",
            messages: messages,
        });

        const completionText = completion.choices[0].message.content;

        chatHistory.push(["user", userInput]);
        chatHistory.push(["assistant", completionText]);

        res.json({ message: completionText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Algo salió mal" });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

/*import OpenAI from "openai";
import readlineSync from "readline-sync";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});
async function main() {
    console.log(colors.bold.green("Welcome to the Chatbot Program!"));
    console.log(colors.bold.green("You can start chatting with the bot."));

    const chatHistory = []; // Store conversation history

    while (true) {
        const userInput = readlineSync.question(colors.yellow("You: "));

        try {
            // Construct messages by iterating over the history
            const messages = chatHistory.map(([role, content]) => ({
                role,
                content,
            }));

            // Add latest user input
            messages.push({ role: "user", content: userInput });

            // Call the API with user input & history
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: messages,
            });

            // Get completion text/content
            const completionText = completion.choices[0].message.content;

            if (userInput.toLowerCase() === "exit") {
                console.log(colors.green("Bot: ") + completionText);
                return;
            }

            console.log(colors.green("Bot: ") + completionText);

            // Update history with user input and assistant response
            chatHistory.push(["user", userInput]);
            chatHistory.push(["assistant", completionText]);
        } catch (error) {
            console.error(colors.red(error));
        }
    }
}

main();
*/
