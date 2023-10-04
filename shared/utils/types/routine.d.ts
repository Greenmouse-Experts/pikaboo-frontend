import { BaseResult, Residence } from ".";

export interface UserItem {
  id: number;
  pikaboo_id: string;
  account_type: string;
  title: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone: string;
  phone2: string | null;
  gender: string;
  dob: string | null;
  avatar: string | null;
  email_verified_at: string;
  current_password: string;
  role: string | null;
  wallet: string;
  fcm_token: string | null;
  address: string;
  zone_id: string | null;
  truck_id: string | null;
  created_by_who: {
    email: string
    first_name: string
    id: number
    last_name: string
    middle_name: string | null
    pikaboo_id: string
  };
  isVerified: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}
export interface PaymentResult extends BaseResult{
    data: PaymentItem[]
}
export interface PaymentItem {
  amount: string;
  channel: string;
  created_at: string;
  id: number;
  ip_address: string;
  paid_at: string;
  ref_id: string;
  status: string;
  transaction_id: string;
  type: string;
  user: UserItem;
  user_id: string;
}
export interface CreateTructInput {
  color: string
  condition: string
  created_at: string
  date_purchase: string
  fuel_type: string
  make: string
  model: string
  vin: string
  year: string
}
export interface TruckItem extends CreateTructInput{
  id: number
  pikaboo_tag_id: string
  service_personnel?: UserItem
}
export interface TruckResult extends BaseResult{
  data: TruckItem[]
}
export interface DeleteTruckInput{
  truck_id: number
}
