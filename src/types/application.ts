import { PipelineIdentifier } from "./pipeline";

import { ResourceIdentifier } from "./resource";

import { FunctionIdentifier } from "./function";
import { ConnectorIdentifier } from "./connector";

import { NameAndUUID } from "./identifier";

export interface ApplicationStatus {
  state: string;
  details: string;
}

export interface ApplicationStatusV2 {
  state:
    | "initialized"
    | "deploying"
    | "pending"
    | "running"
    | "degraded"
    | "failed";
  details: string;
}

export interface CreateApplicationParams {
  name: string;
  language: string;
  git_sha: string;
  pipeline: PipelineIdentifier;
}

export interface ApplicationResponse {
  uuid: string;
  name: string;
  language: string;
  git_sha: string;
  status: ApplicationStatus;
  pipeline: PipelineIdentifier;
  connectors: ConnectorIdentifier[];
  functions: FunctionIdentifier[];
  resources: ResourceIdentifier[];
}

export interface CreateApplicationParamsV2 {
  name: string;
  language: string;
  pipeline: PipelineIdentifier;
}

interface ResourceCollection {
  name: string;
  source: string;
  destination: string;
}

interface ApplicationResource {
  name_and_uuid: NameAndUUID;
  collection: ResourceCollection;
}

export interface ApplicationResponseV2 {
  uuid: string;
  name: string;
  language: string;
  git_sha: string;
  status: ApplicationStatusV2;
  pipeline: NameAndUUID;
  connectors: NameAndUUID[];
  functions: NameAndUUID[];
  resources: ApplicationResource[];
}
