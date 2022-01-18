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
} from "./types";

export interface ClientOptions {
  auth: string;
  timeoutMs?: number;
}

export default class Client {
  #client: AxiosInstance;
  #apiVersion = "v1";

  constructor(options: ClientOptions) {
    this.#client = axios.create({
      baseURL: `https://api.meroxa.io/${this.#apiVersion}`,
      timeout: options?.timeoutMs ?? 10_000,
      headers: { Authorization: `Bearer ${options.auth}` },
    });
  }

  public readonly connectors = {
    /**
     * Returns a given connector.
     * @param nameOrID
     */
    get: async (nameOrID: string): Promise<ConnectorResponse[]> => {
      let response = await this.#client.get(`/connectors/${nameOrID}`);
      return response.data;
    },

    /**
     * Returns a list of all connectors.
     */
    list: async (): Promise<ConnectorResponse[]> => {
      let response = await this.#client.get(`/connectors`);
      return response.data;
    },

    /**
     * Deletes a connector by name or ID.
     * @param nameOrID
     */
    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/connectors/${nameOrID}`);
    },

    /**
     * Creates a new connector.
     * @param {}
     */
    create: async (
      params: CreateConnectorParams
    ): Promise<ConnectorResponse> => {
      let response = await this.#client.post(`/connectors`, params);
      return response.data;
    },

    update: async (
      nameOrID: string,
      params: UpdateConnectorParams
    ): Promise<ConnectorResponse> => {
      let response = await this.#client.put(`/connectors/${nameOrID}`, params);
      return response.data;
    },
  };

  public readonly functions = {
    /**
     * Returns a given function.
     * @param nameOrID function name or ID
     */
    get: async (nameOrID: string): Promise<FunctionResponse[]> => {
      let response = await this.#client.get(`/functions/${nameOrID}`);
      return response.data;
    },

    /**
     * Returns a list of all functions.
     */
    list: async (): Promise<FunctionResponse[]> => {
      let response = await this.#client.get(`/functions`);
      return response.data;
    },

    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/functions/${nameOrID}`);
    },

    create: async (params: CreateFunctionParams): Promise<FunctionResponse> => {
      let response = await this.#client.post(`/functions`, params);
      return response.data;
    },

    update: async (
      nameOrID: string,
      params: CreateFunctionParams
    ): Promise<FunctionResponse> => {
      let response = await this.#client.put(`/functions/${nameOrID}`, params);
      return response.data;
    },
  };

  public readonly pipelines = {
    get: async (nameOrID: string): Promise<PipelineResponse> => {
      let response = await this.#client.get(`/pipelines/${nameOrID}`);
      return response.data;
    },

    list: async (): Promise<PipelineResponse[]> => {
      let response = await this.#client.get("/pipelines");
      return response.data;
    },

    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/pipelines/${nameOrID}`);
    },

    create: async (params: CreatePipelineParams): Promise<PipelineResponse> => {
      let response = await this.#client.post("/pipelines", params);
      return response.data;
    },

    update: async (
      nameOrID: string,
      params: UpdatePipelineParams
    ): Promise<PipelineResponse> => {
      let response = await this.#client.put(`/pipelines/${nameOrID}`, params);
      return response.data;
    },
  };

  public readonly resources = {
    get: async (nameOrID: string): Promise<ResourceResponse> => {
      let response = await this.#client.get(`/resources/${nameOrID}`);
      return response.data;
    },

    list: async (): Promise<ResourceResponse[]> => {
      let response = await this.#client.get("/resources");
      return response.data;
    },

    delete: async (nameOrID: string): Promise<void> => {
      await this.#client.delete(`/resources/${nameOrID}`);
    },

    create: async (params: CreateResourceParams): Promise<ResourceResponse> => {
      let response = await this.#client.post("/resources", params);
      return response.data;
    },

    update: async (params: UpdateResourceParams): Promise<ResourceResponse> => {
      let response = await this.#client.put(
        `/resources/${params.name}`,
        params
      );
      return response.data;
    },
  };

  public readonly users = {
    /**
     * Returns your user profile.
     */
    me: async (): Promise<UserResponse> => {
      let response = await this.#client.get("/users/me");
      return response.data;
    },
  };
}
