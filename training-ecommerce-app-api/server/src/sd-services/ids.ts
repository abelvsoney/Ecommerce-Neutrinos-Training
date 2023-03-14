let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import * as sd_XTmkOXZwqZrX5t5T from './idsutil'; //_splitter_
//append_imports_end
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_rGwep4Ok1rcO5uJ9(bh, parentSpanInst);
          //appendnew_next_sd_Umn60E4mzToEVIks
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Umn60E4mzToEVIks');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_3a5QuzCDMbwpOfTY(bh, parentSpanInst);
          //appendnew_next_sd_CuZpkyhwJiGcQOaw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CuZpkyhwJiGcQOaw');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Hi8Z0s9Xev4KGkqo(bh, parentSpanInst);
          //appendnew_next_sd_uiLqzLt7KxkDYmp4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uiLqzLt7KxkDYmp4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_jkWtUAPwQNA3GbKw(bh, parentSpanInst);
          //appendnew_next_sd_VUA84wCrvjRZMI5b
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VUA84wCrvjRZMI5b');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_CIXTHhGyMFHCK704(bh, parentSpanInst);
          //appendnew_next_sd_yWCy99PYSHJO0CcJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yWCy99PYSHJO0CcJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_9UJPHc0l2Mwwsxgp(bh, parentSpanInst);
          //appendnew_next_sd_HhEZqZZ0MSXPxmHc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HhEZqZZ0MSXPxmHc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_uzHVIGEMNTKS8gwT(bh, parentSpanInst);
          //appendnew_next_sd_gu4uGjl2elsRuXYV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gu4uGjl2elsRuXYV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_Hi8Z0s9Xev4KGkqo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hi8Z0s9Xev4KGkqo',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Jw4UXGUL0WvKFH91(bh, parentSpanInst);
      //appendnew_next_sd_Hi8Z0s9Xev4KGkqo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hi8Z0s9Xev4KGkqo',
        spanInst,
        'sd_Hi8Z0s9Xev4KGkqo'
      );
    }
  }

  async sd_Jw4UXGUL0WvKFH91(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jw4UXGUL0WvKFH91',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PYuAzf8234prZulz(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qIXe54Y6NYbWzQxk(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jw4UXGUL0WvKFH91',
        spanInst,
        'sd_Jw4UXGUL0WvKFH91'
      );
    }
  }

  async sd_PYuAzf8234prZulz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PYuAzf8234prZulz',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8OO7XiBg7e5R7rN4(bh, parentSpanInst);
      //appendnew_next_sd_PYuAzf8234prZulz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PYuAzf8234prZulz',
        spanInst,
        'sd_PYuAzf8234prZulz'
      );
    }
  }

  async sd_8OO7XiBg7e5R7rN4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8OO7XiBg7e5R7rN4',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MyG9rgyxd4lOyOCM(bh, parentSpanInst);
      //appendnew_next_sd_8OO7XiBg7e5R7rN4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8OO7XiBg7e5R7rN4',
        spanInst,
        'sd_8OO7XiBg7e5R7rN4'
      );
    }
  }

  async sd_MyG9rgyxd4lOyOCM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MyG9rgyxd4lOyOCM',
      parentSpanInst
    );
    try {
      const sd_XTmkOXZwqZrX5t5TInstance: sd_XTmkOXZwqZrX5t5T.idsutil =
        sd_XTmkOXZwqZrX5t5T.idsutil.getInstance();
      let outputVariables =
        await sd_XTmkOXZwqZrX5t5TInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XqWxrWbfIHfyb1G9(bh, parentSpanInst);
      //appendnew_next_sd_MyG9rgyxd4lOyOCM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MyG9rgyxd4lOyOCM',
        spanInst,
        'sd_MyG9rgyxd4lOyOCM'
      );
    }
  }

  async sd_XqWxrWbfIHfyb1G9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XqWxrWbfIHfyb1G9',
      parentSpanInst
    );
    try {
      const sd_XTmkOXZwqZrX5t5TInstance: sd_XTmkOXZwqZrX5t5T.idsutil =
        sd_XTmkOXZwqZrX5t5T.idsutil.getInstance();
      let outputVariables =
        await sd_XTmkOXZwqZrX5t5TInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tI25sBfMKbsSQDwq(bh, parentSpanInst);
      //appendnew_next_sd_XqWxrWbfIHfyb1G9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XqWxrWbfIHfyb1G9',
        spanInst,
        'sd_XqWxrWbfIHfyb1G9'
      );
    }
  }

  async sd_tI25sBfMKbsSQDwq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tI25sBfMKbsSQDwq',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_3l9jDA6MTtEwSxoN(bh, parentSpanInst);
      //appendnew_next_sd_tI25sBfMKbsSQDwq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tI25sBfMKbsSQDwq',
        spanInst,
        'sd_tI25sBfMKbsSQDwq'
      );
    }
  }

  async sd_3l9jDA6MTtEwSxoN(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3l9jDA6MTtEwSxoN');
    }
  }

  async sd_qIXe54Y6NYbWzQxk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qIXe54Y6NYbWzQxk',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vbU6hxMCA9nCN8yT(bh, parentSpanInst);
      //appendnew_next_sd_qIXe54Y6NYbWzQxk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qIXe54Y6NYbWzQxk',
        spanInst,
        'sd_qIXe54Y6NYbWzQxk'
      );
    }
  }

  async sd_vbU6hxMCA9nCN8yT(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vbU6hxMCA9nCN8yT');
    }
  }

  async sd_rGwep4Ok1rcO5uJ9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rGwep4Ok1rcO5uJ9',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ep561lVDn5tj0tuR(bh, parentSpanInst);
      //appendnew_next_sd_rGwep4Ok1rcO5uJ9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rGwep4Ok1rcO5uJ9',
        spanInst,
        'sd_rGwep4Ok1rcO5uJ9'
      );
    }
  }

  async sd_ep561lVDn5tj0tuR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ep561lVDn5tj0tuR',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ep561lVDn5tj0tuR',
        spanInst,
        'sd_ep561lVDn5tj0tuR'
      );
    }
  }

  async sd_jkWtUAPwQNA3GbKw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jkWtUAPwQNA3GbKw',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lh4eFcVVdvjkb502(bh, parentSpanInst);
      //appendnew_next_sd_jkWtUAPwQNA3GbKw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jkWtUAPwQNA3GbKw',
        spanInst,
        'sd_jkWtUAPwQNA3GbKw'
      );
    }
  }

  async sd_lh4eFcVVdvjkb502(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lh4eFcVVdvjkb502',
      parentSpanInst
    );
    try {
      const sd_XTmkOXZwqZrX5t5TInstance: sd_XTmkOXZwqZrX5t5T.idsutil =
        sd_XTmkOXZwqZrX5t5T.idsutil.getInstance();
      let outputVariables =
        await sd_XTmkOXZwqZrX5t5TInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KaT2FXHG47jUmTKr(bh, parentSpanInst);
      //appendnew_next_sd_lh4eFcVVdvjkb502
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lh4eFcVVdvjkb502',
        spanInst,
        'sd_lh4eFcVVdvjkb502'
      );
    }
  }

  async sd_KaT2FXHG47jUmTKr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KaT2FXHG47jUmTKr',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RV36rugbatKkPtU5(bh, parentSpanInst);
      //appendnew_next_sd_KaT2FXHG47jUmTKr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KaT2FXHG47jUmTKr',
        spanInst,
        'sd_KaT2FXHG47jUmTKr'
      );
    }
  }

  async sd_RV36rugbatKkPtU5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RV36rugbatKkPtU5',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_snO11icWFcp6Kyve(bh, parentSpanInst);
      //appendnew_next_sd_RV36rugbatKkPtU5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RV36rugbatKkPtU5',
        spanInst,
        'sd_RV36rugbatKkPtU5'
      );
    }
  }

  async sd_snO11icWFcp6Kyve(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_snO11icWFcp6Kyve',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aUfXF7vFna3l1233(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_LMbV4lwFxCHp6Rf1(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_snO11icWFcp6Kyve',
        spanInst,
        'sd_snO11icWFcp6Kyve'
      );
    }
  }

  async sd_aUfXF7vFna3l1233(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aUfXF7vFna3l1233',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HCPYMEsYjDBhR8wa(bh, parentSpanInst);
      //appendnew_next_sd_aUfXF7vFna3l1233
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aUfXF7vFna3l1233',
        spanInst,
        'sd_aUfXF7vFna3l1233'
      );
    }
  }

  async sd_HCPYMEsYjDBhR8wa(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HCPYMEsYjDBhR8wa');
    }
  }

  async sd_LMbV4lwFxCHp6Rf1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LMbV4lwFxCHp6Rf1',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UAZF31Dw3qbN4S1B(bh, parentSpanInst);
      //appendnew_next_sd_LMbV4lwFxCHp6Rf1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LMbV4lwFxCHp6Rf1',
        spanInst,
        'sd_LMbV4lwFxCHp6Rf1'
      );
    }
  }

  async sd_UAZF31Dw3qbN4S1B(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UAZF31Dw3qbN4S1B');
    }
  }

  async sd_CIXTHhGyMFHCK704(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CIXTHhGyMFHCK704',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_zqE2YmSS38jXgryi(bh, parentSpanInst);
      //appendnew_next_sd_CIXTHhGyMFHCK704
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CIXTHhGyMFHCK704',
        spanInst,
        'sd_CIXTHhGyMFHCK704'
      );
    }
  }

  async sd_zqE2YmSS38jXgryi(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zqE2YmSS38jXgryi');
    }
  }

  async sd_6sx2UMS6rhZRP15Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6sx2UMS6rhZRP15Q',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6sx2UMS6rhZRP15Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6sx2UMS6rhZRP15Q',
        spanInst,
        'sd_6sx2UMS6rhZRP15Q'
      );
    }
  }

  async sd_9UJPHc0l2Mwwsxgp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9UJPHc0l2Mwwsxgp',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xUwSeOnQ9qgFhcdl(bh, parentSpanInst);
      //appendnew_next_sd_9UJPHc0l2Mwwsxgp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9UJPHc0l2Mwwsxgp',
        spanInst,
        'sd_9UJPHc0l2Mwwsxgp'
      );
    }
  }

  async sd_xUwSeOnQ9qgFhcdl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xUwSeOnQ9qgFhcdl',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eHDQBZ0bcGFegbp4(bh, parentSpanInst);
      //appendnew_next_sd_xUwSeOnQ9qgFhcdl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xUwSeOnQ9qgFhcdl',
        spanInst,
        'sd_xUwSeOnQ9qgFhcdl'
      );
    }
  }

  async sd_eHDQBZ0bcGFegbp4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eHDQBZ0bcGFegbp4',
      parentSpanInst
    );
    try {
      const sd_XTmkOXZwqZrX5t5TInstance: sd_XTmkOXZwqZrX5t5T.idsutil =
        sd_XTmkOXZwqZrX5t5T.idsutil.getInstance();
      let outputVariables =
        await sd_XTmkOXZwqZrX5t5TInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B6Sp44PX9bBa6jBV(bh, parentSpanInst);
      //appendnew_next_sd_eHDQBZ0bcGFegbp4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eHDQBZ0bcGFegbp4',
        spanInst,
        'sd_eHDQBZ0bcGFegbp4'
      );
    }
  }

  async sd_B6Sp44PX9bBa6jBV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B6Sp44PX9bBa6jBV',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_W5cIvlOrGffD3hdj(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_34xdjTLWNlyS5GBk(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B6Sp44PX9bBa6jBV',
        spanInst,
        'sd_B6Sp44PX9bBa6jBV'
      );
    }
  }

  async sd_W5cIvlOrGffD3hdj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W5cIvlOrGffD3hdj',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_W5cIvlOrGffD3hdj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W5cIvlOrGffD3hdj',
        spanInst,
        'sd_W5cIvlOrGffD3hdj'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cQKaMRocJk62DWt7(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_cQKaMRocJk62DWt7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cQKaMRocJk62DWt7');
    }
  }

  async sd_34xdjTLWNlyS5GBk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_34xdjTLWNlyS5GBk',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cQKaMRocJk62DWt7(bh, parentSpanInst);
      //appendnew_next_sd_34xdjTLWNlyS5GBk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_34xdjTLWNlyS5GBk',
        spanInst,
        'sd_34xdjTLWNlyS5GBk'
      );
    }
  }

  async sd_uzHVIGEMNTKS8gwT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uzHVIGEMNTKS8gwT',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1ynl893ie2U4FFdE(bh, parentSpanInst);
      //appendnew_next_sd_uzHVIGEMNTKS8gwT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uzHVIGEMNTKS8gwT',
        spanInst,
        'sd_uzHVIGEMNTKS8gwT'
      );
    }
  }

  async sd_1ynl893ie2U4FFdE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1ynl893ie2U4FFdE',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gatwv5lYgFMJugJx(bh, parentSpanInst);
      //appendnew_next_sd_1ynl893ie2U4FFdE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ynl893ie2U4FFdE',
        spanInst,
        'sd_1ynl893ie2U4FFdE'
      );
    }
  }

  async sd_gatwv5lYgFMJugJx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gatwv5lYgFMJugJx',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_AhvsU5Cz7HQKn7Cq(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rK6Hk20BYEEvun64(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gatwv5lYgFMJugJx',
        spanInst,
        'sd_gatwv5lYgFMJugJx'
      );
    }
  }

  async sd_AhvsU5Cz7HQKn7Cq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AhvsU5Cz7HQKn7Cq',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_2f94mP6DB6yCiKqE(bh, parentSpanInst);
      //appendnew_next_sd_AhvsU5Cz7HQKn7Cq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AhvsU5Cz7HQKn7Cq',
        spanInst,
        'sd_AhvsU5Cz7HQKn7Cq'
      );
    }
  }

  async sd_2f94mP6DB6yCiKqE(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2f94mP6DB6yCiKqE');
    }
  }

  async sd_rK6Hk20BYEEvun64(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rK6Hk20BYEEvun64',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dlvEulRspZev7lUF(bh, parentSpanInst);
      //appendnew_next_sd_rK6Hk20BYEEvun64
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rK6Hk20BYEEvun64',
        spanInst,
        'sd_rK6Hk20BYEEvun64'
      );
    }
  }

  async sd_dlvEulRspZev7lUF(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dlvEulRspZev7lUF');
    }
  }

  async sd_3a5QuzCDMbwpOfTY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3a5QuzCDMbwpOfTY',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3feV4Z9nRJRJUIWN(bh, parentSpanInst);
      //appendnew_next_sd_3a5QuzCDMbwpOfTY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3a5QuzCDMbwpOfTY',
        spanInst,
        'sd_3a5QuzCDMbwpOfTY'
      );
    }
  }

  async sd_3feV4Z9nRJRJUIWN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3feV4Z9nRJRJUIWN',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KdpiiXfqvs3NxQ0d(bh, parentSpanInst);
      //appendnew_next_sd_3feV4Z9nRJRJUIWN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3feV4Z9nRJRJUIWN',
        spanInst,
        'sd_3feV4Z9nRJRJUIWN'
      );
    }
  }

  async sd_KdpiiXfqvs3NxQ0d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KdpiiXfqvs3NxQ0d',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nB8RLQcSQTZBjaCv(bh, parentSpanInst);
      //appendnew_next_sd_KdpiiXfqvs3NxQ0d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KdpiiXfqvs3NxQ0d',
        spanInst,
        'sd_KdpiiXfqvs3NxQ0d'
      );
    }
  }

  async sd_nB8RLQcSQTZBjaCv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nB8RLQcSQTZBjaCv',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xh6lhksi4EEhBDqz(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BngcvG7aDEJFXGb2(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nB8RLQcSQTZBjaCv',
        spanInst,
        'sd_nB8RLQcSQTZBjaCv'
      );
    }
  }

  async sd_xh6lhksi4EEhBDqz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xh6lhksi4EEhBDqz',
      parentSpanInst
    );
    try {
      const sd_XTmkOXZwqZrX5t5TInstance: sd_XTmkOXZwqZrX5t5T.idsutil =
        sd_XTmkOXZwqZrX5t5T.idsutil.getInstance();
      let outputVariables = await sd_XTmkOXZwqZrX5t5TInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IFtqXCfHz9ppgXFo(bh, parentSpanInst);
      //appendnew_next_sd_xh6lhksi4EEhBDqz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xh6lhksi4EEhBDqz',
        spanInst,
        'sd_xh6lhksi4EEhBDqz'
      );
    }
  }

  async sd_IFtqXCfHz9ppgXFo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IFtqXCfHz9ppgXFo',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5kTu1ZoQjcR977s4(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_F2GutkSs6cZpz5ed(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IFtqXCfHz9ppgXFo',
        spanInst,
        'sd_IFtqXCfHz9ppgXFo'
      );
    }
  }

  async sd_5kTu1ZoQjcR977s4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5kTu1ZoQjcR977s4',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Yz7GDqP7Su1OWLSv(bh, parentSpanInst);
      //appendnew_next_sd_5kTu1ZoQjcR977s4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5kTu1ZoQjcR977s4',
        spanInst,
        'sd_5kTu1ZoQjcR977s4'
      );
    }
  }

  async sd_Yz7GDqP7Su1OWLSv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Yz7GDqP7Su1OWLSv',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dSUwGSSAhNfJtlJS(bh, parentSpanInst);
      //appendnew_next_sd_Yz7GDqP7Su1OWLSv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Yz7GDqP7Su1OWLSv',
        spanInst,
        'sd_Yz7GDqP7Su1OWLSv'
      );
    }
  }

  async sd_dSUwGSSAhNfJtlJS(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dSUwGSSAhNfJtlJS');
    }
  }

  async sd_F2GutkSs6cZpz5ed(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F2GutkSs6cZpz5ed',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Yy2430HOe2ihnelm(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_EcZKTX2oDdCs3kM5(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F2GutkSs6cZpz5ed',
        spanInst,
        'sd_F2GutkSs6cZpz5ed'
      );
    }
  }

  async sd_Yy2430HOe2ihnelm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Yy2430HOe2ihnelm',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_R3Lu7vm17MVFTPMK(bh, parentSpanInst);
      //appendnew_next_sd_Yy2430HOe2ihnelm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Yy2430HOe2ihnelm',
        spanInst,
        'sd_Yy2430HOe2ihnelm'
      );
    }
  }

  async sd_R3Lu7vm17MVFTPMK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R3Lu7vm17MVFTPMK',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EcZKTX2oDdCs3kM5(bh, parentSpanInst);
      //appendnew_next_sd_R3Lu7vm17MVFTPMK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R3Lu7vm17MVFTPMK',
        spanInst,
        'sd_R3Lu7vm17MVFTPMK'
      );
    }
  }

  async sd_EcZKTX2oDdCs3kM5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EcZKTX2oDdCs3kM5',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EcZKTX2oDdCs3kM5',
        spanInst,
        'sd_EcZKTX2oDdCs3kM5'
      );
    }
  }

  async sd_BngcvG7aDEJFXGb2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BngcvG7aDEJFXGb2',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PcXkC65zFJBtqsIP(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qWfc5YhsqHir9vo9(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BngcvG7aDEJFXGb2',
        spanInst,
        'sd_BngcvG7aDEJFXGb2'
      );
    }
  }

  async sd_PcXkC65zFJBtqsIP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PcXkC65zFJBtqsIP',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dSUwGSSAhNfJtlJS(bh, parentSpanInst);
      //appendnew_next_sd_PcXkC65zFJBtqsIP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PcXkC65zFJBtqsIP',
        spanInst,
        'sd_PcXkC65zFJBtqsIP'
      );
    }
  }

  async sd_qWfc5YhsqHir9vo9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qWfc5YhsqHir9vo9',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dSUwGSSAhNfJtlJS(bh, parentSpanInst);
      //appendnew_next_sd_qWfc5YhsqHir9vo9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qWfc5YhsqHir9vo9',
        spanInst,
        'sd_qWfc5YhsqHir9vo9'
      );
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_y2LEj3k3JDyjxSMz(bh, parentSpanInst)) ||
      (await this.sd_0oC0Tbv7hRlSOtm6(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_y2LEj3k3JDyjxSMz(bh, parentSpanInst) {
    const nodes = [
      'sd_XqWxrWbfIHfyb1G9',
      'sd_VUA84wCrvjRZMI5b',
      'sd_lh4eFcVVdvjkb502',
      'sd_KaT2FXHG47jUmTKr',
      'sd_jkWtUAPwQNA3GbKw',
      'sd_snO11icWFcp6Kyve',
      'sd_aUfXF7vFna3l1233',
      'sd_LMbV4lwFxCHp6Rf1',
      'sd_HCPYMEsYjDBhR8wa',
      'sd_UAZF31Dw3qbN4S1B',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_6sx2UMS6rhZRP15Q(bh, parentSpanInst);
      //appendnew_next_sd_y2LEj3k3JDyjxSMz
      return true;
    }
    return false;
  }
  async sd_0oC0Tbv7hRlSOtm6(bh, parentSpanInst) {
    const nodes = ['sd_xh6lhksi4EEhBDqz'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Yz7GDqP7Su1OWLSv(bh, parentSpanInst);
      //appendnew_next_sd_0oC0Tbv7hRlSOtm6
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
