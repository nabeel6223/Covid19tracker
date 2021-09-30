var d=new Date();
const datapoints=[];
var data_con=[];
var data_rec=[];
var data_act=[];
var data_dec=[];
var data_tests=[];
var data_vac=[];
var j=0;
const extra=document.querySelector(".extra");
var dat=document.querySelector(".date");
var Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
fetch("/stats").then((response)=>{
  response.json().then((data)=>{
d.setDate(d.getDate() -31);  
for(var i=0;i<=29;i++)
    {
    d.setDate(d.getDate() + 1);
    const date=d.getDate();
    const month=d.getMonth();
    const year=d.getFullYear();
    const fullDate=date + " " + Months[month] + " ";
    // console.log(fullDate)
    datapoints.push(fullDate)
    data_con[i]=(parseInt(data.date_by_date[i].confirmed))
    data_rec[i]=(parseInt(data.date_by_date[i].recovered))
    data_act[i]=(parseInt(data.date_by_date[i].active))
    data_dec[i]=(parseInt(data.date_by_date[i].deceased))
    data_tests[i]=(parseInt(data.date_by_date[i].total_samples_tested))
    data_vac[i]=(parseInt(data.date_by_date[i].total_vaccines_administered))
    // console.log(datapoints.length)
    }
    func()
  })
  })



// document.querySelector("#myChart").style.height="10px"


// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.querySelector("#myChart").style.height="10px"
//     } 
//   }
  
//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes

// var array=["24 April ", "25 April ", "26 April ", "27 April ", "28 April ", "29 April ", "30 April ", "1 May ", "2 May ", "3 May ", "4 May ", "5 May ", "6 May ", "7 May "]
// var array1=[13057872, 13202817, 13355382, 13525296, 13686134, 13871431, 14071015, 14287843, 14521845, 14782740, 15057803, 15314806, 15609171, 15924906]

function func(){
    var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container1',
          // marginLeft:200,        
        },
        title:{
          text:'Confirmed Cases',
          style: {
            color: 'rgb(199, 35, 29)',
            font: 'bold 26px "Trebuchet MS", Montserrat, sans-serif',
        },
        },
    yAxis:{
      title:{
        text:"Cases"
      }
    },
        xAxis: {
          categories: datapoints,
          title:{
            text:" ",
            style:{
              font: '10px Trebuchet MS, Verdana, sans-serif',
            },
          },

          labels: {
            rotation: 90
          }
        },
        series: [{
          data: data_con ,
          name:"",
          color:'rgb(199, 35, 29)'
        }]
      });
 
      

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container2',
          // marginLeft:200,        
        },
        title:{
          text:'Active Cases',
          style: {
            color: 'rgb(29, 117, 199)',
            font: 'bold 26px "Trebuchet MS", Montserrat, sans-serif',
        },
        },
    yAxis:{
      title:{
        text:"Cases"
      }
    },
        xAxis: {
          categories: datapoints,
          title:{
            text:" ",
            style:{
              font: '10px Trebuchet MS, Verdana, sans-serif',
            },
          },

          labels: {
            rotation: 90
          }
        },
        series: [{
          data: data_act ,
          name:"",
          color:'rgb(29, 117, 199)'
        }]
      });



      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container3',
          // marginLeft:200,        
        },
        title:{
          text:'Recovered Cases',
          style: {
            color: 'rgb(29, 199, 94)',
            font: 'bold 26px "Trebuchet MS", Montserrat, sans-serif',
        },
        },
    yAxis:{
      title:{
        text:"Cases"
      }
    },
        xAxis: {
          categories: datapoints,
          title:{
            text:" ",
            style:{
              font: '10px Trebuchet MS, Verdana, sans-serif',
            },
          },

          labels: {
            rotation: 90
          }
        },
        series: [{
          data: data_rec ,
          name:"",
          color:'rgb(29, 199, 94)'
        }]
      });

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container4',
          // marginLeft:200,        
        },
        title:{
          text:'Deceased Cases',
          style: {
            color: 'rgb(94, 90, 90)',
            font: 'bold 26px "Trebuchet MS", Montserrat, sans-serif',
        },
        },
    yAxis:{
      title:{
        text:"Cases"
      }
    },
        xAxis: {
          categories: datapoints,
          title:{
            text:" ",
            style:{
              font: '10px Trebuchet MS, Verdana, sans-serif',
            },
          },

          labels: {
            rotation: 90
          }
        },
        series: [{
          data: data_dec ,
          name:"",
          color:'rgb(94, 90, 90)'
        }]
      });


      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container4',
          // marginLeft:200,        
        },
        title:{
          text:'Deceased Cases',
          style: {
            color: 'rgb(94, 90, 90)',
            font: 'bold 26px "Trebuchet MS", Montserrat, sans-serif',
        },
        },
    yAxis:{
      title:{
        text:"Cases"
      }
    },
        xAxis: {
          categories: datapoints,
          title:{
            text:" ",
            style:{
              font: '10px Trebuchet MS, Verdana, sans-serif',
            },
          },

          labels: {
            rotation: 90
          }
        },
        series: [{
          data: data_dec ,
          name:"",
          color:'rgb(94, 90, 90)'
        }]
      });


      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container5',
          // marginLeft:200,        
        },
        title:{
          text:'Tested',
          style: {
            color: '#9673b9',
            font: 'bold 26px "Trebuchet MS", Montserrat, sans-serif',
        },
        },
    yAxis:{
      title:{
        text:"Tests"
      }
    },
        xAxis: {
          categories: datapoints,
          title:{
            text:" ",
            style:{
              font: '10px Trebuchet MS, Verdana, sans-serif',
            },
          },

          labels: {
            rotation: 90
          }
        },
        series: [{
          data: data_tests ,
          name:"",
          color:'#9673b9'
        }]
      });      


      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container6',
          // marginLeft:200,        
        },
        title:{
          text:'Vaccines Doses Administered',
          style: {
            color: 'rgba(219, 89, 133, 0.822)',
            font: 'bold 26px "Trebuchet MS", Montserrat, sans-serif',
        },
        },
    yAxis:{
      title:{
        text:"Vaccine Doses"
      }
    },
        xAxis: {
          categories: datapoints,
          title:{
            text:" ",
            style:{
              font: '10px Trebuchet MS, Verdana, sans-serif',
            },
          },

          labels: {
            rotation: 90
          }
        },
        series: [{
          data: data_vac ,
          name:"",
          color:'rgba(219, 89, 133, 0.822)'
        }]
      });



}
// var fruits = []
//   fruits.push('banana', 'apple', 'peach')

//   console.log(fruits.length)
//   console.log(datapoints.length)
//   console.log(array.length)

//   setTimeout(function() { chart.update(); },1000);