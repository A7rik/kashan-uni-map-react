import { PrismaClient } from '@prisma/client';
import { authenticate } from '../../lib/auth';

const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { id } = req.user;

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: { id: true, username: true, email: true },
      });
      res.status(200).json(user);
    } catch (error) {
      console.error('Fetching profile failed:', error);
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { username, email } = req.body;

    try {
      const user = await prisma.user.update({
        where: { id },
        data: { username, email },
      });
      res.status(200).json(user);
    } catch (error) {
      console.error('Updating profile failed:', error);
      res.status(500).json({ error: error.message });
    }
  }
};

export default authenticate(handler);
