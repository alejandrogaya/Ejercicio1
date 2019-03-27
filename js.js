const date = new Date();
const today = {
    'date': date.getDate(),
    'month': date.getMonth(),
    'year': date.getFullYear()
};
let actualMonth = document.getElementsByClassName('actual-month')[0];
let divDays = document.getElementsByClassName('days')[0];

const nextMonth = document.getElementById('next-month');
const previousMonth = document.getElementById('previous-month');

nextMonth.addEventListener('click', () => {
    setCalendar(1);
});

previousMonth.addEventListener('click', () => {
    setCalendar(-1);
});


const setCalendar = (modifiedMonth = null) => {
    let month;
    let year;

    if (modifiedMonth) date.setMonth(date.getMonth() + modifiedMonth);

    month = getMonth(date.getMonth());
    year = date.getFullYear();

    lastDayMonth = getLastDayOfMonth(date);
    firstDayMonth = getFirstDayOfMonth(date);

    actualMonth.innerHTML = `<b>${month.toUpperCase()} ${year}</b>`;

    divDays.innerHTML = '';
    
    dateNumber = 1;
    lastDayMonth += firstDayMonth;
    i = 0;
    while (i < lastDayMonth) {

        if(i < firstDayMonth ) {
            divDays.innerHTML += `
                <div class="day">
                    <span></span>
                </div>
            `;
        } else {
            divDays.innerHTML += `
                <div class="day ${(dateNumber === today.date && date.getMonth() === today.month && date.getFullYear() === today.year) ? 'actual-day' : ''}">
                    <span>${dateNumber}</span>
                </div>
            `;
            dateNumber++;
        }
        i++;
    }

};



const getLastDayOfMonth = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay.getDate();
};

const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
};

const getMonth = (monthNumber) => {
    switch (monthNumber) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
        default:
            break;
    }
};


//UNUSED
const getDay = (dayNumber) => {
    switch (dayNumber) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            break;
    }
};

setCalendar();