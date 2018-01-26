function objPropsById(obj, propName) {
    let props = {}
    Object.keys(obj).map((key) => {
        let type = obj[key]
        props[type.id] = type[propName]
    })

    return props
}

module.exports = {
    objPropsById: objPropsById
}