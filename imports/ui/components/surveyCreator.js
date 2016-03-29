import "./surveyCreator.html"
import {Template} from "meteor/templating"
import {Surveys} from "../../api/surveys/survey"
import {Tracker} from "meteor/tracker"
import {ReactiveVar} from "meteor/reactive-var"

Template.surveyCreator.onCreated(function(){
  this.survey = new ReactiveVar();
  Tracker.autorun(()=>{
    this.survey.set(Surveys.findOne())
  })
});

Template.surveyCreator.helpers ( {
  questions(){
    // const survey = Template.instance().survey.get()
    const survey = Surveys.findOne();
    return survey ? survey.questions : [];
  }
} );

 Template.surveyCreator.events ( {
   "click #reset"(){
     Surveys.update(Template.instance().survey.get()._id,{$set: {questions: [1,2,3,4,5]}});
   }
 } );

Template.surveyCreator.onRendered ( function(){
    const drake = dragula([document.querySelector("#dragList")]);
    drake.on("drop",(el,target,source,sibling)=>{
      let dragged = parseInt(el.getAttribute("index"));
      let next = sibling ? parseInt(sibling.getAttribute("index")) : null;
      let qs = this.survey.get().questions;
      console.log(dragged,next);
      let orig = qs[dragged]

      qs.splice(dragged,1);

      if(next){
        qs.splice(next,0,orig);
      }else{
        qs.push(orig);
      }
      survey = this.survey.get();
      survey.questions = qs;
      Surveys.update(survey._id,survey);
    });
  } );
