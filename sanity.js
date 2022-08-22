import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { PROJECTID, DATASET } from "@env";

const client = SanityClient({
  projectId: process.env.PROJECTID,
  dataset: process.env.DATASET,
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
