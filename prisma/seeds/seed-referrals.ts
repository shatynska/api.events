import { PrismaClient } from '@prisma/client';

export async function seedReferrals(prisma: PrismaClient) {
  await prisma.referral.upsert({
    where: { id: '9e1ff41f-0cc8-45f1-8cbc-4978a0626112' },
    update: {},
    create: {
      id: '9e1ff41f-0cc8-45f1-8cbc-4978a0626112',
      title: 'social media',
    },
  });

  await prisma.referral.upsert({
    where: { id: '1aa73d76-0d9f-4d59-86c7-ff5812d43418' },
    update: {},
    create: {
      id: '1aa73d76-0d9f-4d59-86c7-ff5812d43418',
      title: 'friends',
    },
  });

  await prisma.referral.upsert({
    where: { id: '165fb537-aa79-4881-be8c-ed57e7da88db' },
    update: {},
    create: {
      id: '165fb537-aa79-4881-be8c-ed57e7da88db',
      title: 'found myself',
    },
  });
}
