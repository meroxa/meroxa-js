import { CreateResourceParams, UpdateResourceParams, ResourceResponse, CreateConnectorParams, UpdateConnectorParams, ConnectorResponse, CreateFunctionParams, FunctionResponse, UserResponse, PipelineResponse, CreatePipelineParams, UpdatePipelineParams, CreateApplicationParams, ApplicationResponse } from "./types";
import { BuildResponse, CreateBuildParams } from "./types/build";
import { SourceResponse } from "./types/source";
export interface ClientOptions {
    auth: string;
    timeoutMs?: number;
    url?: string;
}
export default class Client {
    #private;
    constructor(options: ClientOptions);
    readonly builds: {
        create: (params: CreateBuildParams) => Promise<BuildResponse>;
        get: (uuid: string) => Promise<BuildResponse>;
    };
    readonly applications: {
        /**
         * Creates a new application.
         * @param {Object} params
         * @param {string} params.name - The name of the application.
         * @param {string} params.language - The language of the application.
         * @param {number} params.git_sha - The current sha of the data application .
         * @param {string} params.pipeline - The pipeline identifier for the application to run inside.
         */
        create: (params: CreateApplicationParams) => Promise<ApplicationResponse>;
    };
    readonly connectors: {
        /**
         * Returns a given connector.
         * @param nameOrID
         */
        get: (nameOrID: string) => Promise<ConnectorResponse>;
        /**
         * Returns a list of all connectors.
         */
        list: () => Promise<ConnectorResponse[]>;
        /**
         * Deletes a connector by name or ID.
         * @param {string} nameOrID - The name or ID of the connector to delete.
         */
        delete: (nameOrID: string) => Promise<void>;
        listByPipeline: (pipelineNameOrID: string) => Promise<ConnectorResponse[]>;
        /**
         * Creates a new connector.
         * @param {Object} params
         * @param {string} params.name - The name of the connector.
         * @param {string} params.type - The type of the connector.
         * @param {number} params.resource_id - The ID of the resource to which the connector belongs.
         * @param {Object} [params.config] - The configuration of the connector.
         * @param {Object} [params.metadata] - The metadata of the connector.
         */
        create: (params: CreateConnectorParams) => Promise<ConnectorResponse>;
        /**
         * Updates a connector.
         * @param nameOrID
         * @param params
         */
        update: (nameOrID: string, params: UpdateConnectorParams) => Promise<ConnectorResponse>;
    };
    readonly functions: {
        /**
         * Returns a given function.
         * @param {string} nameOrID - The name or ID of the function.
         */
        get: (nameOrID: string) => Promise<FunctionResponse>;
        /**
         * Returns a list of all functions.
         */
        list: () => Promise<FunctionResponse[]>;
        /**
         * Deletes a function by name or ID.
         * @param nameOrID - The name or ID of the function.
         */
        delete: (nameOrID: string) => Promise<void>;
        /**
         * Creates a new function.
         * @param {Object} params - The parameters of the function.
         * @param {string} params.name - The name of the function
         * @param {string} params.input_stream - The name of the input stream.
         * @param {string} params.image - The name of the image.
         * @param {string[]} params.args - The arguments of the function.
         * @param {string[]} params.command - The command of the function.
         * @param {string} params.pipeline - The pipeline identifier for the function to run inside.
         */
        create: (params: CreateFunctionParams) => Promise<FunctionResponse>;
        /**
         * Updates a function.
         * @param {Object} params - The parameters of the function.
         * @param {string} params.input_stream - The name of the input stream.
         * @param {string} params.image - The name of the image.
         * @param {string[]} [params.args] - The arguments of the function.
         * @param {string[]} [params.command] - The command of the function.
         * @param {string} [params.pipeline] - The pipeline identifier for the function to run inside.
         */
        update: (nameOrID: string, params: CreateFunctionParams) => Promise<FunctionResponse>;
    };
    readonly pipelines: {
        /**
         * Returns a given pipeline.
         * @param nameOrID
         */
        get: (nameOrID: string) => Promise<PipelineResponse>;
        /**
         * Returns a list of all pipelines.
         */
        list: () => Promise<PipelineResponse[]>;
        /**
         * Deletes a pipeline by name or ID.
         * @param {string} nameOrID - The name or ID of the pipeline.
         */
        delete: (nameOrID: string) => Promise<void>;
        /**
         * Creates a new pipeline.
         * @param {Object} params - The parameters of the pipeline.
         */
        create: (params: CreatePipelineParams) => Promise<PipelineResponse>;
        /**
         * Updates a pipeline.
         * @param {string} nameOrID - The name or ID of the pipeline.
         * @param {Object} params - The parameters of the pipeline.
         */
        update: (nameOrID: string, params: UpdatePipelineParams) => Promise<PipelineResponse>;
    };
    readonly resources: {
        /**
         * Returns a given resource.
         * @param {string} nameOrID - The name or ID of the resource.
         */
        get: (nameOrID: string) => Promise<ResourceResponse>;
        /**
         * Returns a list of all resources.
         */
        list: () => Promise<ResourceResponse[]>;
        /**
         * Deletes a resource by name or ID.
         * @param {string} nameOrID - The name or ID of the resource.
         */
        delete: (nameOrID: string) => Promise<void>;
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
        create: (params: CreateResourceParams) => Promise<ResourceResponse>;
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
        update: (params: UpdateResourceParams) => Promise<ResourceResponse>;
    };
    readonly sources: {
        create: () => Promise<SourceResponse>;
    };
    readonly users: {
        /**
         * Returns your user profile.
         */
        me: () => Promise<UserResponse>;
    };
}
