import express, {Request, Response} from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env.NODE_PORT

app.get('/', (req: Request, res: Response) => {
    res.send('Response from node server')
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})