import  dotenv from "dotenv";

dotenv.config();
import app from "./App.js";
app.listen(process.env.Port,()=>{
    console.log("http://localhost:3000");
});
