module.exports = [
  {
    type: "input",
    name: "name",
    message: "Name:",
    validate(value) {
      if (!value.length) {
        return "Components must have a name.";
      } else if (
        value.slice(0, 4)
          .toLowerCase() === 'base'
      ) {
        return "Duplicate prefix: 'base'";
      }
      return true;
    },
  }
];
