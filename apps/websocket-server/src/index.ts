import { WebSocketServer } from "ws"
import prisma from "@repo/db/client"

const wss = new WebSocketServer({port: 3002})

wss.on("connection",async(ws) => {

    ws.send("hi there")
    await prisma.user.create({
        data : {
            name : "hi there",
            email : "siiii"
        }
    })
})
