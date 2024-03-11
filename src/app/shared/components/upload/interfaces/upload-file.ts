export interface IFileUpload {
    name: string;
    size: string | number;
    file: File;
}
export interface IUploadFileAcceptance {
    accept: string;
    information: string;
}