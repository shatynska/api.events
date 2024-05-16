import { createZodDto } from '@anatine/zod-nestjs';
import { UserDtoSchema } from './user.dto';

export class CreateUserDto extends createZodDto(
  UserDtoSchema.omit({
    id: true,
    createdAt: true,
  }),
) {}
