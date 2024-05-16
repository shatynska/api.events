import { Test, TestingModule } from '@nestjs/testing';
import { registerParticipantDtoStubs } from '../dto/register-participant.dto';
import { REPOSITORY_TOKEN } from '../repository';
import { RegisterService } from './register.service';

const mockRepository = {
  register: jest.fn(),
};

describe('ParticipantsService', () => {
  let service: RegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegisterService,
        {
          provide: REPOSITORY_TOKEN,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RegisterService>(RegisterService);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('repository should be call with defined Dto', () => {
      const dto = registerParticipantDtoStubs[0];
      service.register(dto);

      expect(mockRepository.register).toHaveBeenCalledWith(dto);
    });
  });
});
