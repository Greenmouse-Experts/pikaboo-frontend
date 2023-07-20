import { BaseResult } from ".";

export interface AssignServicePersonnelInput {
  cleanup_request_id: string;
  crsp_id: string;
}

export interface CreateScheduleInput {
  zone_id: number;
  schedule_date: Date;
}

export interface ScheduleRequestResult extends BaseResult {
  data: ScheduleRequest[]  | undefined;
}

export interface ScheduleRequest {
  completed: number;
  created_at: string;
  id: number;
  pending: number;
  schedule_date: string;
  status: status;
  zone: {
    name: string;
    no_of_residence: number;
  };
}

export interface ScheduleHomeResisdence {
  created_at: string;
  id: number;
  residence: {
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
    quarter: string;
    shop_store_in: string;
    state: string;
    street_name: string;
    town: string;
    user_id: string;
  };
  status: string;
  zone: string;
}

export interface ScheduleHomeResisdenceData {
  created_at: string;
  home_residence: ScheduleHomeResisdence[];
  id: number;
  schedule_date: string;
  service_personnels: ServicePersonnelData[];
  status: string;
  zone: {
    name: string;
    no_of_residence: number;
  };
}

export interface ScheduleHomeResisdenceResult extends BaseResult {
  data: ScheduleHomeResisdenceData;
}

export interface ServicePersonnel {
  account_type: string
  address:string | null;
  avatar:string | null;
  created_at: string;
  created_by_who: string;
  current_password: string
  dob:string | null;
  email: string
  email_verified_at: string
  fcm_token: string
  first_name: string
  gender: string
  id: number
  isVerified: string
  last_name: string
  means_of_identification:string | null;
  middle_name:string | null;
  phone: string
  phone2:string | null;
  pikaboo_id: string
  status: string
  title:string | null;
  truck_id: string
  wallet: string
  zone_id:string | null;
}

export interface ServicePersonnelData {
    created_at: string
    id: number
    service_personnel: ServicePersonnel
}
