import { formatObjKey } from './formatObjKey';

export async function setSTSOptions(this: any) {
  if (!this.options) this.options = {};
  let credentials = await this.options.getSTS();
  credentials = formatObjKey(credentials, 'firstLowerCase');
  if (credentials.securityToken) {
    credentials.stsToken = credentials.securityToken;
  }
  Object.assign(this.options, credentials);
}
