import { CONSTANTS } from '../../astro.config.mjs';
import { fetchLocalImages } from './fetchLocalImages';

export const findImage = async (imagePath: string) => {
  if (typeof imagePath !== 'string') {
    return '';
  }

  if (/^https?:\/\//.test(imagePath)) {
    return imagePath;
  }

  if (!imagePath.startsWith(`${CONSTANTS.aliasPrefix.src}/assets`)) {
    return '';
  } // For now only consume images using @/assets alias (or absolute)

  const images = await fetchLocalImages();
  const key: any = imagePath.replace(`${CONSTANTS.aliasPrefix.src}/`, '/src/');

  return typeof images[key] === 'function' ? ((await images[key]()) as { default: string })['default'] : '';
};
