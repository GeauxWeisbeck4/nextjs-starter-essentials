// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "Choose a name",
    hint: "(Use <param-case>, e.g. use-my-hook)",
    validate: (input) => {
      if (!input) {
        return "Name cannot be empty!";
      }

      if (!input.startsWith("use")) {
        return "Name should start with `use*` and follow the param-case casing convention";
      }

      return true;
    },
  },
  {
    type: "multiselect",
    name: "options",
    message: "Choose files to create",
    hint: "(Use <space> to select, <return> to submit)",
    initial: ["index", "hook"],
    choices: [
      {
        name: "index",
        message: "Index (re-export)",
        value: true,
        hint: "(index.tsx)",
      },
      {
        name: "hook",
        message: "Hook (React)",
        value: true,
        hint: "(<use-my-hook>.tsx)",
      },
      {
        name: "tests",
        message: "Tests (no-op, not supported yet)",
        value: true,
        hint: "(<use-my-hook>.test.tsx)",
      },
    ],
  },
];
