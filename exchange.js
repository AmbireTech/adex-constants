const objPropsById = require('./helper').objPropsById

const BID_STATES = {
    DoesNotExist: { id: 0, value: 'DoesNotExist', label: 'BID_STATE_DOES_NOT_EXIST' },
    Accepted: { id: 1, value: 'Accepted', label: 'BID_STATE_ACCEPTED' },
    Canceled: { id: 2, value: 'Canceled', label: 'BID_STATE_CANCELED' },
    Expired: { id: 3, value: 'Expired', label: 'BID_STATE_EXPIRED' },
    Completed: { id: 4, value: 'Completed', label: 'BID_STATE_COMPLETED' }
}

const BidStatesValues = objPropsById(BID_STATES, 'value')
const BidStatesLabels = objPropsById(BID_STATES, 'label')

module.exports = {
    BID_STATES: BID_STATES,
    BidStatesValues: BidStatesValues,
    BidStatesLabels: BidStatesLabels
}