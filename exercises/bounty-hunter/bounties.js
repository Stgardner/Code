const uuid = require("uuid")

module.exports = [
    {
    firstName: "Fred",
    lastName: "Henrikson",
    living: "false",
    bountyAmount: "$20,000,000",
    type: "Jedi",
    _id: uuid.v4()

},
    {
    firstName: "Darth",
    lastName: "Dirk",
    living: "true",
    bountyAmount: "$457",
    type: "Sith",
    _id: uuid.v4()
},
{
    firstName: 'Ibby',
    lastName: 'Muhammud',
    living: "true",
    bountyAmount: '$666,666,666,666,666,666',
    type: 'Jedi',
    _id: 420
},
    {
    firstName: "Lord",
    lastName: "Neg",
    living: "true",
    bountyAmount: "$6,666",
    type: "Sith",
    _id: uuid.v4()
},
    {
    firstName: "Susy",
    lastName: "Black",
    living: "true",
    bountyAmount: "$555,000,000",
    type: "Jedi",
    _id: uuid.v4()
}
]