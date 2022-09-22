import { EnvironmentIdentifier } from "./environment";
export declare type ResourceType = "postgres" | "mysql" | "redshift" | "url" | "s3" | "mongodb" | "elasticsearch" | "snowflakedb" | "bigquery" | "sqlserver" | "cosmosdb" | "kafka" | "confluentcloud";
export interface ResourceIdentifier {
    name: string;
    uuid: string;
    collection: ResourceCollection;
}
export interface ResourceCollection {
    source: boolean;
    destination: boolean;
    name: string;
}
export interface ResourceCredentials {
    username: string;
    password: string;
    ca_cert: string;
    client_cert: string;
    client_cert_key: string;
    ssl: boolean;
}
export interface ResourceStatus {
    state: string;
    details: string;
    last_updated_at: Date;
}
export interface ResourceSSHTunnel {
    address: string;
    public_key: string;
}
export interface ResourceMetadata {
    logical_replication: true;
    "mx:color": string;
    "mx:description": string;
    "mx:ssl": boolean;
    "mx:symbol": string;
}
export interface CreateResourceParams {
    credentials: ResourceCredentials;
    environment?: EnvironmentIdentifier;
    metadata: ResourceMetadata;
    name: string;
    type: ResourceType;
    url: string;
    ssh_tunnel: ResourceSSHTunnel;
}
export interface UpdateResourceParams {
    credentials: ResourceCredentials;
    environment?: EnvironmentIdentifier;
    metadata: ResourceMetadata;
    name: string;
    type: ResourceType;
    url: string;
    ssh_tunnel: ResourceSSHTunnel;
}
export interface ResourceResponse {
    id: number;
    type: ResourceType;
    name: string;
    url: string;
    credentials: ResourceCredentials;
    metadata: ResourceMetadata;
    ssh_tunnel: ResourceSSHTunnel;
    environment: EnvironmentIdentifier;
    status: ResourceStatus;
    createdAt: Date;
    updatedAt: Date;
}
