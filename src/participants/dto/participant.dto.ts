import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const ParticipantDtoSchema = extendApi(
  z.object({
    id: z.string().min(3).max(100),
    fullName: z.string().min(3).max(100),
    email: z.string().email(),
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
