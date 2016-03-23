import {Meteor} from "meteor/meteor"
import {TAPi18n} from "meteor/tap:i18n"
import "../imports/ui/components/sup"
import "../imports/ui/components/langChanger"
import "../imports/startup/client/routes"


Meteor.startup(() =>{
  TAPi18n.setLanguage("es");
});
