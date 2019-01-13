
const queryToT9 = require("./services/t9");

const t9Convert = async (req, res, next) => {
    const response = await queryToT9(req.query.value)
    res.send(response)
}

module.exports = {
    t9Convert
}