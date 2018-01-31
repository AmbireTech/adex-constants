const countryData = require('country-data')
const { objPropsById, mapArrayByProp } = require('./helper')

const ItemsTypes = {
    AdUnit: { id: 0, name: 'AdUnit', ipfs: true, type: 'items' },
    AdSlot: { id: 1, name: 'AdSlot', ipfs: true, type: 'items' },
    Campaign: { id: 2, name: 'Campaign', ipfs: false, type: 'collection' },
    Channel: { id: 3, name: 'Channel', ipfs: false, type: 'collection' }
}

function getItemTypePropById(prop) {
    let props = {}
    Object.keys(ItemsTypes).map((key) => {
        let type = ItemsTypes[key]
        props[type.id] = type[prop]
    })

    return props
}

const ItemTypesNames = objPropsById(ItemsTypes, 'name')
const ItemIpfsByTypeId = objPropsById(ItemsTypes, 'ipfs')
const ItemTypeByTypeId = objPropsById(ItemsTypes, 'type')

const AdSizes = [
    { valueTxt: '300x250', label: '300 x 250 px', value: '1' },
    { valueTxt: '728x90', label: '728 x 90 px', value: '2' },
    { valueTxt: '160x600', label: '160 x 600 px', value: '3' },
    { valueTxt: '468x60', label: '468 x 60 px', value: '4' },
    { valueTxt: '120x600', label: '120 x 600 px', value: '5' },
    { valueTxt: '300x100', label: '300 x 100 px', value: '6' },
    { valueTxt: '88x31', label: '88 x 31 px', value: '7' },
    { valueTxt: '300x600', label: '300 x 600 px', value: '8' },
    { valueTxt: '336x280', label: '336 x 280 px', value: '9' },
    { valueTxt: '320x50', label: '320 x 50 px', value: '10' },
]

const AdTypes = [
    { valueTxt: 'html', label: 'HTML', value: '1' },
    { valueTxt: 'android', label: 'Android', value: '2' },
    { valueTxt: 'ios', label: 'iOS', value: '3' },
]

// TARGETS
const TargetsWeight = [
    { value: 0, label: 'None' },
    { value: 1, label: 'Low' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'High' },
    { value: 4, label: 'Highest' },
]

const DefaultTargetWeightValue = TargetsWeight[0].value

const TargetWeightLabels = mapArrayByProp(TargetsWeight, 'value')

const TARGET_MIN_AGE = 0
const TARGET_MAX_AGE = 100

const DefaultTargets = [
    { name: 'gender', value: [], weight: DefaultTargetWeightValue },
    { name: 'location', value: [], weight: DefaultTargetWeightValue },
    { name: 'age', value: { from: TARGET_MIN_AGE, to: TARGET_MAX_AGE }, weight: DefaultTargetWeightValue }
]

const Genders = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Other' }
]

let allCountries = countryData.countries.all.map((cnt) => {
    return {
        value: cnt.alpha2,
        label: cnt.name
    }
})

let allRegions = Object.keys(countryData.regions).map((key) => {
    return {
        value: key,
        label: countryData.regions[key].name
    }
})

let allLocations = allRegions.concat(allCountries)

const Locations = allLocations

module.exports = {
    AdSizes: AdSizes,
    AdTypes: AdTypes,
    ItemsTypes: ItemsTypes,
    ItemTypesNames: ItemTypesNames,
    ItemIpfsByTypeId: ItemIpfsByTypeId,
    ItemTypeByTypeId: ItemTypeByTypeId,
    TargetsWeight: TargetsWeight,
    TargetWeightLabels: TargetWeightLabels,
    TARGET_MIN_AGE: TARGET_MIN_AGE,
    TARGET_MAX_AGE: TARGET_MAX_AGE,
    DefaultTargets: DefaultTargets,
    Genders: Genders,
    Locations: Locations
}
