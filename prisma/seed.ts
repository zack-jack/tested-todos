import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const todosData = [
  {
    id: 1,
    description: "My first todo",
    completed: false,
    userId: 1,
  },
  {
    id: 2,
    description: "Another todo",
    completed: true,
    userId: 1,
  },
  {
    id: 3,
    description: "Feed the dog",
    completed: false,
    userId: 2,
  },
];

const main = async () => {
  await Promise.all(
    todosData.map(async (todo) => {
      return prisma.todo.upsert({
        where: { id: todo.id },
        update: {},
        create: {
          description: todo.description,
          completed: todo.completed,
          userId: todo.userId,
        },
      });
    })
  );
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
