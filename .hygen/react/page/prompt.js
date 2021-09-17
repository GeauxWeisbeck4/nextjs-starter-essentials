// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "Choose a name",
    hint: "(Use <kebab-case>, e.g. my-page)",
    validate: (input) => {
      if (!input) {
        return "Name cannot be empty!";
      }

      if (input === "_app" || input === "_document") {
        return "Name cannot be `_app` or `_document` as reserved keywords in NextJS";
      }

      return true;
    },
  },
  {
    type: "multiselect",
    name: "options",
    message: "Choose files to create",
    hint: "(Use <space> to select, <return> to submit)",
    initial: ["page"],
    choices: [
      {
        name: "page",
        message: "Page (NextJS)",
        value: true,
        hint: "(<page>.tsx)",
      },
      {
        name: "styles",
        message: "Styles (CSS module)",
        value: true,
        hint: "(<page>.modules.css)",
      },
      {
        name: "tests",
        message: "Tests (no-op, not supported yet)",
        value: true,
        hint: "(<page>.test.tsx)",
      },
    ],
  },
];