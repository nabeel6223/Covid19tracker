const req= require("request");
const fs= require("fs");
const url="https://api.covid19india.org/data.json";
const url1="https://api.covid19india.org/v4/data.json"
const state_Code=[
  {
    code:"TT",
    name:"All States"
  },
  {
    code:"AN",
    name:"Andaman and Nicobar Islands"
  },
  {
    code:"AP",
    name:"Andhra Pradesh"
  },
  {
    code:"AR",
    name:"Arunachal Pradesh"
  },
  {
    code:"AS",
    name:"Assam"
  },
  {
    code:"BR",
    name:"Bihar"
  },
  {
    code:"CH",
    name:"Chandigarh"
  },
  {
    code:"CT",
    name:"Chattisgarh"
  },
  {
    code:"DL",
    name:"Delhi"
  },
  {
    code:"DN",
    name:"Dadra and Nagar Haveli and Daman and Diu"
  },
  {
    code:"GA",
    name:"Goa"
  },
  {
    code:"GJ",
    name:"Gujarat"
  },
  {
    code:"HP",
    name:"Himachal Pradesh"
  },
  {
    code:"HR",
    name:"Haryana"
  },
  {
    code:"JH",
    name:"Jharkhand"
  },
  {
    code:"JK",
    name:"Jammu and Kashmir"
  },
  {
    code:"KA",
    name:"Karnataka"
  },
  {
    code:"KL",
    name:"Kerala"
  },
  {
    code:"LA",
    name:"Ladakh"
  },
  {
    code:"LD",
    name:"Lakshadweep"
  },
  {
    code:"MH",
    name:"Maharashtra"
  },
  {
    code:"ML",
    name:"Meghalaya"
  },
  {
    code:"MN",
    name:"Manipur"
  },
  {
    code:"MP",
    name:"Madhya Pradesh"
  },
  {
    code:"MZ",
    name:"Mizoram"
  },
  {
    code:"NL",
    name:"Nagaland"
  },
  {
    code:"OR",
    name:"Odisha"
  },
  {
    code:"PB",
    name:"Punjab"
  },
  {
    code:"KL",
    name:"Kerala"
  },
  {
    code:"PY",
    name:"Puducherry"
  },
  {
    code:"RJ",
    name:"Rajasthan"
  },
  {
    code:"SK",
    name:"Sikkim"
  },
  {
    code:"TG",
    name:"Telangana"
  },
  {
    code:"TN",
    name:"Tamil Nadu"
  },
  {
    code:"TR",
    name:"Tripura"
  },
  {
    code:"UP",
    name:"Uttar Pradesh"
  },
  {
    code:"UT",
    name:"Uttarakhand"
  },
  {
    code:"WB",
    name:"West Bengal"
  }
]

const statistics=(callback)=>{
req({url:url, json:true},(error,response)=>{


    // const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    // const d=new Date();
    // d.setDate(d.getDate()-1);
    // const date=d.getDate();
    // const month=d.getMonth();
    // const year=d.getFullYear();
    // var confirmed,deceased,active,recovered,total_vaccines_administered,total_samples_tested;
    // // var states=[];
    var datebydate=[];
    // const fullDate=date + " " + Months[month] + " ";
    // // console.log(fullDate);
    // x=response.body.tested.length-1
    // if(response.body.tested[x].totaldosesadministered=="")
    //     x--;
    //        confirmed=response.body.cases_time_series[response.body.cases_time_series.length-1].totalconfirmed;
    //        deceased=response.body.cases_time_series[response.body.cases_time_series.length-1].totaldeceased;
    //        recovered=response.body.cases_time_series[response.body.cases_time_series.length-1].totalrecovered;
    //        total_vaccines_administered=response.body.tested[x].totaldosesadministered;
    //        total_samples_tested=response.body.tested[x].totalsamplestested;
    //        active=(confirmed-deceased-recovered).toString();


       
    //  for(var i=1;i<response.body.statewise.length;i++)
    //     {
    //       // var total_tested=func(response.body.statewise.state)
    //       states.push({
    //           confirmed:response.body.statewise[i].confirmed,
    //           deceased:response.body.statewise[i].deaths,
    //           recovered:response.body.statewise[i].recovered,
    //           active:response.body.statewise[i].active,
    //           statename:response.body.statewise[i].state
    //       })
    //     }
      var a=response.body.cases_time_series.length-30; var j=0;
      var b=response.body.tested.length-30
      while(j!=30){
        datebydate.push({
          confirmed:response.body.cases_time_series[a].totalconfirmed,
          deceased:response.body.cases_time_series[a].totaldeceased,
          recovered:response.body.cases_time_series[a].totalrecovered,
          active:(response.body.cases_time_series[a].totalconfirmed-response.body.cases_time_series[a].totaldeceased-response.body.cases_time_series[a].totalrecovered).toString(),
          total_vaccines_administered:response.body.tested[b].totaldosesadministered,
          total_samples_tested:response.body.tested[b].totalsamplestested,
          date:response.body.cases_time_series[a].date
        })
        j++;
        a++;
        b++;
      }


       callback(datebydate);
});
}




const statistics2=(callback)=>{
  req({url:url1, json:true},(error,response)=>{
    // console.log(response.body.states_tested_data[3])
    var states_data=[]
    for(var i=0;i<state_Code.length;i++)
    {
      var active=response.body[state_Code[i].code].total.confirmed-response.body[state_Code[i].code].total.recovered-response.body[state_Code[i].code].total.deceased
      if(response.body[state_Code[i].code].total.other)
            active-=response.body[state_Code[i].code].total.other
       states_data.push(
         {
           state_code:state_Code[i].code,
           statename:state_Code[i].name,
           confirmed:(response.body[state_Code[i].code].total.confirmed).toString(),
           deceased:(response.body[state_Code[i].code].total.deceased).toString().toString(),
           recovered:(response.body[state_Code[i].code].total.recovered).toString(),
           active:(active).toString(),
           total_samples_tested:(response.body[state_Code[i].code].total.tested).toString(),
           total_vaccines_administered:(response.body[state_Code[i].code].total.vaccinated).toString(),  
           last_updated:(response.body[state_Code[i].code].meta.last_updated).toString()         
         }
       )
    }
    // console.log(response.body["AN"])
// console.log(states)
callback(states_data)
  })
}


module.exports={
  stats:statistics,
  stats2:statistics2
}
