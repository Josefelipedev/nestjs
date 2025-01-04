import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @MaxLength(255, { message: 'O campo name deve ter no máximo 255 caracteres' })
  @IsString({ message: 'O campo name deve ser uma string' })
  @IsNotEmpty({ message: 'O campo name não pode estar vazio' })
  name: string;

  @Min(0, { message: 'O campo price deve ser um número positivo' })
  @IsNotEmpty({ message: 'O campo price não pode estar vazio' })
  @IsNotEmpty({ message: 'O campo price não pode estar vazio' })
  price: number;

  @Min(1, { message: 'O campo categoryId deve ser um número positivo' })
  @IsInt({ message: 'O campo categoryId deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O campo categoryId não pode estar vazio' })
  categoryId: number;
}
