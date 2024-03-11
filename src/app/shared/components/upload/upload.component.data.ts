import { IUploadFileAcceptance } from "./interfaces/upload-file";

export enum EFileData {
  pdf = 'pdf',
  audio = 'audio',
  text = 'text',
  image = 'image',
}

export const getUploadTypeData = (
  type: 'pdf' | 'audio' | 'image' | 'text'
): IUploadFileAcceptance => {
  switch (type) {
    case EFileData.pdf:
      return {
        accept: '.pdf',
        information: 'PDF (Upto 5 files allowed (10MB each))',
      };
    case EFileData.audio:
      return {
        accept: '.mp3, .wav, .ogg',
        information: 'Audio (Upto 5 files allowed (10MB each))',
      };
    case EFileData.text:
      return {
        accept: '.text',
        information: 'Text Formats (Upto 5 files allowed (10MB each))',
      };
    case EFileData.image:
      return {
        accept: '.jpeg, .png, .jpg',
        information: 'Text Formats (Upto 5 files allowed (10MB each))',
      };
    default:
      return {
        accept: '.pdf',
        information: 'PDF (Upto 5 files allowed (10MB each))',
      };
  }
};
