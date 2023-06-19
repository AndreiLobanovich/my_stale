export function shouldMarkWhenStale(
  daysBeforeStale: Readonly<number>,
  isPinned: boolean | null
): boolean {
  return daysBeforeStale >= 0;
}
