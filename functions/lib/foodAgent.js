"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_on_google_1 = require("actions-on-google");
const functions = require("firebase-functions");
//import { convert } from "actions-on-google/dist/service/actionssdk";
const app = actions_on_google_1.dialogflow();
app.intent("Default Welcome Intent", (conv) => {
    conv.ask("Hi, I'm Tayyab Siddiqui");
    conv.ask(new actions_on_google_1.Suggestions(['Educational Experience', "Professional Experience", "Skills", "Business Card"]));
});
app.intent("Educational Experience", (conv) => {
    conv.ask(new actions_on_google_1.SimpleResponse("I'm an Electronic Engineer graduated from NED University in 2016"));
    conv.ask(new actions_on_google_1.Suggestions(["Professional Experience", "Skills", "Business Card"]));
    // conv.ask(new Suggestions("Professional Experience"));
});
app.intent("Professional Experience", (conv) => {
    const text1 = "Currently working as a IoT Engineer.\n4 years of experience in development of IoT devices and systems as well as voice computing.\n1 year of experience in developing actions on google.\nAlso I have expertise in embedded systems";
    conv.ask(text1);
    conv.ask(new actions_on_google_1.Suggestions(["Educational Experience", "Skills", "Business Card"]));
    // conv.ask(new Suggestions("Educational Experience"));
});
app.intent("Skills", (conv) => {
    const skills = "My area of expertise are: \nDialogFlow(api.ai)\nChatBot Development\nFirebase Functions\nInternet of Things\nEmbedded Systems";
    conv.ask(skills);
    conv.ask(new actions_on_google_1.Suggestions(["Educational Experience", "Professional Experience", "Business Card"]));
    // conv.ask(new Suggestions("Professional Experience"));
});
app.intent("Business Card", (conv) => {
    const card = "Name: Tayyab Siddiqui\nCell#:+92-312-2323568\nWhatsApp:+92-312-2323568\nEmail:tayyabsiddiqui@live.com\nWechat:tayyabsiddiqui19\nSkype:live:tayyabsiddiqui0990";
    conv.ask(card);
    conv.ask(new actions_on_google_1.Suggestions(["Educational Experience", "Professional Experience", "Skills"]));
});
exports.fulfillment = functions.https.onRequest(app);
//# sourceMappingURL=foodAgent.js.map