declare namespace NodeJS {
    export interface ProcessEnv {
      readonly BASE_URL: string

      readonly BASE_URL_LOCAL: string

      readonly BASE_URL_DEVELOPMENT: string

      readonly BASE_URL_PRODUCTION: string
    }
  }