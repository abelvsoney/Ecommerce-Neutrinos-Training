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
//append_imports_end
export class idsutil {
  public client: any;
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(parentSpanInst, clientInstance = null, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getIDSClientInstance',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          clientInstance: clientInstance,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pL8PgCWPnfD2ZC3N(bh, parentSpanInst);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eE5WzWcJG4OMlOPa',
        spanInst,
        'getIDSClientInstance'
      );
    }
  }

  async getAuthorizationParams(parentSpanInst, authParams = null, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAuthorizationParams',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          authParams: authParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7YL6DXa7u6TVTwOf(bh, parentSpanInst);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FZjLg5syr6AcNFDR',
        spanInst,
        'getAuthorizationParams'
      );
    }
  }

  async handleTokenExpiry(
    parentSpanInst,
    existingSession = '',
    newSession = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'handleTokenExpiry',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          existingSession: existingSession,
          newSession: newSession,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Td7SEkoGS5kQ5exT(bh, parentSpanInst);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uisU5DsHL8DPZSDT',
        spanInst,
        'handleTokenExpiry'
      );
    }
  }

  //appendnew_flow_idsutil_start

  async sd_pL8PgCWPnfD2ZC3N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pL8PgCWPnfD2ZC3N',
      parentSpanInst
    );
    try {
      bh.local.client = this.client;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NDvR3YN7qjsaaO0E(bh, parentSpanInst);
      //appendnew_next_sd_pL8PgCWPnfD2ZC3N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pL8PgCWPnfD2ZC3N',
        spanInst,
        'sd_pL8PgCWPnfD2ZC3N'
      );
    }
  }

  async sd_NDvR3YN7qjsaaO0E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NDvR3YN7qjsaaO0E',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J9L3oEbqPtl8tfbi(bh, parentSpanInst);
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
        bh = await this.sd_g3t4TAmkHspW7nTf(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DzVdFJ7acpyFNEdR',
        spanInst,
        'sd_NDvR3YN7qjsaaO0E'
      );
    }
  }

  async sd_J9L3oEbqPtl8tfbi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J9L3oEbqPtl8tfbi',
      parentSpanInst
    );
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = parseInt(
        process.env.CLOCK_TOLERANCE.toString()
      );
      log.info('Client connected...');
      bh.input.clientInstance = client;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XvaJZKDS76ab2hmv(bh, parentSpanInst);
      //appendnew_next_sd_J9L3oEbqPtl8tfbi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bQ6Y70U5azDLOk7p',
        spanInst,
        'sd_J9L3oEbqPtl8tfbi'
      );
    }
  }

  async sd_XvaJZKDS76ab2hmv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XvaJZKDS76ab2hmv',
      parentSpanInst
    );
    try {
      this.client = bh.input.clientInstance;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_XvaJZKDS76ab2hmv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XvaJZKDS76ab2hmv',
        spanInst,
        'sd_XvaJZKDS76ab2hmv'
      );
    }
  }

  async sd_g3t4TAmkHspW7nTf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g3t4TAmkHspW7nTf',
      parentSpanInst
    );
    try {
      bh.input.clientInstance = this.client;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_g3t4TAmkHspW7nTf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g3t4TAmkHspW7nTf',
        spanInst,
        'sd_g3t4TAmkHspW7nTf'
      );
    }
  }

  async sd_7YL6DXa7u6TVTwOf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7YL6DXa7u6TVTwOf',
      parentSpanInst
    );
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_7YL6DXa7u6TVTwOf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DowGSPAUXKKwg8nU',
        spanInst,
        'sd_7YL6DXa7u6TVTwOf'
      );
    }
  }

  async sd_Td7SEkoGS5kQ5exT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Td7SEkoGS5kQ5exT',
      parentSpanInst
    );
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k3DExrGQArMQa22b(bh, parentSpanInst);
      //appendnew_next_sd_Td7SEkoGS5kQ5exT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FKFEfqZhi3nTCpgW',
        spanInst,
        'sd_Td7SEkoGS5kQ5exT'
      );
    }
  }

  async sd_k3DExrGQArMQa22b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k3DExrGQArMQa22b',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5nD65FpeyZEpXupm(bh, parentSpanInst);
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
        bh = await this.sd_nBCUXYI1J1IjPR1x(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iwuYXQpLvJN47izB',
        spanInst,
        'sd_k3DExrGQArMQa22b'
      );
    }
  }

  async sd_5nD65FpeyZEpXupm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5nD65FpeyZEpXupm',
      parentSpanInst
    );
    try {
      bh.input.newSession = bh.input.existingSession.data;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5nD65FpeyZEpXupm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ubdhw1UwQSdlCkss',
        spanInst,
        'sd_5nD65FpeyZEpXupm'
      );
    }
  }

  async sd_nBCUXYI1J1IjPR1x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nBCUXYI1J1IjPR1x',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getIDSClientInstance(
        spanInst,
        undefined
      );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qL9Mviy7F4sc2t67(bh, parentSpanInst);
      //appendnew_next_sd_nBCUXYI1J1IjPR1x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p3JqP6eVbyCHdIfz',
        spanInst,
        'sd_nBCUXYI1J1IjPR1x'
      );
    }
  }

  async sd_qL9Mviy7F4sc2t67(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qL9Mviy7F4sc2t67',
      parentSpanInst
    );
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ASHgsZiMGqDcx0SB(bh, parentSpanInst);
      //appendnew_next_sd_qL9Mviy7F4sc2t67
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_elfcaZSsFwXQwkR4',
        spanInst,
        'sd_qL9Mviy7F4sc2t67'
      );
    }
  }

  async sd_ASHgsZiMGqDcx0SB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ASHgsZiMGqDcx0SB',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J6XKRgByHasFBSp8(bh, parentSpanInst);
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
        bh = await this.sd_EgUC5B8p6Vp4y70s(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Nd6OnaMok2E6hc5L',
        spanInst,
        'sd_ASHgsZiMGqDcx0SB'
      );
    }
  }

  async sd_J6XKRgByHasFBSp8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J6XKRgByHasFBSp8',
      parentSpanInst
    );
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_J6XKRgByHasFBSp8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RG9h2soDdxXtf3vD',
        spanInst,
        'sd_J6XKRgByHasFBSp8'
      );
    }
  }

  async sd_EgUC5B8p6Vp4y70s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EgUC5B8p6Vp4y70s',
      parentSpanInst
    );
    try {
      bh.input.newSession = false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_EgUC5B8p6Vp4y70s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Re6TwrFh8VdvgGb2',
        spanInst,
        'sd_EgUC5B8p6Vp4y70s'
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
      (await this.sd_2s9kHzKnbejHisiz(bh, parentSpanInst))
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
  async sd_2s9kHzKnbejHisiz(bh, parentSpanInst) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_EgUC5B8p6Vp4y70s(bh, parentSpanInst);
      //appendnew_next_sd_2s9kHzKnbejHisiz
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
