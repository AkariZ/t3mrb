import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const buildRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(
      z.object({
        subject: z.string(),
        name: z.string(),
        date: z.string(),
        starttime: z.string(),
        endtime: z.string(),
        room: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.example.create({
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
      } catch (err) {
        console.log('ไม่สามารถสร้างได้ ${err}');
      }
    })  // <-- Add a comma here
});
