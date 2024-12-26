import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { Message } from "./def";

const messageModule = findByProps("sendMessage", "receiveMessage");
const uploadModule = findByProps("uploadLocalFiles");
const regex = [* `~_\-\\"'\.,]
const hasBunny = /B${regex}u${regex}n${regex}n${regex}y/i;


function modify(msg: Message) {
    var newContent = msg.content
    if (msg.content.match(hasBunny)) {
        newContent = msg.content.replaceAll(/(B)(${regex})(u)(${regex})(n)(${regex})(n)(${regex})(y)/gi, '$1$2$5$4$3$6$3$8$9'); }

	msg.content = newContent;

};

const unpatchMessage = before("sendMessage", messageModule, (args) => modify(args[1]));
const unpatchMessage2 = before("uploadLocalFiles", uploadModule, (args) => modify(args[0].parsedMessage));

export function onUnload() {
    unpatchMessage()
    unpatchMessage2
}
