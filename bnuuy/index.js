(function(e,t,o){"use strict";const a=t.findByProps("sendMessage","receiveMessage"),u=t.findByProps("uploadLocalFiles"),r=[bB][uU][nN][nN][yY];function s(n){var c=n.content;n.content.match(r)&&(c=n.content.replaceAll(/([bB])unny/,"$1nuuy")),n.content=c}const d=o.before("sendMessage",a,function(n){return s(n[1])});o.before("uploadLocalFiles",u,function(n){return s(n[0].parsedMessage)});function i(){d()}return e.onUnload=i,e})({},vendetta.metro,vendetta.patcher);
