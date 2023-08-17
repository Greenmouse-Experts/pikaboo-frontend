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
  export const SEND_TOKEN = '/user/add/fcm/token'
  export const GET_MY_ZONE_RESIDENCE = '/field-operator/home-residence/get/by/zone'

  // residence
  export const ONBOARD_RESISDENCE = '/field-operator/home-residence/create'
  export const FLAG_RESIDENCE = '/admin/flag/user'
  export const UPDATE_BILL = '/admin/bills/user/update'
  export const UPDATE_ACCOUNT = '/field-operator/home-residence/submit'

  //waste manager
  export const GET_TRUCKS = '/waste-manager/truck/get'
  export const ADD_TRUCKS = '/waste-manager/truck/create'
  export const UPDATE_TRUCKS = '/waste-manager/truck/update'
  export const DELETE_TRUCKS = '/waste-manager/truck/delete'

  // schedule request
  export const CREATE_REQUEST = '/fleet-manager/schedule-request/create'
  export const GET_SCHEDULE = '/fleet-manager/schedule-request/get'
  export const GET_ONE_SCHEDULE = '/view/single/schedule/request'
  export const GET_PERSONNEL = '/fleet-manager/schedule-request/view/service-personnel'
  export const ASSIGN_DRIVER = '/fleet-manager/schedule-request/assign/service-personnel'
  export const WASTE_GET_REQUEST = '/waste-manager/schedule-request/get'
  export const SUBMIT_PERSONNEL = '/waste-manager/schedule-request/submit/service-personnels'
  export const GET_WASTE_SCHEDULE = '/waste-manager/schedule-request/get/my/zone'

  // notification
  export const GET_NOTIFICATION = '/user/get/all/notifications'
  export const GET_UNREAD_NOTIFICATION = '/user/get/all/unread/notifications'
  export const READ_NOTIFICATION = '/user/read/notification'
  export const DELETE_NOTIFICATION = '/user/delete/notification'
  export const GET_ADMIN_NOTIFICATION = '/admin/get/all/notifications'
  export const GET_ADMIN_UNREAD_NOTIFICATION = '/admin/get/all/unread/notifications'
  export const READ_ADMIN_NOTIFICATION = '/admin/read/notification'
  export const DELETE_ADMIN_NOTIFICATION = '/admin/delete/notification'

  // get transaction
  export const GET_TRANSACTION = '/admin/get/all/transaction/histories'

  // shop 
  export const CREATE_CATEGORY = '/admin/shop/create/category'
  export const GET_CATEGORY = '/admin/shop/get/categories'
  export const EDIT_CATEGORY = '/admin/shop/update/category'
  export const DEACTIVATE_CATEGORY = '/admin/shop/action/category'
  export const CREATE_PRODUCT = '/admin/shop/create/product'
  export const ADD_PRODUCT_IMAGE = '/admin/shop/add/product/images'
  export const GET_PRODUCT = '/admin/shop/get/products'
  export const UPDATE_PRODUCT = '/admin/shop/update/product'
  export const UPDATE_PRODUCT_STATUS = '/admin/shop/action/product'
  export const DESTROY_PRODUCT = '/admin/shop/destroy/product'

  //Special Request
  export const GET_SPECIAL_REQUEST = '/admin/special-requests/get'
  export const GET_FLAT_RATE = '/admin/special/request/flat/rate'

  // get lga
  export const GET_LGA = '/get/lga'

