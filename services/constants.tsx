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
  export const ADMIN_UPDATE_PROFILE = '/admin/profile/update'
  export const ADMIN_UPDATE_PHOTO = '/admin/profile/upload/profile-picture'

  // onboarding
  export const CREATE_FIELD = '/admin/field-operator/create'
  export const CREATE_FLEET = '/admin/fleet-manager/create'
  export const CREATE_WASTE = '/fleet-manager/waste-manager/create'

  // routine
  export const GET_USERS = '/admin/get/all/user?keyword='