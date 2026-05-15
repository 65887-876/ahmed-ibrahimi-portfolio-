/** Contact & privacy — portfolio owner */
export const OWNER_EMAIL = 'hamzaboukharii@gmail.com'

export function getEmailJsConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  }
}

export function isEmailJsConfigured() {
  const { publicKey, serviceId, templateId } = getEmailJsConfig()
  return Boolean(publicKey && serviceId && templateId)
}
