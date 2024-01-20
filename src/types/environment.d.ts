declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN_SECRET: string;
      NODE_ENV: 'development' | 'production';
      PWD: string;
      DB_URI: string;
    }
  }
}

export {};
