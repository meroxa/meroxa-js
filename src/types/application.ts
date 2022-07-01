import { PipelineIdentifier } from "./pipeline";

import { ResourceIdentifier } from "./resource";

import { FunctionIdentifier } from "./function";
import { ConnectorIdentifier } from "./connector";


export interface ApplicationStatus {
  state: string;
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
