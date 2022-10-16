import { WEBSITE_URL } from "./website";

export const GET_SETTINGS_URL = WEBSITE_URL + "/api/get-settings";
export const SEARCH_LOCATIONS_URL = WEBSITE_URL + "/api/search-location";
export const GET_POPULAR_LOCATIONS_URL =
  WEBSITE_URL + "/api/popular-geo-locations";
export const GET_PROMO_SLIDER_URL = WEBSITE_URL + "/api/promo-slider";
export const GET_DELIVERY_RESTAURANTS_URL =
  WEBSITE_URL + "/api/get-delivery-restaurants";
export const GET_SELFPICKUP_RESTAURANTS_URL =
  WEBSITE_URL + "/api/get-selfpickup-restaurants";
export const GET_RESTAURANT_INFO_URL = WEBSITE_URL + "/api/get-restaurant-info";
export const GET_RESTAURANT_INFO_BY_ID_URL =
  WEBSITE_URL + "/api/get-restaurant-info-by-id";
export const GET_RESTAURANT_INFO_AND_OPERATIONAL_STATUS_URL =
  WEBSITE_URL + "/api/get-restaurant-info-and-operational-status";
export const GET_RESTAURANT_ITEMS_URL =
  WEBSITE_URL + "/api/get-restaurant-items";
export const APPLY_COUPON_URL = WEBSITE_URL + "/api/apply-coupon";
export const LOGIN_USER_URL = WEBSITE_URL + "/api/login";
export const REGISTER_USER_URL = WEBSITE_URL + "/api/register";
export const GET_PAGES_URL = WEBSITE_URL + "/api/get-pages";
export const GET_SINGLE_PAGE_URL = WEBSITE_URL + "/api/get-single-page";
export const SEARCH_RESTAURANTS_URL = WEBSITE_URL + "/api/search-restaurants";
export const GET_ADDRESSES_URL = WEBSITE_URL + "/api/get-addresses";
export const SAVE_ADDRESS_URL = WEBSITE_URL + "/api/save-address";
export const DELETE_ADDRESS_URL = WEBSITE_URL + "/api/delete-address";
export const UPDATE_USER_INFO_URL = WEBSITE_URL + "/api/update-user-info";
export const CHANGE_USER_AVATAR_URL = WEBSITE_URL + "/api/change-avatar";
export const CHECK_BAN_URL = WEBSITE_URL + "/api/check-ban";
export const PLACE_ORDER_URL = WEBSITE_URL + "/api/place-order";
export const SET_DEFAULT_URL = WEBSITE_URL + "/api/set-default-address";
export const GET_ORDERS_URL = WEBSITE_URL + "/api/get-orders";
export const GET_PAYMENT_GATEWAYS_URL =
  WEBSITE_URL + "/api/get-payment-gateways";
export const NOTIFICATION_TOKEN_URL =
  WEBSITE_URL + "/api/save-notification-token";
export const SEND_OTP_URL = WEBSITE_URL + "/api/send-otp";
export const VERIFY_OTP_URL = WEBSITE_URL + "/api/verify-otp";

export const RAZORPAY_CREATE_ORDER_URL =
  WEBSITE_URL + "/api/payment/razorpay/create-order";
export const RAZORPAY_PROCESS_VERIFY_URL =
  WEBSITE_URL + "/api/payment/razorpay/process";

export const PAYTM_PAYMENT_URL = WEBSITE_URL + "/api/payment/paytm";

export const CHECK_USER_RUNNING_ORDER_URL =
  WEBSITE_URL + "/api/check-running-order";
export const GET_ORDER_CANCEL_URL = WEBSITE_URL + "/api/cancel-order";
export const GET_WALLET_TRANSACTIONS_URL =
  WEBSITE_URL + "/api/get-wallet-transactions";
export const CHECK_RESTAURANT_OPERATION_SERVICE_URL =
  WEBSITE_URL + "/api/check-restaurant-operation-service";
export const GET_SINGLE_ITEM_URL = WEBSITE_URL + "/api/get-single-item";
export const GET_ALL_LANGUAGES_URL = WEBSITE_URL + "/api/get-all-languages";
export const GET_SINGLE_LANGUAGE_DATA_URL =
  WEBSITE_URL + "/api/get-single-language";
export const GET_ADDRESS_FROM_COORDINATES =
  WEBSITE_URL + "/api/coordinate-to-address";
export const SEND_PASSWORD_RESET_EMAIL_URL =
  WEBSITE_URL + "/api/send-password-reset-mail";
export const VERIFY_PASSWORD_RESET_OTP_URL =
  WEBSITE_URL + "/api/verify-password-reset-otp";
