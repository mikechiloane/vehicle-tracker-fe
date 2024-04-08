export function formatDateTime(dateTimeString:string) {
    const date = new Date(dateTimeString);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const datePart = date.toLocaleDateString([], { day: '2-digit', month: 'short' });
    return `${time} ${datePart}`;
}
