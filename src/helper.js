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

function mapArrayByProp(arr, key) {
    let byKey = arr.reduce((memo, prop, index) => {
        memo[prop[key]] = prop
        return memo
    }, {})

    return byKey
}

function toSeconds({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
    let daysS = days * HOURS * MINUTES * SECONDS
    let hoursS = hours * MINUTES * SECONDS
    let minutesS = minutes * SECONDS
    let secondsS = seconds

    let totalS = daysS + hoursS + minutesS + secondsS

    return totalS
}

function toMilliseconds({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
    let totalMs = toSeconds({ days, hours, minutes, seconds }) * MILLISECONDS

    return totalMs
}

module.exports = {
    objPropsById: objPropsById,
    toMilliseconds: toMilliseconds,
    mapArrayByProp: mapArrayByProp,
    toSeconds: toSeconds
}