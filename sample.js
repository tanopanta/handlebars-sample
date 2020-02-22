const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");

const model = {
    name: "hahaha",
    age: 22
};


console.log(template(model))