export const CHANGE_USER_PASSWORD_URL =
  WEBSITE_URL + "/api/change-user-password";
export const GET_RESTAURANTS_CATEGORIES_URL =
  WEBSITE_URL + "/api/get-all-restaurants-categories";
export const GET_FILTERED_RESTAURANTS_URL =
  WEBSITE_URL + "/api/get-filtered-restaurants";
export const GET_RESTAURANTS_SLIDES_URL =
  WEBSITE_URL + "/api/get-restaurant-category-slides";
export const GET_ALERTS_URL = WEBSITE_URL + "/api/get-user-notifications";
export const MARK_ALL_NOTIFICATIONS_READ_URL =
  WEBSITE_URL + "/api/mark-all-notifications-read";
export const MARK_ONE_NOTIFICATION_READ_URL =
  WEBSITE_URL + "/api/mark-one-notification-read";
export const CHECK_CART_ITEMS_AVAILABILITY_URL =
  WEBSITE_URL + "/api/check-cart-items-availability";

export const STRIPE_PAYMENT = WEBSITE_URL + "/api/accept-stripe-payment";
export const STRIPE_PAYMENT_CAPTURE =
  WEBSITE_URL + "/api/stripe-redirect-capture";

export const PAYMONGO_PAYMENT_URL =
  WEBSITE_URL + "/api/payment/process-paymongo";

export const MERCADOPAGO_PAYMENT_URL =
  WEBSITE_URL + "/api/payment/process-mercado-pago";

export const KHALTI_PAYMENT_VERIFICATION_URL =
  WEBSITE_URL + "/api/payment/verify-khalti-payment";

export const GET_REVIEWS_OF_STORE_URL = WEBSITE_URL + "/api/get-store-reviews";
export const GET_SINGLE_ORDER_TO_BE_RATED =
  WEBSITE_URL + "/api/single-ratable-order";
export const GET_RATABLE_ORDER_DETAILS_URL =
  WEBSITE_URL + "/api/get-ratable-order";
export const ADD_RATING_URL = WEBSITE_URL + "/api/rate-order";
export const ADD_TO_FAVORITE_RESTAURANT_URL =
  WEBSITE_URL + "/api/toggle-favorite";
export const GET_FAVORITE_RESTAURANTS_URL =
  WEBSITE_URL + "/api/get-favorite-stores";
export const GET_FAVORITE_RESTAURANT_FOR_LOGGED_IN_URL =
  WEBSITE_URL + "/api/get-restaurant-info-with-favourite";
export const SAVE_VAT_NUMBER_URL = WEBSITE_URL + "/api/update-tax-number";

export const LOGIN_USER_WITH_OTP_URL = WEBSITE_URL + "/api/login-with-otp";
export const GENERATE_OTP_FOR_LOGIN_URL =
  WEBSITE_URL + "/api/generate-otp-for-login";

/* Delivery URLs */
export const LOGIN_DELIVERY_USER_URL = WEBSITE_URL + "/api/delivery/login";
export const UPDATE_DELIVERY_USER_INFO_URL =
  WEBSITE_URL + "/api/delivery/update-user-info";
export const GET_DELIVERY_ORDERS_URL =
  WEBSITE_URL + "/api/delivery/get-delivery-orders";
export const GET_SINGLE_DELIVERY_ORDER_URL =
  WEBSITE_URL + "/api/delivery/get-single-delivery-order";
export const SEND_DELIVERY_GUY_GPS_LOCATION_URL =
  WEBSITE_URL + "/api/delivery/set-delivery-guy-gps-location";
export const GET_DELIVERY_GUY_GPS_LOCATION_URL =
  WEBSITE_URL + "/api/delivery/get-delivery-guy-gps-location";
export const ACCEPT_TO_DELIVER_URL =
  WEBSITE_URL + "/api/delivery/accept-to-deliver";
export const PICKEDUP_ORDER_URL = WEBSITE_URL + "/api/delivery/pickedup-order";
export const DELIVER_ORDER_URL = WEBSITE_URL + "/api/delivery/deliver-order";
export const TOGGLE_DELIVERY_GUY_STATUS_URL =
  WEBSITE_URL + "/api/delivery/toggle-delivery-guy-status";
export const DELIVERY_COMPLETED_ORDERS_URL =
  WEBSITE_URL + "/api/delivery/get-completed-orders";

/* Module URLs*/
export const ADMIN_LOGIN_AS_CUSTOMER_URL =
  WEBSITE_URL + "/callandorder/login-as-customer";
export const REGISTER_GUEST_USER_URL =
  WEBSITE_URL + "/callandorder/register-guest-user";
