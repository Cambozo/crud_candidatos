import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

async function criarTabela() {
  const connection = await mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.DB_PORT
  });

  const sql = `
    CREATE TABLE IF NOT EXISTS candidato (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao VARCHAR(255)
    );
  `;

  await connection.execute(sql);
  console.log("Tabela criada com sucesso!");
  await connection.end();
}

criarTabela();
