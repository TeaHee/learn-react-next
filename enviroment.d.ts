declare namespace NodeJS {
    export interface ProcessEnv {
      readonly NEXT_PUBLIC_BASE_URL: string

      readonly NEXT_PUBLIC_BASE_URL_LOCAL: string

      readonly NEXT_PUBLIC_BASE_URL_DEVELOPMENT: string

      readonly NEXT_PUBLIC_BASE_URL_PRODUCTION: string
    }
  }