function notifyUser(notificationFn) {
    notificationFn()
}

const emailNotification = () => console.log('Email sent.')
const smsNotification = () => console.log('SMS sent.')

notifyUser(smsNotification)