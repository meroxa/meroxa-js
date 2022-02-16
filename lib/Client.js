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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Client_client;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Client {
    constructor(options) {
        var _a;
        _Client_client.set(this, void 0);
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
             * @param {string} nameOrID - The name or ID of the connector to delete.
             */
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/connectors/${nameOrID}`);
            }),
            /**
             * Creates a new connector.
             * @param {Object} params
             * @param {string} params.name - The name of the connector.
             * @param {string} params.type - The type of the connector.
             * @param {number} params.resource_id - The ID of the resource to which the connector belongs.
             * @param {Object} [params.config] - The configuration of the connector.
             * @param {Object} [params.metadata] - The metadata of the connector.
             */
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post(`/connectors`, params);
                return response.data;
            }),
            /**
             * Updates a connector.
             * @param nameOrID
             * @param params
             */
            update: (nameOrID, params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").put(`/connectors/${nameOrID}`, params);
                return response.data;
            }),
        };
        this.functions = {
            /**
             * Returns a given function.
             * @param {string} nameOrID - The name or ID of the function.
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
            /**
             * Deletes a function by name or ID.
             * @param nameOrID - The name or ID of the function.
             */
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/functions/${nameOrID}`);
            }),
            /**
             * Creates a new function.
             * @param {Object} params - The parameters of the function.
             * @param {string} params.input_stream - The name of the input stream.
             * @param {string} params.image - The name of the image.
             * @param {string[]} params.args - The arguments of the function.
             * @param {string[]} params.command - The command of the function.
             * @param {string} params.pipeline - The pipeline identifier for the function to run inside.
             */
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post(`/functions`, params);
                return response.data;
            }),
            /**
             * Updates a function.
             * @param {Object} params - The parameters of the function.
             * @param {string} params.input_stream - The name of the input stream.
             * @param {string} params.image - The name of the image.
             * @param {string[]} [params.args] - The arguments of the function.
             * @param {string[]} [params.command] - The command of the function.
             * @param {string} [params.pipeline] - The pipeline identifier for the function to run inside.
             */
            update: (nameOrID, params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").put(`/functions/${nameOrID}`, params);
                return response.data;
            }),
        };
        this.pipelines = {
            /**
             * Returns a given pipeline.
             * @param nameOrID
             */
            get: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/pipelines/${nameOrID}`);
                return response.data;
            }),
            /**
             * Returns a list of all pipelines.
             */
            list: () => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get("/pipelines");
                return response.data;
            }),
            /**
             * Deletes a pipeline by name or ID.
             * @param {string} nameOrID - The name or ID of the pipeline.
             */
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/pipelines/${nameOrID}`);
            }),
            /**
             * Creates a new pipeline.
             * @param {Object} params - The parameters of the pipeline.
             */
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post("/pipelines", params);
                return response.data;
            }),
            /**
             * Updates a pipeline.
             * @param {string} nameOrID - The name or ID of the pipeline.
             * @param {Object} params - The parameters of the pipeline.
             */
            update: (nameOrID, params) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").put(`/pipelines/${nameOrID}`, params);
                return response.data;
            }),
        };
        this.resources = {
            /**
             * Returns a given resource.
             * @param {string} nameOrID - The name or ID of the resource.
             */
            get: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get(`/resources/${nameOrID}`);
                return response.data;
            }),
            /**
             * Returns a list of all resources.
             */
            list: () => __awaiter(this, void 0, void 0, function* () {
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").get("/resources");
                return response.data;
            }),
            /**
             * Deletes a resource by name or ID.
             * @param {string} nameOrID - The name or ID of the resource.
             */
            delete: (nameOrID) => __awaiter(this, void 0, void 0, function* () {
                yield __classPrivateFieldGet(this, _Client_client, "f").delete(`/resources/${nameOrID}`);
            }),
            /**
             * Creates a new resource.
             * @param {Object} params - The parameters of the resource.
             * @param {string} params.name - The name of the resource.
             * @param {string} params.type - The type of the resource.
             * @param {number} [params.environment] - The ID of the environment to which the resource belongs.
             * @param {Object} [params.metadata] - The metadata of the resource.
             * @param {Object} [params.credentials] - The credentials of the resource.
             * @param {string} [params.url] - The URL of the resource.
             * @param {Object} [params.ssh_tunnel] - SSH Tunnel credentials for a resource.
             */
            create: (params) => __awaiter(this, void 0, void 0, function* () {
                // credentials: ResourceCredentials;
                // environment?: EnvironmentIdentifier;
                // metadata: ResourceMetadata;
                // name: string;
                // type: ResourceType;
                // url: string;
                // ssh_tunnel: ResourceSSHTunnel;
                let response = yield __classPrivateFieldGet(this, _Client_client, "f").post("/resources", params);
                return response.data;
            }),
            /**
             * Updates a resource.
             * @param {Object} params - The parameters of the resource.
             * @param {string} params.name - The name of the resource.
             * @param {string} params.type - The type of the resource.
             * @param {number} [params.environment] - The ID of the environment to which the resource belongs.
             * @param {Object} [params.metadata] - The metadata of the resource.
             * @param {Object} [params.credentials] - The credentials of the resource.
             * @param {string} [params.url] - The URL of the resource.
             * @param {Object} [params.ssh_tunnel] - SSH Tunnel credentials for a resource.
             */
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
        const url = options.url || "https://api.meroxa.io/v1";
        __classPrivateFieldSet(this, _Client_client, axios_1.default.create({
            baseURL: url,
            timeout: (_a = options === null || options === void 0 ? void 0 : options.timeoutMs) !== null && _a !== void 0 ? _a : 10000,
            headers: { Authorization: `Bearer ${options.auth}` },
        }), "f");
    }
}
exports.default = Client;
_Client_client = new WeakMap();
