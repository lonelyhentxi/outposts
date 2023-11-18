declare global {
  const process: {
    env: {
      OUTPOSTS_WEB_AUTH_APPID: string,
      AUTH_ENDPOINT: string,
    }
  }
}

export {};
