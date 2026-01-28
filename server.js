import dotenv from "dotenv";
dotenv.config();
import app from "./App.js";

// Usa a porta do Railway (ou 3000 como fallback)
const PORT = process.env.PORT || 3000;

// Healthcheck simples obrigatório para Railway
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
