export function timeDifference(date: Date, lang: string): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (lang === "en-US") {
    if (years > 0) {
      return `${years} years ago`;
    } else if (months > 0) {
      return `${months} months ago`;
    } else if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else {
      return `Just now`;
    }
  } else {
    if (years > 0) {
      return `${years} 年前`;
    } else if (months > 0) {
      return `${months} 个月前`;
    } else if (days > 0) {
      return `${days} 天前`;
    } else if (hours > 0) {
      return `${hours} 小时前`;
    } else {
      return `刚刚`;
    }
  }
}
