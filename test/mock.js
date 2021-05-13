const enderecoMock = {
  logradouro: "Rua Samin",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro",
  pais: "BR",
  cep: "21230354",
};
const dataMock = {
  data: {
    latitude: "-22.8397095",
    longitude: "-43.3291447",
    denunciante: {
      nome: "Fabricio",
      cpf: "111111111",
    },
    denuncia: {
      titulo: "teste",
      descricao: "testeste",
    },
    endereco: {
      logradouro: "Rua Samin",
      cidade: "Rio de Janeiro",
      estado: "Rio de Janeiro",
      pais: "BR",
      cep: "21230354",
    },
  },
};

module.exports = { enderecoMock, dataMock };
