const { hash } = require("bcrypt");

const saltRounds = 10;

async function main() {
  const password = "passowrd";
  const hashed = await hash(password, saltRounds);
  console.log(hashed);
}

main();
