const express= require("express");
const path = require("path");
const app = express();
const port= process.env.PORT || 3000 ;
const statistics= require("./src/covid")


const publicDirPath= path.join(__dirname, "/public");
app.use(express.static(publicDirPath));
 app.set("view engine","hbs");

 app.get("",(req,res)=>{
   res.render("index");
})
app.get("/statsgraphs",(req,res)=>{
  res.render("statsgraphs");
})
app.get("/statewise",(req,res)=>{
  res.render("statewise");
})
app.get("/help",(req,res)=>{
  res.render("help");
})
app.get("/p",(req,res)=>{
  res.render("nav");
})
app.get("/stats",(req,res)=>{
       statistics.stats((data1)=>{
        //  console.log(data7)
             res.send(
               {
              date_by_date: data1,
             })

       })

       

})
app.get("/state_tests_data",(req,res)=>{
  statistics.stats2((data1)=>{
    res.send(
      {
        state_tests_data:data1
      })
  })
})
app.listen(port,()=>{
    console.log("Starting the server on port " + port +"...");
})