export class UserDto {
    username: string;
    email: string;
    password: string;
    fullName: string;
    lastName: string;   
    bio: string;
    createdAt: Date;
    updatedAt: Date;
    followers: string[];
    following: string[];
    posts: string[];
}