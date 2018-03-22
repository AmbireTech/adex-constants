const { objPropsById, toSeconds, mapArrayByProp } = require('./helper')

const BID_STATES = {
    DoesNotExist: { id: 0, value: 'DoesNotExist', eventName: 'NoEvent', label: 'BID_STATE_DOES_NOT_EXIST' },
    Accepted: { id: 1, value: 'Accepted', eventName: 'LogBidAccepted', label: 'BID_STATE_ACCEPTED' },
    Canceled: { id: 2, value: 'Canceled', eventName: 'LogBidCanceled', label: 'BID_STATE_CANCELED' },
    Expired: { id: 3, value: 'Expired', eventName: 'LogBidExpired', label: 'BID_STATE_EXPIRED' },
    Completed: { id: 4, value: 'Completed', eventName: 'LogBidCompleted', label: 'BID_STATE_COMPLETED' },

    // NOTE: Not smart contracts states used for pending transactions check in the dapp/node (Verified)
    // TODO: Change from confirmed to Verified
    ConfirmedAdv: { id: 10, value: 'ConfirmedByAdvertiser', eventName: 'LogBidConfirmed', label: 'BID_STATE_CONFIRMED_BY_ADVERTISER' },
    ConfirmedPub: { id: 11, value: 'ConfirmedByPublisher', eventName: 'LogBidConfirmed', label: 'BID_STATE_CONFIRMED_BY_PUBLISHER' }
}

const BidStatesValues = objPropsById(BID_STATES, 'value')
const BidStatesLabels = objPropsById(BID_STATES, 'label')
const BidStatesEventNames = objPropsById(BID_STATES, 'eventName')

/*
* TODO: test toMilliseconds or use momentjs
* NOTE: time in second because in solidity time units are in seconds 
* The UI should consider this when displays the data
* TODO: Set proper timeouts, maybe add months (Max timeout 365 days)
*/
const TIMEOUTS = [
    { value: toSeconds({ minutes: 30 }), label: 'BID_TIMEOUT_MINUTES', labelArgs: [30] }, // TEMP: for testing
    { value: toSeconds({ hours: 24 }), label: 'BID_TIMEOUT_HOURS', labelArgs: [24] },
    { value: toSeconds({ hours: 48 }), label: 'BID_TIMEOUT_HOURS', labelArgs: [48] },
    { value: toSeconds({ days: 3 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [3] },
    { value: toSeconds({ days: 5 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [5] },
    { value: toSeconds({ days: 7 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [7] },
    { value: toSeconds({ days: 10 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [10] },
    { value: toSeconds({ days: 14 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [14] },
    { value: toSeconds({ days: 30 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [30] },
    { value: toSeconds({ days: 45 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [45] },
    { value: toSeconds({ days: 60 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [60] },
    { value: toSeconds({ days: 90 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [90] },
    { value: toSeconds({ days: 120 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [120] },
    { value: toSeconds({ days: 180 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [180] },
    { value: toSeconds({ days: 240 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [240] },
    { value: toSeconds({ days: 365 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [365] },
]

const timeoutsByValue = mapArrayByProp(TIMEOUTS, 'value')

const SIGN_TYPES = {
    Eip: { id: 0, value: 'Eip', label: 'SIGN_TYPES_EIP' },
    EthPersonal: { id: 1, value: 'EthPersonal', label: 'SIGN_TYPES_ETH_PERSONAL' },
    Trezor: { id: 3, value: 'Trezor', label: 'SIGN_TYPES_TREZOR' }
}

const SignTypesValues = objPropsById(SIGN_TYPES, 'value')
const SignTypesLabels = objPropsById(SIGN_TYPES, 'label')

const TX_STATUS = {
    Pending: { id: 0, value: 'Pending', label: 'TRANSACTION_STATUS_PENDING' },
    Success: { id: 1, value: 'Success', label: 'TRANSACTION_STATUS_SUCCESS' },
    Error: { id: 2, value: 'Error', label: 'TRANSACTION_STATUS_ERROR' },
}

const TxStatusValues = objPropsById(TX_STATUS, 'value')
const TxStatusLabels = objPropsById(TX_STATUS, 'label')

module.exports = {
    BID_STATES: BID_STATES,
    BidStatesValues: BidStatesValues,
    BidStatesLabels: BidStatesLabels,
    BidStatesEventNames: BidStatesEventNames,
    TIMEOUTS: TIMEOUTS,
    timeoutsByValue: timeoutsByValue,
    SIGN_TYPES: SIGN_TYPES,
    SignTypesValues: SignTypesValues,
    SignTypesLabels: SignTypesLabels,
    TX_STATUS: TX_STATUS,
    TxStatusValues: TxStatusValues,
    TxStatusLabels: TxStatusLabels
}