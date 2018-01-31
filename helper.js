const MILLISECONDS = 1000
const SECONDS = 60
const MINUTES = 60
const HOURS = 24

function objPropsById(obj, propName) {
    let props = {}
    Object.keys(obj).map((key) => {
        let type = obj[key]
        props[type.id] = type[propName]
    })

    return props
}

function mapArrayByProp(arr, key){
    let byKey = arr.reduce((memo, prop, index) => {
        memo[arr[key]] = prop
        return memo
    }, {})

    return byKey
}

function toMilliseconds({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
    let daysMs = days * HOURS * MINUTES * SECONDS * MILLISECONDS
    let hoursMs = hours * MINUTES * SECONDS * MILLISECONDS
    let minutesMs = minutes * SECONDS * MILLISECONDS
    let secondsMS = seconds * MILLISECONDS

    let totalMs = daysMs + hoursMs + minutesMs + secondsMS

    return totalMs
}

module.exports = {
    objPropsById: objPropsById,
    toMilliseconds: toMilliseconds,
    mapArrayByProp: mapArrayByProp
}