const { objPropsById, toSeconds, mapArrayByProp } = require('./helper')

const BID_STATE = {
    Unknown: { id: 0, value: 'Unknown', eventName: 'NoEvent', label: 'BID_STATE_UNKNOWN' },
    Active: { id: 1, value: 'Active', eventName: 'LogBidCommitment', label: 'BID_STATE_ACTIVE' },
    Canceled: { id: 2, value: 'Canceled', eventName: 'LogBidCancel', label: 'BID_STATE_CANCEL' },
    DeliveryTimedOut: { id: 3, value: 'DeliveryTimedOut', eventName: 'LogBidTimeout', label: 'BID_STATE_DELIVERY_TIME_OUT' },
    DeliveryFailed: { id: 4, value: 'DeliveryFailed', eventName: 'LogBidFinalize', label: 'BID_STATE_DELIVERY_FAILED' },
    DeliverySucceeded: { id: 5, value: 'DeliverySucceeded', eventName: 'LogBidFinalize', label: 'BID_STATE_DELIVERY_SUCCEEDED' },
}

const BidStateValues = objPropsById(BID_STATE, 'value')
const BidStateLabels = objPropsById(BID_STATE, 'label')
const BidStateEventNames = objPropsById(BID_STATE, 'eventName')

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

const SIGNATURE_MODE = {
    NO_SIG: { id: 0, value: 'NO_SIG', label: 'SIGN_TYPES_NO_SIG' },
    EIP712: { id: 1, value: 'EIP712', label: 'SIGN_TYPES_EIP712', sigPrefix: '' },
    GETH: { id: 2, value: 'GETH', label: 'SIGN_TYPES_GETH', sigPrefix: '\x19Ethereum Signed Message:\n32' }, // Eth personal
    TREZOR: { id: 3, value: 'TREZOR', label: 'SIGN_TYPES_TREZOR', sigPrefix: '\x19Ethereum Signed Message:\n\x20' },
    ADEX: { id: 4, value: 'ADEX', label: 'SIGN_TYPES_ADEX', sigPrefix: '\x19Ethereum Signed Message:\n108By signing this message, you acknowledge signing an AdEx bid with the hash:\n' },
}

const SignatureModeValues = objPropsById(SIGNATURE_MODE, 'value')
const SignatureModeLabels = objPropsById(SIGNATURE_MODE, 'label')

const TX_STATUS = {
    Pending: { id: 0, value: 'Pending', label: 'TRANSACTION_STATUS_PENDING' },
    Success: { id: 1, value: 'Success', label: 'TRANSACTION_STATUS_SUCCESS' },
    Error: { id: 2, value: 'Error', label: 'TRANSACTION_STATUS_ERROR' },
}

const TxStatusValues = objPropsById(TX_STATUS, 'value')
const TxStatusLabels = objPropsById(TX_STATUS, 'label')

module.exports = {
    BID_STATE: BID_STATE,
    BidStateValues: BidStateValues,
    BidStateLabels: BidStateLabels,
    BidStateEventNames: BidStateEventNames,
    TIMEOUTS: TIMEOUTS,
    timeoutsByValue: timeoutsByValue,
    SIGNATURE_MODE: SIGNATURE_MODE,
    SignatureModeValues: SignatureModeValues,
    SignatureModeLabels: SignatureModeLabels,
    TX_STATUS: TX_STATUS,
    TxStatusValues: TxStatusValues,
    TxStatusLabels: TxStatusLabels
}