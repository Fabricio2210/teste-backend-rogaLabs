const axios = require("axios");
require('dotenv').config();

const mapQuestapi = async (lat,lng) => {
  const params = {
    location: {
      latLng: {
        lat,
        lng,
      },
    },
    options: {
      thumbMaps: false,
    },
  };
  try {
    const res = await axios.post(
      `http://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.MAP_KEY}`,
      params
    );
    const {street, adminArea5,adminArea3,adminArea1,postalCode} = res.data.results[0].locations[0]
    const endereco = {
      logradouro: street,
      cidade: adminArea5,
      estado: adminArea3,
      pais: adminArea1,
      cep: postalCode,
    }
   return endereco;
  } catch (erro) {
    return erro;
  }
};

module.exports = mapQuestapi;
