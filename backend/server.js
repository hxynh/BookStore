import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js';
import { router as bookRoute} from "./routes/bookRoute.js"

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors())

app.use('/', bookRoute)
app.listen(port, () => {
    console.log("server running on port ", port)
})
