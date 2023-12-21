require("dotenv").config();
const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MongoAdapter = require("@bot-whatsapp/database/mongo");
const ChatGPTClass = require("./chatgpt.class");
const { PROMP } = require("./promp.js");
/**
 * Declaramos las conexiones de Mongo
 */

const MONGO_DB_URI = "mongodb://0.0.0.0:27017";
const MONGO_DB_NAME = "db_bot";

const createBotChatGpt = new ChatGPTClass();

const flowConfirmacional = addKeyword(["si confirmo","si","correcto","exacto","perfecto","seguro"]).addAnswer(
    "¿Estas seguro que quieres esta receta?"
);

const flowInicial = addKeyword([
    "Hola",
    "hola",
    "ole",
    "alo",
    "buenas",
    "dia",
    "noches",
    "tardes",
])
    .addAnswer("🙌 Hola bienvenido a *Chef-GPT*", null, async () => {
        await createBotChatGpt.handleMsgChatGPT(PROMP);
    })
    .addAnswer(
        "¿Para cuando quieres reservar la cita?",
        { capture: true },
        async (ctx, { flowDynamic, fallBack }) => {
            const response = await createBotChatGpt.handleMsgChatGPT(ctx.body);
            console.log(JSON.stringify(response, null, 2));
            const message = response.text;
            if (ctx.body.toUpperCase() !== "si confirmo") {
                await fallBack(message);
            }
        },
        [flowConfirmacional]
    );

const main = async () => {
    const adapterDB = new MongoAdapter({
        dbUri: MONGO_DB_URI,
        dbName: MONGO_DB_NAME,
    });
    const adapterProvider = createProvider(BaileysProvider);
    const adapterFlow = createFlow([flowInicial]);
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });
    QRPortalWeb();
};

main();