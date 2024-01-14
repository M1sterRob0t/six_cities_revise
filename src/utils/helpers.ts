export function convertRatingToPersents(rating: number): string {
  return `${Math.round(rating / 5 * 100)}%`;
}
