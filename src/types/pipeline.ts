import { EnvironmentIdentifier } from "./environment";

export interface PipelineIdentifier {
  name: string;
}

export interface PipelineResponse {
  created_at: Date;
  environment?: EnvironmentIdentifier;
  id: number;
  metadata?: string[];
  name: string;
  state: "healthy" | "degraded";
  updated_at: Date;
  uuid: string;
}

export interface CreatePipelineParams {
  name: string;
  environment?: EnvironmentIdentifier;
  metadata?: string[];
}

export interface UpdatePipelineParams {
  name: string;
  environment?: EnvironmentIdentifier;
  metadata?: string[];
}
