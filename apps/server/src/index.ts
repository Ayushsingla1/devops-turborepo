import express, { Request, Response } from "express";
import cors from "cors"
import prisma from "@repo/db/client"

const app = express();
app.use(express.json())
app.use(cors());
const PORT = 3000;

app.get('/',(req : Request, res : Response) => {
    res.send("<h1>Hi there</h1>")
})

app.post('/user',async(req : Request,res : Response) => {

    const {name , email} = req.body;
    const result = await prisma.user.create({
        data : {
            name,
            email
        }
    })

    console.log(result)
    res.status(200).json({msg : "success"})
    return;
})

app.listen(PORT,() => {
    console.log("Listening on PORT ",PORT)
})