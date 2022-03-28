export interface BuildSourceBlob {
    url: string;
}
export interface BuildResponse {
    uuid: string;
    status: {
        state: string;
        details: string;
    };
    source_blob: BuildSourceBlob;
    image: string;
    created_at: Date;
    updated_at: Date;
}
export interface CreateBuildParams {
    source_blob: BuildSourceBlob;
}
