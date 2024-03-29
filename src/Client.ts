import axios, { AxiosInstance } from "axios";
import {
  CreateResourceParams,
  UpdateResourceParams,
  ResourceResponse,
  CreateConnectorParams,
  UpdateConnectorParams,
  ConnectorResponse,
  CreateFunctionParams,
  FunctionResponse,
  UserResponse,
  PipelineResponse,
  CreatePipelineParams,
  UpdatePipelineParams,
  CreateApplicationParams,
  ApplicationResponse,
  CreateApplicationParamsV2,
  ApplicationResponseV2,
} from "./types";
import { BuildResponse, CreateBuildParams } from "./types/build";
import { SourceResponse } from "./types/source";
import url from "url";

export interface ClientOptions {
  auth: string;
  timeoutMs?: number;
  url?: string;
  accountUUID?: string;
}

export default class Client {
  #client: AxiosInstance;

  constructor(options: ClientOptions) {
    const envURL = options.url || "https://api.meroxa.io";
    let URL;
    try {
      URL = new url.URL(envURL);
    } catch (e) {
      throw new Error(`Invalid URL (${envURL}) for meroxa-js configuration`);
    }

    const baseURL = `${URL.protocol}//${URL.host}`;

    let headers = {
      Authorization: `Bearer ${options.auth}`,
      ...(options?.accountUUID && {
        "Meroxa-Account-UUID": options.accountUUID,
      }),
    };

    this.#client = axios.create({
      baseURL,
      timeout: options?.timeoutMs ?? 10_000,
      headers,
    });
  }

  public readonly v2 = {
    applications: {
      create: async (
        params: CreateApplicationParamsV2
      ): Promise<ApplicationResponseV2> => {
        let response = await this.#client.post(`/v2/applications`, params);
        return response.data;
      },
    },
  };

  public readonly builds = {
    create: async (params: CreateBuildParams): Promise<BuildResponse> => {
      let response = await this.#client.post("/v1/builds", params);
      return response.data;
    },

    get: async (uuid: string): Promise<BuildResponse> => {
      let response = await this.#client.get(`/v1/builds/${uuid}`);
      return response.data;
    },
  };

  public readonly applications = {
    /**
     * Creates a new application.
     * @param {Object} params
     * @param {string} params.name - The name of the application.
     * @param {string} params.language - The language of the application.
     * @param {number} params.git_sha - The current sha of the data application .
     * @param {string} params.pipeline - The pipeline identifier for the application to run inside.
     */
    create: async (
      params: CreateApplicationParams
    ): Promise<ApplicationResponse> => {
      let response = await this.#client.post(`/v1/applications`, params);
      return response.data;
    },
  };

  public readonly connectors = {
    /**
     * Returns a given connector.
     * @param nameOrID
     */
    get: async (nameOrID: string): Promise<ConnectorResponse> => {
      let response = await this.#client.get(`/v1/connectors/${nameOrID}`);
      return response.data;
    },

    /**
     * Returns a list of all connectors.
     */
    list: async (): Promise<ConnectorResponse[]> => {
      let response = await this.#client.get(`/v1/connectors`);
      return response.data;
    },

    /**
     * Deletes a connector by name or ID.
     * @param {string} nameOrID - The name or ID of the connector to delete.
     */
    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/v1/connectors/${nameOrID}`);
    },

    listByPipeline: async (
      pipelineNameOrID: string
    ): Promise<ConnectorResponse[]> => {
      let response = await this.#client.get(
        `/pipelines/${pipelineNameOrID}/connectors`
      );
      return response.data;
    },

    /**
     * Creates a new connector.
     * @param {Object} params
     * @param {string} params.name - The name of the connector.
     * @param {string} params.type - The type of the connector.
     * @param {number} params.resource_id - The ID of the resource to which the connector belongs.
     * @param {Object} [params.config] - The configuration of the connector.
     * @param {Object} [params.metadata] - The metadata of the connector.
     */
    create: async (
      params: CreateConnectorParams
    ): Promise<ConnectorResponse> => {
      let response = await this.#client.post(`/v1/connectors`, params);
      return response.data;
    },

    /**
     * Updates a connector.
     * @param nameOrID
     * @param params
     */
    update: async (
      nameOrID: string,
      params: UpdateConnectorParams
    ): Promise<ConnectorResponse> => {
      let response = await this.#client.put(
        `/v1/connectors/${nameOrID}`,
        params
      );
      return response.data;
    },
  };

  public readonly functions = {
    /**
     * Returns a given function.
     * @param {string} nameOrID - The name or ID of the function.
     */
    get: async (nameOrID: string): Promise<FunctionResponse> => {
      let response = await this.#client.get(`/v1/functions/${nameOrID}`);
      return response.data;
    },

    /**
     * Returns a list of all functions.
     */
    list: async (): Promise<FunctionResponse[]> => {
      let response = await this.#client.get(`/v1/functions`);
      return response.data;
    },

    /**
     * Deletes a function by name or ID.
     * @param nameOrID - The name or ID of the function.
     */
    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/v1/functions/${nameOrID}`);
    },

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
    create: async (params: CreateFunctionParams): Promise<FunctionResponse> => {
      let response = await this.#client.post(`/v1/functions`, params);
      return response.data;
    },

    /**
     * Updates a function.
     * @param {Object} params - The parameters of the function.
     * @param {string} params.input_stream - The name of the input stream.
     * @param {string} params.image - The name of the image.
     * @param {string[]} [params.args] - The arguments of the function.
     * @param {string[]} [params.command] - The command of the function.
     * @param {string} [params.pipeline] - The pipeline identifier for the function to run inside.
     */
    update: async (
      nameOrID: string,
      params: CreateFunctionParams
    ): Promise<FunctionResponse> => {
      let response = await this.#client.put(
        `/v1/functions/${nameOrID}`,
        params
      );
      return response.data;
    },
  };

  public readonly pipelines = {
    /**
     * Returns a given pipeline.
     * @param nameOrID
     */
    get: async (nameOrID: string): Promise<PipelineResponse> => {
      let response = await this.#client.get(`/v1/pipelines/${nameOrID}`);
      return response.data;
    },

    /**
     * Returns a list of all pipelines.
     */
    list: async (): Promise<PipelineResponse[]> => {
      let response = await this.#client.get("/v1/pipelines");
      return response.data;
    },

    /**
     * Deletes a pipeline by name or ID.
     * @param {string} nameOrID - The name or ID of the pipeline.
     */
    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/v1/pipelines/${nameOrID}`);
    },

    /**
     * Creates a new pipeline.
     * @param {Object} params - The parameters of the pipeline.
     */
    create: async (params: CreatePipelineParams): Promise<PipelineResponse> => {
      let response = await this.#client.post("/v1/pipelines", params);
      return response.data;
    },

    /**
     * Updates a pipeline.
     * @param {string} nameOrID - The name or ID of the pipeline.
     * @param {Object} params - The parameters of the pipeline.
     */
    update: async (
      nameOrID: string,
      params: UpdatePipelineParams
    ): Promise<PipelineResponse> => {
      let response = await this.#client.put(
        `/v1/pipelines/${nameOrID}`,
        params
      );
      return response.data;
    },
  };

  public readonly resources = {
    /**
     * Returns a given resource.
     * @param {string} nameOrID - The name or ID of the resource.
     */
    get: async (nameOrID: string): Promise<ResourceResponse> => {
      let response = await this.#client.get(`/v1/resources/${nameOrID}`);
      return response.data;
    },

    /**
     * Returns a list of all resources.
     */
    list: async (): Promise<ResourceResponse[]> => {
      let response = await this.#client.get("/v1/resources");
      return response.data;
    },

    /**
     * Deletes a resource by name or ID.
     * @param {string} nameOrID - The name or ID of the resource.
     */
    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/v1/resources/${nameOrID}`);
    },

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
    create: async (params: CreateResourceParams): Promise<ResourceResponse> => {
      // credentials: ResourceCredentials;
      // environment?: EnvironmentIdentifier;
      // metadata: ResourceMetadata;
      // name: string;
      // type: ResourceType;
      // url: string;
      // ssh_tunnel: ResourceSSHTunnel;
      let response = await this.#client.post("/v1/resources", params);
      return response.data;
    },

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
    update: async (params: UpdateResourceParams): Promise<ResourceResponse> => {
      let response = await this.#client.put(
        `/v1/resources/${params.name}`,
        params
      );
      return response.data;
    },
  };

  public readonly sources = {
    create: async (): Promise<SourceResponse> => {
      let response = await this.#client.post("/v1/sources");
      return response.data;
    },
  };

  public readonly users = {
    /**
     * Returns your user profile.
     */
    me: async (): Promise<UserResponse> => {
      let response = await this.#client.get("/v1/users/me");
      return response.data;
    },
  };
}
