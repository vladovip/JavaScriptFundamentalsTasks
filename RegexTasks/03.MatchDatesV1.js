function matchDates(input) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    while ((dates = pattern.exec(input)) !== null) {
        let day = dates.groups['day'];
        let month = dates.groups['month'];
        let year = dates.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}