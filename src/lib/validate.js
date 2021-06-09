export function checkRange(sDate, eDate) {
    let start = checkDate(sDate);
    let end = checkDate(eDate);
    let whole = false;
    if (start === 0 && end === 0) {
        whole = true
    } else if (start !== 0 && end === 0) {
        end = Date.now() + 86400000
    } else if (start > end) {
        let tmp = start
        start = end
        end = tmp
    } else {
        end += 86400000
    }
    return { start, end, whole }
}

function checkDate(mdate) {
    let date = (new Date(mdate)).getTime()
    if (date) {
        return date
    } else {
        return 0
    }
}

export function setId(idate) {
    let x = checkDate(idate)
    if (x === 0) {
        return 0
    } else {
        return x + Math.floor(Math.random() * 1000000)
    }
}