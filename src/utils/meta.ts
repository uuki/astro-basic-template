export type Meta = {
  title: string;
  description: string;
  "og:title": string;
  "og:description": string;
  "twitter:title": string;
  "twitter:description": string;
  "og:image": string;
};

export type MetaProps = {
  meta?: Partial<Meta>;
};

export const createMeta = (props: MetaProps['meta']): Readonly<Meta> => ({
  title: '',
  description: '',
  "og:title": '',
  "og:description": '',
  "twitter:title": '',
  "twitter:description": '',
  "og:image": '',
  ...props,
});
