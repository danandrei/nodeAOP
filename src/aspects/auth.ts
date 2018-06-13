import {beforeMethod, onThrowOfMethod, Metadata} from 'aspect.js';

export class AuthAspect {
  @beforeMethod({
    classNamePattern: /^(PagesController|CarsController)/,
    methodNamePattern: /^(getAdminPage|logout|getNewPage|createCar)/
  })
  invokeBeforeMethod(meta: Metadata) {
    const method = meta.method;
    const session = method.args[0].session;

    if (!session.user) {
      throw new Error('401 Unauthorized');
    }
    //console.log(`[LOG] Called ${meta.className}.${meta.method.name}`);
  }
}
