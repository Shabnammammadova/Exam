const express = require('express')
const app = express()
const cors=require('cors')
const crypto=require('crypto')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

app.use(cors())
app.use(bodyParser.json())
dotenv.config()

// const PORT = 8080

const RobotSchema = new mongoose.Schema({
    name: String,
    title:String
  });

  const RobotModel = mongoose.model('Robot', RobotSchema);


app.get('/api', (req, res) => {
  res.send('Hello World!')
})



//Robot crud
//get all

app.get("/api/robot", async(req,res)=>{
const {name}=req.query
if(!name){
  const robot=await RobotModel.find()
  res.status(200).send(robot)
}
else{
const searchedRobot=RobotModel.name.toLowerCase().trim().includes(name.toLowerCase().trim())
res.status(200).send(searchedRobot)
}

})



// // get all robot
// app.get('/api/robot', (req, res) => {
//     res.status(200).send(robot);
// });

//get by id

app.get("api/robot/:id", async(req,res)=>{
    const{id}=req.params
   const robot=await RobotModel.findById(id)
   res.status(200).status(robot)
})


//delete

app.delete("api/robot/:id",async(req,res)=>{
    const id=req.params.id
    const deleteRobot=await RobotModel.findByIdAndDelete(id)
    res.status(203).send({
        message:`${deleteRobot.name} deleted succesfully`
    })
})


//post

app.post("/api/robot",async(req,res)=>{
    const{name,title}=req.body
    const newrobot=new  RobotModel({
      name:name,
      title:title
    })
   await newrobot.save()
   res.send(`${newrobot.name}posted succesfuly ` )
    
})

PORT=process.env.PORT

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})



DB_CONNECTION=process.env.DB_CONNECTION
DB_PASSWORD=process.env.DB_PASSWORD


mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD)) .then(()=>{
    console.log("mongo db connected");
})
