import { CreateResourceParams, UpdateResourceParams, ResourceResponse, CreateConnectorParams, UpdateConnectorParams, ConnectorResponse, CreateFunctionParams, FunctionResponse, UserResponse, PipelineResponse, CreatePipelineParams, UpdatePipelineParams } from "./types";
export interface ClientOptions {
    auth: string;
    timeoutMs?: number;
}
export default class Client {
    #private;
    constructor(options: ClientOptions);
    readonly connectors: {
        /**
         * Returns a given connector.
         * @param nameOrID
         */
        get: (nameOrID: string) => Promise<ConnectorResponse[]>;
        /**
         * Returns a list of all connectors.
         */
        list: () => Promise<ConnectorResponse[]>;
        /**
         * Deletes a connector by name or ID.
         * @param nameOrID
         */
        delete: (nameOrID: string) => Promise<void>;
        /**
         * Creates a new connector.
         * @param {}
         */
        create: (params: CreateConnectorParams) => Promise<ConnectorResponse>;
        update: (nameOrID: string, params: UpdateConnectorParams) => Promise<ConnectorResponse>;
    };
    readonly functions: {
        /**
         * Returns a given function.
         * @param nameOrID function name or ID
         */
        get: (nameOrID: string) => Promise<FunctionResponse[]>;
        /**
         * Returns a list of all functions.
         */
        list: () => Promise<FunctionResponse[]>;
        delete: (nameOrID: string) => Promise<void>;
        create: (params: CreateFunctionParams) => Promise<FunctionResponse>;
        update: (nameOrID: string, params: CreateFunctionParams) => Promise<FunctionResponse>;
    };
    readonly pipelines: {
        get: (nameOrID: string) => Promise<PipelineResponse>;
        list: () => Promise<PipelineResponse[]>;
        delete: (nameOrID: string) => Promise<void>;
        create: (params: CreatePipelineParams) => Promise<PipelineResponse>;
        update: (nameOrID: string, params: UpdatePipelineParams) => Promise<PipelineResponse>;
    };
    readonly resources: {
        get: (nameOrID: string) => Promise<ResourceResponse>;
        list: () => Promise<ResourceResponse[]>;
        delete: (nameOrID: string) => Promise<void>;
        create: (params: CreateResourceParams) => Promise<ResourceResponse>;
        update: (params: UpdateResourceParams) => Promise<ResourceResponse>;
    };
    readonly users: {
        /**
         * Returns your user profile.
         */
        me: () => Promise<UserResponse>;
    };
}
