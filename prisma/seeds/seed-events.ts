import { PrismaClient } from '@prisma/client';

export async function seedEvents(prisma: PrismaClient) {
  await prisma.event.upsert({
    where: { id: 'vvG1iZ9MU99saA' },
    update: {},
    create: {
      id: 'vvG1iZ9MU99saA',
      title: 'P!NK: Summer Carnival 2024',
      description: '',
      startDate: '2024-06-10T00:00:00.000Z',
      organizer: 'LIVE NATION MUSIC',
      image:
        'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg',
    },
  });

  await prisma.event.upsert({
    where: { id: 'vvG1YZ9MSAhxBi' },
    update: {},
    create: {
      id: 'vvG1YZ9MSAhxBi',
      title: 'Hamilton (Touring)',
      description: '',
      startDate: '2024-06-21T00:00:00.000Z',
      organizer: 'BROADWAY DALLAS',
      image:
        'https://s1.ticketm.net/dam/a/82f/7c700586-3fde-4675-bcd5-1804d691d82f_TABLET_LANDSCAPE_3_2.jpg',
    },
  });

  await prisma.event.upsert({
    where: { id: 'vv1A7ZkeKGkduOwi0' },
    update: {},
    create: {
      id: 'vv1A7ZkeKGkduOwi0',
      title: 'Imagine Dragons: LOOM WORLD TOUR',
      description: '',
      startDate: '2024-07-18T00:00:00.000Z',
      organizer: 'LIVE NATION MUSIC',
      image:
        'https://s1.ticketm.net/dam/a/e8c/5265b9d2-a06c-4dc8-a432-a8dd9d042e8c_TABLET_LANDSCAPE_16_9.jpg',
    },
  });
  await prisma.event.upsert({
    where: { id: 'G5vVZ9whGF0wF' },
    update: {},
    create: {
      id: 'G5vVZ9whGF0wF',
      title: 'New York Yankees vs. Baltimore Orioles',
      description: '',
      startDate: '2024-07-19T00:00:00.000Z',
      organizer: 'MLB REGULAR SEASON',
      image:
        'https://s1.ticketm.net/dam/a/7e0/479ac7e7-15fb-44ba-8708-fc1bf2d037e0_TABLET_LANDSCAPE_16_9.jpg',
    },
  });

  await prisma.event.upsert({
    where: { id: 'k7vGFbanyCkq8' },
    update: {},
    create: {
      id: 'k7vGFbanyCkq8',
      title: 'The Cutwater Stretch',
      description: '',
      startDate: '2024-08-20T00:00:00.000Z',
      organizer: 'PROMOTED BY VENUE',
      image:
        'https://s1.ticketm.net/dam/a/50c/ed8b3cca-d4e5-4048-98e2-6507931a750c_1458751_TABLET_LANDSCAPE_3_2.jpg',
    },
  });
}
