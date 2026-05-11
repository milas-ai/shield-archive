export const getCurrentABDayId = (): number => {
  const referenceDate = new Date('2026-04-16T12:00:00').getTime(); 
  const now = new Date().getTime();
  
  const msInDay = 24 * 60 * 60 * 1000;
  const daysDiff = Math.floor((now - referenceDate) / msInDay);
  
  return (daysDiff % 28) + 1;
};