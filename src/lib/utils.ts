export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
}

export function formatDateJP(dateStr: string): string {
  if (!dateStr) return '';
  
  if (dateStr.match(/^\d{4}-\d{2}$/)) {
    // "2025-01" format
    const [year, month] = dateStr.split('-');
    return `${year}年${parseInt(month, 10)}月`;
  }
  
  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    // "2025-01-15" format
    const [year, month, day] = dateStr.split('-');
    return `${year}年${parseInt(month, 10)}月${parseInt(day, 10)}日`;
  }
  
  return dateStr;
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}
