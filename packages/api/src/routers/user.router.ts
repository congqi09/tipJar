import { z, string } from 'zod';
import { publicProcedure, router } from '../trpc';

export const userRouter = router({
    test: publicProcedure
    .input(
      z.object({
        request: string(),
      }),
    )
    .mutation(({ input: { request } }) => {
      return 'response of ' + request;
    }),
});
