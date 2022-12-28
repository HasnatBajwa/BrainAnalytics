import React from 'react';
import {FloatingWhatsApp} from 'react-floating-whatsapp';
import Brain from '../../assets/company/Brain.jpg'

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
    phoneNumber='+923262724646'
    accountName='BrainAnalytics'
    avatar={Brain}
    darkMode={true}
    notification={true}
    notificationSound={true}
    notificationDelay={10}
    notificationClassName="floating-whatsapp-notification"
    />
  )
}

export default Whatsapp