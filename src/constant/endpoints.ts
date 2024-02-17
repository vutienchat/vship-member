export const Endpoints = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh-token',
  },
  products: {
    search: '/product/search',
    detail: '/product/detail',
    create: '/product/create',
    update: '/product/update',
    disable: '/product/disable',
    delete: '/product/delete',
  },
  sender: {
    search: '/sender/search',
    update: '/sender/update',
    delete: '/sender/delete',
    count: '/order/searchstatus/count',
    create: '/sender/create',
  },
  address: {
    wards: '/address/wards',
    district: '/address/district',
    city: '/address/city',
    search: 'sender/search',
    update: '/sender/update',
    delete: '/sender/delete',
    addressList: 'address/list',
  },
  orders: {
    detail: '/order/view_detail_order',
    createOrderBulk: '/order/create-order-in-bulk',
    shippingType: '/order/get-all-jp-shipping-type',
    createSingleOrder: '/order/create-single-order',
    getEstimateShippingFee: '/order/calculate-estimate-shipping-fee',
  },
} as const;
