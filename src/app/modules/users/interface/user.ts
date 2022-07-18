export interface User {
    id?: number | string;
    name: string;
    email: string;
    password?: string;
    avatar?: string;
    isAdmin?: boolean;
}
