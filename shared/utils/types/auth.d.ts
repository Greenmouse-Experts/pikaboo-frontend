import  BaseResult  from "./index";

export interface AdminLoginInput {
    email: string
    password: string
}

export interface AdminLoginResult extends BaseResult {
    token: string
    data: UserData
}

export interface UserData {
    id: number
    account_type: string
    title: string | null
    first_name: string
    middle_name: string | null
    surname: string
    email: string
    phone: string | null
    gender: string | null
    dob: string | null
    avatar: string | null
    email_verified_at: string
    current_password: string | null
    role: string
    wallet: number | null
    fcm_token: string | null
    status: string
    created_at: string
    updated_at: string
}

export interface authUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    token: string;
    country?: string;
    user_type: string
    admin_type: string
    avatar: string
}

export interface UpdateProfileInput {
    first_name: string
    last_name: string
    email: string
    phone: string
}

export interface UpdatePasswordInput {
    old_password: string
    new_password: string
    new_password_confirmation: string
}

