const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");

const model = {
    name: "hahaha"
};


console.log(template(model))

