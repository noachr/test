import "./langChanger.html"
import {TAPi18n} from "meteor/tap:i18n"
import {Template} from "meteor/templating"

Template.langChanger.events({
  'click .langLink'(e){
    TAPi18n.setLanguage(e.currentTarget.lang);
  }
});

Template.langChanger.helpers({
  langList: [{code: "en", name:"English"},{code: "es", name: "Spanish"}],
  isCurrentLang(lang){
    return lang == TAPi18n.getLanguage();
  }
});
