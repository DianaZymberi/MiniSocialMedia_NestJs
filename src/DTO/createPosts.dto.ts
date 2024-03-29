import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePostsDto{
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    body: string;

    @ApiProperty()
    @IsNumber()
    userId: number
}