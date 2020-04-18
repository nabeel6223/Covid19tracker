const req= require("request");
const fs= require("fs");
const url="https://api.covid19india.org/data.json";

const statistics=(callback)=>{
req({url:url, json:true},(error,response)=>{


    const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d=new Date();
    d.setDate(d.getDate() - 1)
    const date=d.getDate();
    const month=d.getMonth();
    const year=d.getFullYear();
    var confirmed,deceased,active,recovered;
    var states=[];
    var datebydate=[];
    const fullDate=date + " " + Months[month] + " ";
    // console.log(fullDate);
    for(var i=0;i<response.body.cases_time_series.length;i++)
       if(response.body.cases_time_series[i].date == fullDate){
           confirmed=response.body.cases_time_series[i].totalconfirmed;
           deceased=response.body.cases_time_series[i].totaldeceased;
           recovered=response.body.cases_time_series[i].totalrecovered;
           active=(confirmed-deceased-recovered).toString();
       }
       states.push({
        confirmed:confirmed,
        deceased:deceased,
        recovered:recovered,
        active:active,
        statename:"All States"
       })
     for(var i=1;i<response.body.statewise.length;i++)
        {
          states.push({
              confirmed:response.body.statewise[i].confirmed,
              deceased:response.body.statewise[i].deaths,
              recovered:response.body.statewise[i].recovered,
              active:response.body.statewise[i].active,
              statename:response.body.statewise[i].state
          })
        }
      var a=response.body.cases_time_series.length-14; var j=0;
      while(j!=14){
        datebydate.push({
          confirmed:response.body.cases_time_series[a].totalconfirmed,
          deceased:response.body.cases_time_series[a].totaldeceased,
          recovered:response.body.cases_time_series[a].totalrecovered,
          active:(confirmed-deceased-recovered).toString(),
          date:response.body.cases_time_series[a].date
        })
        j++;
        a++;

      }

       callback(confirmed,deceased,recovered,active,states,datebydate);
});
}

module.exports={
  stats:statistics
}