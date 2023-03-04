import { Book, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse){

  if(req.method !== 'POST'){
    return res.status(405).end()
  }

  const {description, name}: Book = req.body

  const createBook = await prisma.book.create({
    data: {
      description,
      name
    }
  })

  return res.status(200).json(createBook)
}