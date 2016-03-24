import "./surveyCreator.html"
import {Template} from "meteor/templating"
import {Surveys} from "../../api/surveys/survey"

Template.surveyCreator.helpers ( {
  questions(){
    return Surveys.findOne().questions;
  }
} );

 Template.surveyCreator.events ( {

 } );

Template.surveyCreator.onRendered ( ()=>{
    const drake = dragula([document.querySelector("#dragList")]);
    drake.on("drop",(el,target,source,sibling)=>{
      console.log(el);
    });
  } );
