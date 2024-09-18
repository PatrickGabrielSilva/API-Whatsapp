const express = require('express');
const venom = require('venom-bot');
const app = express();
const port = 3000;

app.use(express.json());

venom.create({
  session: 'apiwhatsapp'
})
.then((client) => start(client))
.catch((erro) => {
  console.log(erro);
});

const start = (client) => {
  app.post("/send-message", async (req, res) => {
    const {to, message} = req.body;
    await client.sendText(to + "@c.us", message);
    res.json("Mensagem Enviada");
  });
}

app.listen(port, () => {
  console.log("srv rodando na porta " + port);
});
