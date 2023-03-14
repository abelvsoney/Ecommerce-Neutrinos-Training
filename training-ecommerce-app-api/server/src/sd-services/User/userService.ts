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
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class userService {
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
    this.serviceName = 'userService';
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
      instance = new userService(
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
      //appendnew_flow_userService_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: userService');

    //appendnew_flow_userService_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: userService');

    this.app['get'](
      `${this.serviceBasePath}/products`,
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
          bh = await this.sd_a972KvqsTn2Hht9H(bh, parentSpanInst);
          //appendnew_next_sd_BPHuqD6NfaZdO0TK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BPHuqD6NfaZdO0TK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/product`,
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
          bh = await this.sd_rx1GbCOA7jVCJCho(bh, parentSpanInst);
          //appendnew_next_sd_lgzXU4dWrFPnXJd2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lgzXU4dWrFPnXJd2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_userService_HttpIn
  }
  //   service flows_userService

  //appendnew_flow_userService_start

  async sd_a972KvqsTn2Hht9H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a972KvqsTn2Hht9H',
      parentSpanInst
    );
    try {
      bh.local.query = {};
      bh.local.pcollection = 'products';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vIqzgXOlia6dfZFe(bh, parentSpanInst);
      //appendnew_next_sd_a972KvqsTn2Hht9H
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a972KvqsTn2Hht9H',
        spanInst,
        'sd_a972KvqsTn2Hht9H'
      );
    }
  }

  async sd_vIqzgXOlia6dfZFe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vIqzgXOlia6dfZFe',
      parentSpanInst
    );
    try {
      bh.local.products = await MongoPersistance.getInstance().find(
        'sd_UkTXyWw7GqFTvufj',
        bh.local.pcollection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LzoBNkJPJpvoxp22(bh, parentSpanInst);
      //appendnew_next_sd_vIqzgXOlia6dfZFe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vIqzgXOlia6dfZFe',
        spanInst,
        'sd_vIqzgXOlia6dfZFe'
      );
    }
  }

  async sd_LzoBNkJPJpvoxp22(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.products);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LzoBNkJPJpvoxp22');
    }
  }

  async sd_rx1GbCOA7jVCJCho(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rx1GbCOA7jVCJCho',
      parentSpanInst
    );
    try {
      // bh.local.query = {};
      bh.local.pcollection = 'products';
      console.log('api called');
      console.log(bh.input.body);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7LyOl3c3kdup2iCb(bh, parentSpanInst);
      //appendnew_next_sd_rx1GbCOA7jVCJCho
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rx1GbCOA7jVCJCho',
        spanInst,
        'sd_rx1GbCOA7jVCJCho'
      );
    }
  }

  async sd_7LyOl3c3kdup2iCb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7LyOl3c3kdup2iCb',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_UkTXyWw7GqFTvufj',
        bh.local.pcollection,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8wsvdX7MfnrmIf4n(bh, parentSpanInst);
      //appendnew_next_sd_7LyOl3c3kdup2iCb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7LyOl3c3kdup2iCb',
        spanInst,
        'sd_7LyOl3c3kdup2iCb'
      );
    }
  }

  async sd_8wsvdX7MfnrmIf4n(bh, parentSpanInst) {
    try {
      bh.web.res.status(201).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8wsvdX7MfnrmIf4n');
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
      false
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
  //appendnew_flow_userService_Catch
}
