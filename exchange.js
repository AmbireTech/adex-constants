const BID_STATUS = {
    DoesNotExist: { value: 'DoesNotExist', label: 'BID_STATE_DOES_NOT_EXIST' },
    Accepted: { value: 'Accepted', label: 'BID_STATE_ACCEPTED' },
    Canceled: { value: 'Canceled', label: 'BID_STATE_CANCELED' },
    Expired: { value: 'Expired', label: 'BID_STATE_EXPIRED' },
    Completed: { value: 'Completed', label: 'BID_STATE_COMPLETED' }
}

module.exports = {
    BID_STATUS: BID_STATUS
}