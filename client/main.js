import {Meteor} from "meteor/meteor"
import {TAPi18n} from "meteor/tap:i18n"
import "../imports/ui/components/sup"
import "../imports/ui/components/langChanger"
import "../imports/startup/client/routes"
import "../imports/ui/components/d3"
import "../imports/ui/components/surveyCreator"

Meteor.startup(() =>{
  TAPi18n.setLanguage("es");
});
