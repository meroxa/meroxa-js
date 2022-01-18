"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Client_client, _Client_apiVersion;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Client {
    constructor(options) {
        var _a;
        _Client_client.set(this, void 0);
        _Client_apiVersion.set(this, "v1");
        this.connectors = {
            /**
             * Returns a given connector.
             * @param nameOrID
             */
            get: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/connectors/${nameOrID}`);
                return response.data;
            }),
            /**
             * Returns a list of all connectors.
             */
            list: () => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/connectors`);
                return response.data;
            }),
            /**
             * Deletes a connector by name or ID.
             * @param nameOrID
             */
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/connectors/${nameOrID}`);
            }),
            /**
             * Creates a new connector.
             * @param {}
             */
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post(`/connectors`, params);
                return response.data;
            }),
            update: (nameOrID, params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").put(`/connectors/${nameOrID}`, params);
                return response.data;
            }),
        };
        this.functions = {
            /**
             * Returns a given function.
             * @param nameOrID function name or ID
             */
            get: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/functions/${nameOrID}`);
                return response.data;
            }),
            /**
             * Returns a list of all functions.
             */
            list: () => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/functions`);
                return response.data;
            }),
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/functions/${nameOrID}`);
            }),
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post(`/functions`, params);
                return response.data;
            }),
            update: (nameOrID, params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").put(`/functions/${nameOrID}`, params);
                return response.data;
            }),
        };
        this.pipelines = {
            get: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/pipelines/${nameOrID}`);
                return response.data;
            }),
            list: () => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get("/pipelines");
                return response.data;
            }),
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/pipelines/${nameOrID}`);
            }),
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post("/pipelines", params);
                return response.data;
            }),
            update: (nameOrID, params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").put(`/pipelines/${nameOrID}`, params);
                return response.data;
            }),
        };
        this.resources = {
            get: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/resources/${nameOrID}`);
                return response.data;
            }),
            list: () => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get("/resources");
                return response.data;
            }),
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/resources/${nameOrID}`);
            }),
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post("/resources", params);
                return response.data;
            }),
            update: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").put(`/resources/${params.name}`, params);
                return response.data;
            }),
        };
        this.users = {
            /**
             * Returns your user profile.
             */
            me: () => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get("/users/me");
                return response.data;
            }),
        };
        __classPrivateFieldSet(this, _Client_client, axios_1.default.create({
            baseURL: `https://api.meroxa.io/${__classPrivateFieldGet(this, _Client_apiVersion, "f")}`,
            timeout: (_a = options === null || options === void 0 ? void 0 : options.timeoutMs) !== null && _a !== void 0 ? _a : 10000,
            headers: { Authorization: `Bearer ${options.auth}` },
        }), "f");
    }
}
exports.default = Client;
_Client_client = new WeakMap(), _Client_apiVersion = new WeakMap();
