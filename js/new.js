import { settings } from "../assets/jsonFiles/supportSettings.js";

let server = document.getElementById('server');

let widgetBot = document.createElement('widgetbot');

widgetBot.setAttribute('server', settings.server.serverID);
widgetBot.setAttribute('channel', settings.server.channelID);

server.appendChild(widgetBot);