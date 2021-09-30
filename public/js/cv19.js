var d=new Date();
const datapoints=[];

var j=0;
const extra=document.querySelector(".extra");
var dat=document.querySelector(".date");
var select=document.querySelector("select");
const dt=document.querySelector(".dt")
const res=document.querySelector(".res")


fetch("/stats").then((response)=>{
  response.json().then((data)=>{

    document.getElementById("count6").textContent=addCommas(data.date_by_date[0].confirmed-data.date_by_date[1].confirmed)
    document.getElementById("count7").textContent=addCommas(data.date_by_date[0].recovered-data.date_by_date[1].recovered)
    document.getElementById("count8").textContent=addCommas(data.date_by_date[0].deceased-data.date_by_date[1].deceased)
    
  })
})






fetch("/state_tests_data").then((response)=>{
    response.json().then((data)=>{
                     res.innerHTML=data.state_tests_data[0].statename
                    dt.innerHTML="Confirmed: " + addCommas(data.state_tests_data[0].confirmed)+
                    "<br>Recovered: " + addCommas(data.state_tests_data[0].recovered) + 
                    "<br>Active: " + addCommas(data.state_tests_data[0].active) +
                    "<br>Deceased: " + addCommas(data.state_tests_data[0].deceased)                                 
         

    })
})
var Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
fetch("/state_tests_data").then((response)=>{
  response.json().then((data)=>{
    var upd_date=data.state_tests_data[0].last_updated.substring(0,10)
    var upd_time=data.state_tests_data[0].last_updated.substring(11,16)
    document.getElementById("count1").textContent=addCommas(data.state_tests_data[0].confirmed)
    document.getElementById("count2").textContent=addCommas(data.state_tests_data[0].active)
    document.getElementById("count3").textContent=addCommas(data.state_tests_data[0].recovered)
    document.getElementById("count4").textContent=addCommas(data.state_tests_data[0].deceased)
    document.getElementById("count5").textContent=addCommas(data.state_tests_data[0].total_vaccines_administered)
   dat.textContent="Updated on " + upd_date + " " + upd_time + " IST"
d.setDate(d.getDate() -31);  
for(var i=0;i<=29;i++)
    {
    d.setDate(d.getDate() + 1);
    const date=d.getDate();
    const month=d.getMonth();
    const year=d.getFullYear();
    // dat.textContent="Updated till " + date + " "  + Months[month] +" " + year ;
    // const fullDate=date + " " + Months[month] + " ";
    }
  })
  })

  select.addEventListener("change",()=>{
    fetch("/state_tests_data").then((response)=>{
    response.json().then((data)=>{
        for(var i=0;i<=data.state_tests_data.length-1;i++){
            if(select.options[select.selectedIndex].text==(data.state_tests_data[i].statename)){
                     res.innerHTML=data.state_tests_data[i].statename
                    dt.innerHTML="Confirmed: " + addCommas(data.state_tests_data[i].confirmed)+
                    "<br>Recovered: " + addCommas(data.state_tests_data[i].recovered) + 
                    "<br>Active: " + addCommas(data.state_tests_data[i].active) +
                    "<br>Deceased: " + addCommas(data.state_tests_data[i].deceased)                                 
                     break; }
         }

    })
})
  })

  function addCommas(num) {

    var nfObject = new Intl.NumberFormat('en-IN');
    var output = nfObject.format(num);
  
    return output

  }

  $(document).ready(function(){
    $(this).scrollTop(0);
    });