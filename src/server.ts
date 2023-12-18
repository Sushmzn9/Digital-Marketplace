import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextHandler } from "./next-utils";

const app = express();

const PORT = Number(process.env.PORT) || 8000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));
};
start();