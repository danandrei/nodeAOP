import {beforeMethod, Metadata} from 'aspect.js';

export class LoggerAspect {
  @beforeMethod({
    classNamePattern: /^PagesController/,
    methodNamePattern: /^(get|set)/
  })
  invokeBeforeMethod(meta: Metadata) {
    console.log(`[LOG] Called ${meta.className}.${meta.method.name}`);
  }
}
