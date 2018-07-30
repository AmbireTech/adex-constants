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

// TODO: Use width and height for labelArgs
const AdSizes = [
    { width: 300, height: 250, valueTxt: '300x250', label: 'LABEL_SIZE_PX', labelArgs: [300, 250], value: '1' },
    { width: 728, height: 90, valueTxt: '728x90', label: 'LABEL_SIZE_PX', labelArgs: [728, 90], value: '2' },
    { width: 160, height: 600, valueTxt: '160x600', label: 'LABEL_SIZE_PX', labelArgs: [160, 600], value: '3' },
    { width: 468, height: 60, valueTxt: '468x60', label: 'LABEL_SIZE_PX', labelArgs: [468, 60], value: '4' },
    { width: 120, height: 600, valueTxt: '120x600', label: 'LABEL_SIZE_PX', labelArgs: [120, 600], value: '5' },
    { width: 300, height: 100, valueTxt: '300x100', label: 'LABEL_SIZE_PX', labelArgs: [300, 100], value: '6' },
    { width: 88, height: 31, valueTxt: '88x31', label: 'LABEL_SIZE_PX', labelArgs: [88, 31], value: '7' },
    { width: 300, height: 600, valueTxt: '300x600', label: 'LABEL_SIZE_PX', labelArgs: [300, 600], value: '8' },
    { width: 336, height: 280, valueTxt: '336x280', label: 'LABEL_SIZE_PX', labelArgs: [336, 280], value: '9' },
    { width: 320, height: 50, valueTxt: '320x50', label: 'LABEL_SIZE_PX', labelArgs: [320, 50], value: '10' },
]

const AdTypes = [
    { valueTxt: 'html', label: 'HTML', value: '1' },
    { valueTxt: 'android', label: 'Android', value: '2' },
    { valueTxt: 'ios', label: 'iOS', value: '3' },
]

const AdSizesByValue = mapArrayByProp(AdSizes, 'value')
const AdTypesByValue = mapArrayByProp(AdTypes, 'value')

// TARGETS
const TargetsWeight = [
    { value: 0, label: 'LABEL_TARGET_WEIGHT_NONE' },
    { value: 1, label: 'LABEL_TARGET_WEIGHT_LOW' },
    { value: 2, label: 'LABEL_TARGET_WEIGHT_MEDIUM' },
    { value: 3, label: 'LABEL_TARGET_WEIGHT_HIGH' },
    { value: 4, label: 'LABEL_TARGET_WEIGHT_HIGHEST' },
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
    { value: 'female', label: 'LABEL_GENDER_FEMALE' },
    { value: 'male', label: 'LABEL_GENDER_MALE' },
    { value: 'other', label: 'LABEL_GENDER_OTHER' }
]

const ACInputRegex = new RegExp(/^[A-Za-z0-9 ]{2,50}$/g)


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
    AdSizesByValue: AdSizesByValue,
    AdTypesByValue: AdTypesByValue,
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
    Locations: Locations,
    ACInputRegex: ACInputRegex
}
