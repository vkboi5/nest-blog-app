import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../users/dtos';

@Controller('auth')
export class AuthController {
    @Post("signup")
    signup(){
        return {msg:"User registered successfully"};
    }

    @Post("signin")
    signin(){
        return {msg:"User signed in successfully"};
    }
}
