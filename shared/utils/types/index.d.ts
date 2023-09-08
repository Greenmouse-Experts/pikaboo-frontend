import { UserData } from "./auth";

export interface BaseResult {
  success: boolean;
  message: string;
}

export interface ErrorResult {
  success: boolean;
  message: string;
  errors: Array[any];
  [key: string]: any;
}

export interface CreateFleetInput {
  first_name: string;
  middle_name: string | null;
  last_name: string;
  gender: string;
  email: string;
  password: string;
  password_confirmation: string;
  zone_id?: string;
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
  zone: {
    zone_id: string;
    name: string;
  };
}

export interface UsersResult {
  success: boolean;
  message: string;
  data: FetchUser | any;
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

export interface CreateZoneInput {
  name: string;
}

export interface ZoneResult extends BaseResult {
  data: ZonesList[] | any;
}

export interface ZonesList {
  name: string;
  coordinates: string;
  lga: string;
  zone_id: string;
  created_at: string;
  status: string;
  id: number;
}

export interface FormInput1 {
  title: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone: string;
  phone2: string;
  address: string;
  gender: string;
}

export interface CreateResidenceInput extends FormInput1 {
  plot_no: string;
  house_number: string;
  street_name: string;
  area1: string;
  area2: string;
  quarter: string;
  town: string;
  state: string;
  building_type: string;
  zone_id: string;
  facility_type: string;
  flats: string[];
  shop_store_in: string[];
  purpose_built_facility: string;
  building_image: File;
}

export interface Residence {
  user: {
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
    created_by_who: string | null;
    isVerified: string | null;
    status: string;
    created_at: string;
    updated_at: string;
  };
}

export interface ZoneResidenceResult extends BaseResult {
  data: {
    name: string;
    coordinates: string;
    lga: string;
    zone_id: string;
    created_at: string;
    status: string;
    id: number;
    residence: Residence[];
  };
}

export interface UserDetailsResult extends BaseResult {
  data: UserDetail;
}

export interface UserDetail {
  account_type: string;
  address: string;
  avatar: string;
  bill: {
    bill_monthly: string;
    created_at: string;
    id: number;
    waste_bin_monthly: string;
    bin_amount_paid: string;
  };
  building_information: {
    no_of_residents: string | number;
    area1: string;
    area2: string;
    building_image: string;
    building_type: string;
    created_at: string;
    facility_type: string;
    flats: string;
    house_number: string;
    id: number;
    plot_no: string;
    purpose_built_facility: string;
    commercial_facility: string;
    quarter: string;
    shop_store_in: string;
    state: string;
    street_name: string;
    town: string;
    user_id: string;
    latitude: string;
    longtitude: string;
    residential: string;
    shop_stores: string;
    residential_facility: string;
    facility_include: string;
    completion_status: string;
    classification: string;
    water_supply: string;
    town_city: string | null;
  };
  created_at: string;
  created_by_who: string;
  current_password: string;
  dob: string | null;
  email: string;
  email_verified_at: string;
  fcm_token: string | null;
  first_name: string;
  gender: name;
  id: number;
  isVerified: string;
  last_name: string;
  means_of_identification: string | null;
  middle_name: string | null;
  phone: string;
  phone2: string | null;
  pikaboo_id: string;
  role: string | null;
  status: string;
  title: string;
  truck_id: string | null;
  wallet: string;
  zone_id: string | null;
  recent_bill: {
    created_at: string;
    current_bill: string;
    current_monthly_bill: string;
    id: number;
    updated_at: string;
    user_id: number;
  };
}

export interface UpdateBillInput {
  user_id: string;
  bill_monthly: number;
  waste_bin_monthly: number;
}
export interface UpdateBillResult extends BaseResult {
  data: {
    user: UserData;
    id: number;
    bill_monthly: string;
    bin_amount_paid: string | null;
    waste_bin_monthly: string;
    created_at: string;
  };
}

export interface SendToken {
  fcm_token: string | number;
}

export interface NotificationBody {
  admin: string | null;
  body: string;
  created_at: string;
  from: {
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
    created_by_who: string | null;
    isVerified: string | null;
    status: string;
    created_at: string;
    updated_at: string;
  };
  id: number;
  image: string;
  link: string | null;
  status: string;
  title: string;
  type: string;
}
