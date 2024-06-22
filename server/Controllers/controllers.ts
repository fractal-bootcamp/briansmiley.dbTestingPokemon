import { Request, Response } from "express";
import prisma from "../../src/.client";

//retrieve list of all trainers in the database
export const dbGetAllTrainers = async (req: Request, res: Response) => {
  try {
    const trainers = await prisma.trainer.findMany();
    trainers.length === 0
      ? res.status(404).send("No trainers found in database somehow")
      : res.status(200).send(trainers);
  } catch (e) {
    res.status(400).send("Error while accessing Trainer database");
  }
};
