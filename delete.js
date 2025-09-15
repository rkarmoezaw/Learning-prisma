const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

prisma.user
  .delete({
    where: { id: 1 },
  })
  .then(() => console.log('Deleted User 1'))
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
