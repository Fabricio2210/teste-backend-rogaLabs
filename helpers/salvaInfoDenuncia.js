const ErroLog = require("../db/schemas/erroLogSchema");
const Denuncia = require("../db/schemas/denunciaSchema");
const salvaInfoDenuncia = async (latitude,longitude,nome,cpf,titulo,descricao,endereco,res) => {
  const data = {
    latitude,
    longitude,
    denunciante: {
      nome,
      cpf,
    },
    denuncia: {
      titulo,
      descricao,
    },
    endereco,
  };
  if (endereco.cidade === "" || endereco.estado === "") {
    const erroRequest = {
      mensagem: "Endereço não encontrado para essa localidade.",
      code: 02,
    };
    const erroLog = new ErroLog(erroRequest);
    erroLog.save();
    return res.status(500).json(erroRequest);
  } else {
    const denuncia = new Denuncia(data);
    denuncia.save();
    return res.status(200).json({
      data,
    });
  }
};
module.exports = salvaInfoDenuncia;
