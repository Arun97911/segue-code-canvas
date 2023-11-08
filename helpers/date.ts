export const dateToPicker = (dateToFormat: Date | string) => {
    if (!dateToFormat) return '';
    return typeof dateToFormat === 'object' ? dateToFormat.toISOString().slice(0, 10) : dateToFormat.slice(0, 10);
  };