const HOURS = [
    'twelve',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
]

const ONES = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

const TEENS = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
]

const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty'
]

function talk(time) {
    const[h, m] = time.split(':').map(n => parseInt(n));
    const hour = HOUR[h % 12];
    const suffix = (h < 12) ? 'am' : 'pm';

    let minut = '';
    if(m < 10) {
        minute = `oh ${ONES[m]}`
    }else if (m < 20) {
        minute = `${TEENS[m % 10]}`
    } else {
        minute = `${TENS[Math.floor(m / 10)]} ${ONES[m % 10]}`
    }

    
    return ["It's", hour, suffix]
        .join(' ');
}

console.log(talk('00:00'));