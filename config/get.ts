// Do not edit this file, but instead config.json.

const USERSCRIPT_CONFIG = require("./config.json");

function get(key: string): string {
    if (USERSCRIPT_CONFIG[key] === undefined) {
        throw new Error(`Undefined userscript config key: ${key}`);
    } else {
        return USERSCRIPT_CONFIG[key];
    }
}

export default get;
