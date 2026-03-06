export function getCurrentTime(): { hours: number; minutes: number; totalMinutes: number; formatted: string } {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  return { hours, minutes, totalMinutes, formatted };
}

export function updateClockElement(element: HTMLElement | null): void {
  if (!element) return;
  
  const { formatted } = getCurrentTime();
  element.textContent = formatted;
}