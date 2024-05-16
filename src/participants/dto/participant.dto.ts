import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const ParticipantDtoSchema = extendApi(
  z.object({
    id: z.string().min(3).max(100),
    fullName: z.string().min(3).max(100),
    email: z.string().email(),
    // TODO Add min & max birthDate validation
    birthDate: z.string().datetime({ offset: true }),
    referralId: z.string().optional(),
    eventId: z.string().min(3).max(100),
    registeredAt: z.string().datetime({ offset: true }),
  }),
  {
    title: 'Participant',
  },
);

export class ParticipantDto extends createZodDto(ParticipantDtoSchema) {}

export const participantDtoStubs: ParticipantDto[] = [
  {
    id: 'participantId1',
    fullName: 'Full Name 1',
    email: 'mail1@gmail.com',
    birthDate: '2001-01-01T00:00:00.000Z',
    referralId: 'referralId1',
    eventId: 'eventId1',
    registeredAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'participantId2',
    fullName: 'Full Name 2',
    email: 'mail2@gmail.com',
    birthDate: '2002-02-02T00:00:00.000Z',
    referralId: 'referralId2',
    eventId: 'eventId2',
    registeredAt: '2024-02-02T00:00:00.000Z',
  },
  {
    id: 'participantId3',
    fullName: 'Full Name 3',
    email: 'mail3@gmail.com',
    birthDate: '2003-03-03T00:00:00.000Z',
    referralId: 'referralId3',
    eventId: 'eventId3',
    registeredAt: '2024-03-03T00:00:00.000Z',
  },
];
