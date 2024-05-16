import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { RegisterParticipantDto } from '../../../application/dto/register-participant.dto';
import { RegisterService } from '../../../application/register/register.service';

@Controller('participants')
@UsePipes(ZodValidationPipe)
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  handle(@Body() registerParticipantDto: RegisterParticipantDto) {
    return this.registerService.register(registerParticipantDto);
  }
}
