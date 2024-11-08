import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    email: string;
  
    @ApiProperty({ required: false, nullable: true })
    action: string | null;
  
}
