//import
const express=require("express")
require("./connection")
var proModel=require("./model/products")
var userModel=require("./model/user")
var cors = require('cors')

// initilize
const app = express()

//mid
app.use(express.json());
app.use(cors())

//api creation

// to create signup data
app.post("/signup", async (req, res) => {
  try {
    await userModel(req.body).save();
    res.send({message:"Signed up successful!!"});
  } catch (error) {
    console.log(error);
  }
});


// login
app.post("/login", async (req, res) => {
  try {
    var user = await userModel.findOne({ Email: req.body.Email });
    if (!user) {
      return res.send({message:"User not found"});
    }
    if (user.password === req.body.password) {
       return res.send({
        message: "Logged in successfully",
        userType: user.userType,
        name: user.Name,       
        email: user.Email,     
        userId: user._id
      });
    } else {
      return res.send({message:"Invalid credentials"});
    }
  } catch (error) {
    console.log(error);
    return res.send({message:"An error occurred"});
  }
});


//add api
app.post("/add",async(req,res)=>{
try {
    await proModel(req.body).save()
    res.send({message:"data added!!"})
} catch (error) {
    console.log(error)
}
})

//view api
app.get("/view",async(req,res)=>{
try {
    var data=await proModel.find()
    res.send(data)
} catch (error) {
    console.log(error)
}
})

//Delete api
app.delete("/delete/:id",async(req,res)=>{
try {
    await proModel.findByIdAndDelete(req.params.id)
    res.send({message:"data deleted"})
} catch (error) {
    console.log(error)
}
})

//update api
app.put("/update/:id",async(req,res)=>{
try {
    await proModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"data updated"})
} catch (error) {
    console.log(error)
}
})

//port setting
app.listen(3004,()=>{
    console.log("port is running at 3004")
})
