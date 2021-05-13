const router = require("express").Router();
const mapQuestapi = require("../helpers/mapQuestApi");
const salvaInfoDenuncia = require("../helpers/salvaInfoDenuncia");
const ErroLog = require("../db/schemas/erroLogSchema");
const cache = require("../helpers/cacheMiddleware")

router.post("/v1/denuncias",cache(10), async (req, res) => {
  console.log(res)
  const { latitude, longitude, nome, cpf, titulo, descricao } = req.body;
  const erroRequest = {
    mensagem: "Request inválido.",
    code: 01,
  };

  if (!latitude || !longitude || !nome || !cpf || !titulo || !descricao) {
    res.status(400).json(erroRequest);
    const erroLog = new ErroLog(erroRequest);
    erroLog.save().catch((erro) => {
     return erro;
    });
  } else {
    const endereco = await mapQuestapi(latitude, longitude);
    await salvaInfoDenuncia(latitude,longitude,nome,cpf,titulo,descricao,endereco,res);
  }
});

module.exports = router;
