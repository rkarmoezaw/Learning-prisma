const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

prisma.user
  .create({
    data: {
      name: 'Bob',
      bio: 'profile bio',
      posts: {
        create: [{ content: 'First Post' }, { content: 'Second Post' }],
      },
    },
  })
  .then(() => console.log('Inserted User Bob with posts'))
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

async function read() {
  const data = await prisma.user.findMany();
  console.log(data);
}
read();
