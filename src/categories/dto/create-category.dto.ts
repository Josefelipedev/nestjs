import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @MaxLength(255, { message: 'O campo name deve ter no máximo 255 caracteres' })
  @IsString({ message: 'O campo name deve ser uma string' })
  @IsNotEmpty({ message: 'O campo name não pode estar vazio' })
  name: string;
}
