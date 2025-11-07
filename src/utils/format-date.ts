
export default function formatDate(date: Date | string) {
    // TODO: Make internationally correct.

    let _date = new Date(date);

    return _date.toLocaleString("en-IN", {day: 'numeric', month: 'short', year: 'numeric'})
}