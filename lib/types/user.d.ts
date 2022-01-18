export interface UserResponse {
    uuid: string;
    username: string;
    email: string;
    given_name: string;
    family_name: string;
    verified: boolean;
    last_login: Date;
    features: string[];
}
