export interface UserValues {
    firstname: string;
    lastname: string;
    phone: number | string;
    email: string;
}

export interface User {
    id: any;
    FirstName: string | null;
    LastName: string | null;
    Email: string | null;
    Phone: number | null;
    published_at: string | null;
    created_at: string | null;
    updated_at: string | null;
}

export type UsersResponse = {
    length: number;
    map(arg0: (user: any) => JSX.Element): import("react").ReactNode;
    data: User[];
};