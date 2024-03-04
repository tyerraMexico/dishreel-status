import 'dotenv/config'
import axios from 'axios'
import saveSatus from './saveStatus'
import sendErrorMail from './sendErrorMail'

(async () => {
  const id = new Date().getTime()
  try {
    await axios.get(process.env.URL_TO_CHECK ?? '')
    await saveSatus({ id, status: 'App Working' })
  } catch (error) {
    await saveSatus({ id, status: 'App Error' })
    await sendErrorMail()
  }  
})()