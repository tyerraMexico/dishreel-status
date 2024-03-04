import axios from "axios"

const MAIL_API_URL = process.env.MAIL_API_URL ?? ''
const MAIL_USER = process.env.MAIL_USER ?? ''
const API_KEY = process.env.API_KEY ?? ''

const sendErrorMail = async () => {
  await axios.post(
    MAIL_API_URL,
    {
      email: MAIL_USER,
      subject: 'Error en producción',
      html: `
        <h1>Error en producción</h1>
        <p>Se ha detectado un error en producción, puede que la aplicación no esté funcionando correctamente</p>
        <p>Fecha: ${new Date().toISOString()}</p>
    `
    },
    {
      headers: {
        'x-api-key': API_KEY
      }
    }
  );
}

export default sendErrorMail
