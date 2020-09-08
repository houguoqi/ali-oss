"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSTSOptions = void 0;
const formatObjKey_1 = require("./formatObjKey");
async function setSTSOptions() {
    if (!this.options)
        this.options = {};
    let credentials = await this.options.getSTS();
    credentials = formatObjKey_1.formatObjKey(credentials, 'firstLowerCase');
    if (credentials.securityToken) {
        credentials.stsToken = credentials.securityToken;
    }
    Object.assign(this.options, credentials);
}
exports.setSTSOptions = setSTSOptions;
