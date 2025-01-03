import express, { Request, Response } from "express";
import axios from "axios";
import "dotenv/config";
import bodyParser from "body-parser";

const { TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

const app = express();
app.use(bodyParser.json());

const init = async () => {
  const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`);
  console.log(res.data);
};

app.post(URI, async(req:Request, res:Response)=>{
    console.log(req.body)
    return res.send()
})

const PORT = 4000;
app.listen(PORT, async () => {
  console.log(`Server is running on PORT ${PORT}`);
  await init();
});
