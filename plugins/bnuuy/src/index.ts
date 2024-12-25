import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { Message } from "./def";

const messageModule = findByProps("sendMessage", "receiveMessage");
const uploadModule = findByProps("uploadLocalFiles");

function modify(msg: Message) {
var newContent = msg.content.replaceAll('([bB])unny', '$1nuuy');
}

msg.content = newContent;

const unpatchMessage = before("sendMessage", messageModule, (args) => modify(args[1]));
const unpatchMessage2 = before("uploadLocalFiles", uploadModule, (args) => modify(args[0].parsedMessage));

export function onUnload() {
    unpatchMessage()
    unpatchMessage2
}
