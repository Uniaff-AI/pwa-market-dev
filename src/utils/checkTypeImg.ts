export const checkTypeImg = (imageUrl: ImageMetadata | string) => {
  return typeof imageUrl === 'string' ? imageUrl : imageUrl.src;
}