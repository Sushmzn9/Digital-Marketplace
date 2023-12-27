import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./trpc";
import { authRouter } from "./authRouter";

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
// const server = createHTTPServer({
//   router: appRouter,
// });
