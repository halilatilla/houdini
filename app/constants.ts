export const SITE_URL = "https://halil-atilla-houdini.vercel.app";
export const OG_IMAGE_URL = `${SITE_URL}/api/og`;

export function getOgImageUrl(title: string) {
  return `${OG_IMAGE_URL}?title=${encodeURIComponent(title)}`;
}
