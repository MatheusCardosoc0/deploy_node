import { PrismaClient } from "@prisma/client"
import { NextApiResponse } from "next"

interface Data{
  name: string
  description: string
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiResponse, res: NextApiResponse){

  const response = await prisma.book.findMany()

  res.status(200).json(response)
}