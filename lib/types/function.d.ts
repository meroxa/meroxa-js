import { PipelineIdentifier } from "./pipeline";
export interface FunctionIdentifier {
    name: string;
}
export interface FunctionEnvVars {
    [index: string]: string;
}
export declare type FunctionState = "pending" | "starting" | "error" | "ready";
export interface FunctionStatus {
    state: string;
    details: string;
}
export interface CreateFunctionParams {
    input_stream: string;
    image: string;
    command?: string[];
    args?: string[];
    pipeline: PipelineIdentifier;
    env_vars: FunctionEnvVars;
}
export interface FunctionResponse {
    uuid: string;
    name: string;
    input_stream: string;
    output_stream: string;
    image: string;
    command: string[];
    args: string[];
    pipeline: PipelineIdentifier;
    env_vars: FunctionEnvVars;
    status: FunctionStatus;
}
