// NB: Lifetime is in seconds
export enum CACHE_LIFETIME {
    DEFAULT = 0,
    TINY = 20,
    MEDIUM = 180,
    EXTENDED = 3600,
  }
  
  export enum HTTP_METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
  }

  export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  // auth
  export const ADMIN_LOGIN = '/auth/admin/login'
  export const USER_LOGIN = '/auth/web/login'
  export const ADMIN_LOGOUT = '/logout'
  export const ADMIN_CHANGE_PASSWORD = '/admin/profile/update/password'
  export const USER_CHANGE_PASSWORD = '/profile/update/password'
  export const ADMIN_UPDATE_PROFILE = '/admin/profile/update'
  export const USER_UPDATE_PROFILE = '/profile/update'
  export const ADMIN_UPDATE_PHOTO = '/admin/profile/upload/profile-picture'
  export const USER_UPDATE_PHOTO = '/profile/upload/profile-picture'
  export const USER_FORGET_PASSWORD = '/auth/password/email'
  export const USER_RESET_PASSWORD = '/auth/password/reset'

  // onboarding
  export const CREATE_FIELD = '/admin/field-operator/create'
  export const CREATE_FLEET = '/admin/fleet-manager/create'
  export const CREATE_WASTE = '/admin/waste-manager/create'
  export const ASSIGN_ZONE = '/admin/waste-manager/assign/zone'
  export const FLEET_CREATE_WASTE = '/fleet-manager/waste-manager/create'
  export const FLEET_ASSIGN_ZONE = '/fleet-manager/waste-manager/assign/zone'
  export const CREATE_DRIVER = '/waste-manager/service-personnel/create'

  // routine
  export const GET_USERS = '/admin/get/all/user?keyword='
  export const GET_MY_USERS = 'user/get/all/users'
  export const GET_ZONE = '/zone/get'
  export const ADD_ZONE = '/admin/zone/create'
  export const GET_ZONE_RESIDENCE = '/zone/get/home-residence'
  export const GET_USER_DETAIL = '/view/single/user'

  // residence
  export const ONBOARD_RESISDENCE = '/field-operator/home-residence/create'
  export const FLAG_RESIDENCE = '/admin/flag/user'
  export const UPDATE_BILL = '/admin/bills/user/update'

  //waste manager
  export const GET_TRUCKS = '/waste-manager/truck/get'
  export const ADD_TRUCKS = '/waste-manager/truck/create'
  export const UPDATE_TRUCKS = '/waste-manager/truck/update'
  export const DELETE_TRUCKS = '/waste-manager/truck/delete'