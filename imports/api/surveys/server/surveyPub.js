import {Surveys} from "../survey";

if(Surveys.find().count() == 0){
  Surveys.insert({
    questions: ["1","2","3","4","5"]
  });
}
