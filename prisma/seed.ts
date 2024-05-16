import { PrismaClient } from '@prisma/client';
import { seedEvents } from './seeds/seed-events';
import { seedReferrals } from './seeds/seed-referrals';
import { seedParticipants } from './seeds/seed-participants';

const prisma = new PrismaClient();

async function seed() {
  await seedEvents(prisma);
  await seedReferrals(prisma);
  await seedParticipants(prisma);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
