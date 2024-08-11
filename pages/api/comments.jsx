import { PrismaClient } from '@prisma/client';
import { authenticate } from '../../lib/auth';

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { roomId, userId } = req.query;

    try {
      let comments;
      if (roomId) {
        // Fetch comments by roomId
        comments = await prisma.comment.findMany({
          where: { roomId: parseInt(roomId) },
          include: { user: true },
          orderBy: { createdAt: 'desc' },
        });
      } else if (userId) {
        // Fetch comments by userId, authentication required
        return authenticate(async (req, res) => {
          const comments = await prisma.comment.findMany({
            where: { userId: parseInt(userId) },
            include: { user: true },
            orderBy: { createdAt: 'desc' },
          });
          return res.status(200).json(comments);
        })(req, res);
      } else {
        // Fetch all comments
        comments = await prisma.comment.findMany({
          include: { user: true },
          orderBy: { createdAt: 'desc' },
        });
      }

      return res.status(200).json(comments);
    } catch (error) {
      console.error('Fetching comments failed:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    // Authentication required for posting comments
    return authenticate(async (req, res) => {
      const { id: userId } = req.user;
      const { roomId, text } = req.body;

      try {
        const comment = await prisma.comment.create({
          data: {
            text,
            roomId: parseInt(roomId),
            userId,
          },
          include: { user: true },
        });
        return res.status(201).json(comment);
      } catch (error) {
        console.error('Creating comment failed:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    })(req, res);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
