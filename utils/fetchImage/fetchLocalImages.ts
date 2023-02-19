import { CONSTANTS } from '../../astro.config.mjs';

const load = async function () {
  let images: Record<string, () => Promise<unknown>> = {};
  try {
    images = import.meta.glob(`${CONSTANTS.aliasPrefix.src}/assets/img/**/*`);
  } catch (err) {
    console.error(err);
  }
  return images;
};

export const fetchLocalImages = async () => {
  const images = await load();
  return images;
};
