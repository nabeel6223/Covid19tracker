var d=new Date();
var datapoints=[];
var data_con=[];
var data_rec=[];
var j=0;
const extra=document.querySelector(".extra");
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 100 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    if(current>end)
       obj.textContent = end;
    else
      obj.textContent = current;  
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
var dat=document.querySelector(".date");
const data1=document.querySelector(".data1");
const data2=document.querySelector(".data2");
const data3=document.querySelector(".data3");
const data4=document.querySelector(".data4");
var select=document.querySelector("select");
const dt=document.querySelector(".dt")
const res=document.querySelector(".res")

fetch("http://localhost:3000/stats").then((response)=>{
    response.json().then((data)=>{
                     res.innerHTML=data.statewise[0].statename
                    dt.innerHTML="Confirmed: " + data.statewise[0].confirmed+
                    "<br>Recovered: " + data.statewise[0].recovered + 
                    "<br>Active: " + data.statewise[0].active +
                    "<br>Deceased: " + data.statewise[0].deceased                                 
         

    })
})
d.setDate(d.getDate()-1);
const date2=d.getDate();
const mnth=d.getMonth();
d.setDate(d.getDate() - 14);
setTimeout(function() { myChart.update(); },1000);
setTimeout(function() { myChart1.update(); },1000);
var Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
fetch("http://localhost:3000/stats").then((response)=>{
  response.json().then((data)=>{
    const xtr=data.date_by_date[data.date_by_date.length-1].confirmed-data.date_by_date[data.date_by_date.length-2].confirmed  
    counter("count1", 0, data.total.confirmed, 10);
    counter("count2", 0, data.total.active, 10);
    counter("count3", 0, data.total.recovered, 1000);
    counter("count4", 0, data.total.deceased, 1000);
    extra.textContent="*" + xtr + " confirmed cases increases on " + date2 + " " + Months[mnth] ;
    for(var i=0;i<=13;i++)
    {
    d.setDate(d.getDate() + 1);
    const date=d.getDate();
    const month=d.getMonth();
    const year=d.getFullYear();
    dat.textContent="Till " + date + " "  + Months[month] +" " + year ;
    // var confirmed,deceased,active,recovered;
    // var states=[];
    const fullDate=date + " " + Months[month] + " ";
    datapoints.push(fullDate)
    data_con.push(data.date_by_date[i].confirmed)
    data_rec.push(data.date_by_date[i].recovered)
    }
  })
  })

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: datapoints,
        datasets: [{
            label: 'Confirmed Cases',
            data:data_con,
            borderColor: [
                "rgb(181, 76, 74)"
            ],
            borderWidth: 1
        },     
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
setTimeout(function() { myChart.update(); },1000);
setTimeout(function() { myChart1.update(); },1000);
var ctx1= document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: datapoints,
        datasets: [
        {
            label: 'Recovered Cases',
            data:data_rec,
            borderColor: [
                'rgb(33, 105, 37)'
            ],
            borderWidth: 1
        },       
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
setTimeout(function() { myChart.update(); },1000);
setTimeout(function() { myChart1.update(); },1000);
select.addEventListener("change",()=>{
    fetch("http://localhost:3000/stats").then((response)=>{
    response.json().then((data)=>{
        for(var i=0;i<=data.statewise.length-1;i++){
            if(select.options[select.selectedIndex].text==(data.statewise[i].statename)){
                     res.innerHTML=data.statewise[i].statename
                    dt.innerHTML="Confirmed: " + data.statewise[i].confirmed+
                    "<br>Recovered: " + data.statewise[i].recovered + 
                    "<br>Active: " + data.statewise[i].active +
                    "<br>Deceased: " + data.statewise[i].deceased                                 
                     break; }
         }

    })
})
  })