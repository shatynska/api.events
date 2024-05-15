import { PrismaClient } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  await prisma.user.upsert({
    where: { id: '3739dacf-18f5-4e2a-a8d2-f414ce254ec2' },
    update: {},
    create: {
      id: '3739dacf-18f5-4e2a-a8d2-f414ce254ec2',
      fullName: 'Sam Torndan',
      email: 'samuusek@gmail.com',
      birthDate: '2001-10-14T00:00:00.000Z',
      eventId: 'vvG1iZ9MU99saA',
      referralId: '165fb537-aa79-4881-be8c-ed57e7da88db',
    },
  });
}
