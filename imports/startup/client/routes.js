import {FlowRouter} from "meteor/kadira:flow-router"
import {BlazeLayout} from "meteor/kadira:blaze-layout"

import "../../ui/layouts/mainLayout.html"

FlowRouter.route("/",{
	action(){
		BlazeLayout.render("mainLayout",{main: "surveyCreator"})
	}
});
