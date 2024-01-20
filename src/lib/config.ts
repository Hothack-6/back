import dotenv from "dotenv";

if (!process.env.GRAPHQL_ENV) {
  dotenv.config();
}

const handler: ProxyHandler<NodeJS.ProcessEnv> = {
  get(target, prop) {
    if (!prop) return undefined;
    /**
     * Because we are adding a proxy to the process.env get method, this will fail
     * for certain environment variables that are used outside of the application.
     * So this whitelist will by pass validation on these whitelisted vars.
     */
    const WHITE_LIST = ["__esModule"];
    const parsedProp = prop.toString();

    if (WHITE_LIST.includes(parsedProp)) {
      return;
    }

    const value = target[parsedProp];
    if (value === undefined) {
      throw new Error(`Variable "${parsedProp}" does not exist in config`);
    }

    return value;
  },
};

export default new Proxy({ ...process.env }, handler);
