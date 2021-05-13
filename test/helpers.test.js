const chai = require("chai");
const expect = require("chai").expect;
const mapQuestApi = require("../helpers/mapQuestApi");
const mock = require("./mock");
describe("Testar app helpers", () => {
  it("Deve retornar objeto com endereço da mapQuest api", async () => {
    const result = await mapQuestApi("-22.8397095", "-43.3291447");
    expect(result.logradouro).equal(mock.enderecoMock.logradouro);
    expect(result.cidade).equal(mock.enderecoMock.cidade);
    expect(result.estado).equal(mock.enderecoMock.estado);
    expect(result.pais).equal(mock.enderecoMock.pais);
    expect(result.cep).equal(mock.enderecoMock.cep);
  });

});
