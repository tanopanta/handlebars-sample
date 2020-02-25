const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");

const model = {
    name: "hahaha",
    age: 22
};


console.log(template(model));

const eachModel = {
    user: [
        {name: "one"},
        {name: "two"},
        {name: "three"}
    ]
};

const templateEach = Handlebars.compile(`
{{#each user}}
    name = {{name}}
{{/each}}
`);

console.log(templateEach(eachModel));

