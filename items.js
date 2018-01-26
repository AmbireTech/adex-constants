const objPropsById = require('./helper').objPropsById

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
const ItemModelsByType = objPropsById(ItemsTypes, 'model') //TODO:
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

module.exports = {
    AdSizes: AdSizes,
    AdTypes: AdTypes,
    ItemsTypes: ItemsTypes,
    ItemTypesNames: ItemTypesNames,
    ItemModelsByType: ItemModelsByType,
    ItemIpfsByTypeId: ItemIpfsByTypeId,
    ItemTypeByTypeId: ItemTypeByTypeId
}
