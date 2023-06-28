export interface BaseResult {
  success: boolean;
  message: string;
}

export interface ErrorResult {
  success: boolean;
  message: string;
  errors: Array[any];
}

export interface CreateFleetInput {
  first_name: string;
  middle_name: string | null;
  last_name: string;
  gender: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface UserResult {
  account_type: string;
  address: string | null;
  avatar: string | null;
  created_at: string;
  current_password: string;
  dob: string | null;
  email: string;
  email_verified_at: string;
  facility_type: string | null;
  fcm_token: string | null;
  first_name: string;
  gender: string;
  id: number;
  isVerified: string;
  last_name: string;
  means_of_identification: string | null;
  middle_name: string | null;
  owners_name: string | null;
  phone: string | null;
  phone2: string | null;
  role: string | null;
  status: string;
  title: string | null;
  type_of_building: string | null;
  unit_of_operation: string | null;
  wallet: string | null;
}

export interface UsersResult {
  success: boolean;
  message: string;
  data: FetchUser;
}

interface FetchUser {
  data: UserResult[] | [];
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
  meta: any;
}
