export interface IAuthData {
    email: string;
    senha: string;
}

export interface IUserAuth {
    id: number;
    nome: string;
    email: string;
    created_at: Date | string;
    updated_at: Date | string;
    avatar_url?: string;
}

export interface IAuthResponse {
    token: string;
    user: IUserAuth;
}
