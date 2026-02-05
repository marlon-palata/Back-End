import express from "express";

const app = express();

app.use(express.json());

const musicas = [
  {
    id: 233,
    titulo: "B.Y.O.B",
    artista: "System of a Down",
    genero: "Rock",
    ano_publicacao: 1998,
  },
];

function buscarMusica(id) {
  // Buscando no array de músicas pelo ID e utilizando uma variável de apoio "m" para guardar a música que foi "encontrada"
  return musicas.findIndex((m) => {
    return m.id == Number(id);
  });
}

app.get("/musicas", (req,res) =>{
    res.status(200).json(musicas)

})

export default app;
