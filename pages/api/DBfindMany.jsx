const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const table = req.query.table;
  const id = req.query.id;
  const culomnName= req.query.culomn;

  try {
    const data = await prisma[table].findMany({
      where: {
        [culomnName]: parseInt(id),
      },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching the table");
  }
}
