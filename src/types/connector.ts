import { EnvironmentIdentifier } from "./environment";
export type ConnectorType = "source" | "destination";

export type ConnectorState =
  | "pending"
  | "running"
  | "paused"
  | "crashed"
  | "failed"
  | "doa";

export interface ConnectorIdentifier {
  name: string;
}

export interface ConnectorConfig {
  [index: string]: string;
  input: string;
}

export interface ConnectorStream {
  input?: string[];
  output?: string[];
  dynamic: boolean;
}

export interface ConnectorMetadata {
  "mx:connectorType": ConnectorType;
}

export interface CreateConnectorParams {
  config: ConnectorConfig;
  metadata: ConnectorMetadata;
  name?: string;
  resource_id: number;
  pipeline_id: number | null;
  pipeline_name?: string;
}

export interface UpdateConnectorParams {
  config: ConnectorConfig;
  metadata: ConnectorMetadata;
  name: string;
  resource_id: number;
  pipeline_id: number | null;
  pipeline_name?: string;
}

export interface ConnectorResponse {
  config: ConnectorConfig;
  created_at: Date;
  environment: EnvironmentIdentifier;
  metadata: ConnectorMetadata;
  name: string;
  resource_id: number;
  pipeline_id: number;
  pipeline_name: string;
  state: ConnectorState;
  streams: ConnectorStream;
  trace: string;
  type: ConnectorType;
  updated_at: Date;
  uuid: string;
}
