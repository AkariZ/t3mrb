import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const buildRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(
      z.object({
        subject: z.string(),
        name: z.string(),
        date: z.date(),
        starttime: z.date(),
        endtime: z.date(),
        room: z.string(),
        description: z.string()                              
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.booking.create({
          data: {
            subject: input.subject,
            name: input.name,
            date: input.date,
            starttime: input.starttime,
            endtime: input.endtime,
            room: input.room,
            description: input.description,
          }
        }); 
      } catch (error) {
        console.log('ไม่สามารถสร้างได้');
        console.log(error);
      }
    }),

    getBuilds: publicProcedure.query(async ({ctx}) => {
        const build = await ctx.prisma.booking.findMany();
        return build;
    }),

});
