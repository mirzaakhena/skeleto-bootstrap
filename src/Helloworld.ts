import { 
  ActionHandler 
} from "skeleto"

type HelloWorld = ActionHandler<{}, {}>

/**
 * @Action
 */
export function ImplHelloworld(): HelloWorld {

  return async (ctx, req) => {
    console.log("Hello");
    return {}
  }

}