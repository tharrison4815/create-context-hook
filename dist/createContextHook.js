"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContextHook = void 0;
const react_1 = require("react");
const createContextHook = (defaultValue) => {
    const context = (0, react_1.createContext)(defaultValue);
    const useCreatedContext = () => (0, react_1.useContext)(context);
    return [useCreatedContext, context.Provider];
};
exports.createContextHook = createContextHook;
//# sourceMappingURL=createContextHook.js.map