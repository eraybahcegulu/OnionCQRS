export interface UserRegister {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ErrorResponse {
    Errors: string[];
}