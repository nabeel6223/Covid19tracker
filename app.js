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

app.get("/stats",(req,res)=>{
       statistics.stats((data1,data2,data3,data4,data5,data6)=>{
             res.send(
               {
               total:{
               confirmed:data1,
               deceased:data2,
               recovered:data3,
               active:data4, 
              },
              date_by_date: data6,
              statewise: data5
             })

       })

       

})
app.listen(port,()=>{
    console.log("Starting the server on port " + port +"...");
})