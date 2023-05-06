import { IUpload } from "../pages/AddImage";

interface Ifilter extends IUpload {
  image?: string;
  video?: string;
}

export const filter = (img: Ifilter[]) => {
  return img.filter((e) => !e.existing);
};
