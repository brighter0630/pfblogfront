import axios from "axios";

module.exports = {
  getBSData: async (ticker) => {
    try {
      return (
        await axios.get(
          `${process.env.stockBSURL}/${ticker}?limit=10&apikey=${process.env.stockAPIKEY}`
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
  getISData: async (ticker) => {
    try {
      return (
        await axios.get(
          `${process.env.stockISURL}/${ticker}?limit=10&apikey=${process.env.stockAPIKEY}`
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
  getCSData: async (ticker) => {
    try {
      return (
        await axios.get(
          `${process.env.stockCSURL}/${ticker}?limit=10&apikey=${process.env.stockAPIKEY}`
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
  getDVData: async (ticker) => {
    try {
      return (
        await axios.get(
          `${process.env.stockDVURL}/${ticker}?apikey=${process.env.stockAPIKEY}`
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
  getRatioData: async (ticker) => {
    try {
      return (
        await axios.get(
          `${process.env.stockRatioURL}/${ticker}?limit=10&apikey=${process.env.stockAPIKEY}`
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
  getETCData: async (ticker) => {
    try {
      return (
        await axios.get(
          `${process.env.stockAPIURL_profile}/${ticker}?apikey=${process.env.stockAPIKEY}`
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
};
