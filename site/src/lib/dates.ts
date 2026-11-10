export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const longDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
