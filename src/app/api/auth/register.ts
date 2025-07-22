import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end()

  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing fields" })
  }

  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })

    return res.status(201).json({ message: "User created" })
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" })
  }
}
