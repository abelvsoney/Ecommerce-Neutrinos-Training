export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'EC5Ffm-ttx5Ttf1CLBrD_',
    client_secret:
      '0vgxSb-a85U-m9PdBXpkt9Ul1O8BFxx1nbywZ4Ycs3hBwfuVv4u8RgIkWu7mFWuBRnjVy-232kncZff6BVN1gg',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
