const axios = require("axios");

const getTickets = async () => {
  try {
    let allTickets = await axios.get(
      "https://hello7539help.zendesk.com/api/v2/tickets.json",
      {
        headers: {
          Authorization: "Basic YmltbGVuZHUzNTdAZ21haWwuY29tOjEyMzQ1Njc4OQ==",
        },
      }
    );
    console.log(allTickets.data, "alltickets");
  } catch (error) {
    console.log(error, "error");
  }
};

module.exports = { getTickets };
