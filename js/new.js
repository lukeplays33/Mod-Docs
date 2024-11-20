import { settings } from "../assets/jsonFiles/supportSettings.js";

let server = document.getElementById('server');

server.setAttribute('server', settings.server.serverID);
server.setAttribute('channel', settings.server.channelID);