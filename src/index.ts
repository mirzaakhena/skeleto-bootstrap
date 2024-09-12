import { ActionHandler, newContext, Skeleto } from "skeleto";

async function main() {
  
  const application = await Skeleto.start();
  
  const helloworld = application
    .getContainer()
    .get("HelloWorld")
    ?.getInstance() as ActionHandler;

  await helloworld(newContext(), {})
  
}

await main()
