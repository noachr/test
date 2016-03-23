import "./d3.html"
import {Template} from "meteor/templating"

Template.d3.onRendered(function() {
  const svg = d3.select("#d3insert").append("svg")
                .attr("width",500)
                .attr("height",100);

  const dataset = [ 5, 10, 15, 20, 25];

  svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("cx",(d,i)=>{return (i*50)+25;})
     .attr("cy",50)
     .attr("r",(d)=>{return d;})
     .attr("fill","yellow")
     .attr("stroke","orange")
     .attr("stroke-width",(d)=>{return d/2;});

});
