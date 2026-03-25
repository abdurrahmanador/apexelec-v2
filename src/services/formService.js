/**
 * APEXELEC — Form Submission Service (v2 Fix)
 *
 * HOW IT WORKS:
 * 1. Form data is sent to Google Apps Script as a proper POST request
 * 2. Apps Script saves each row to a Google Sheet
 * 3. Apps Script emails info@apexelec.uk automatically
 *
 * SETUP:
 * 1. Go to script.google.com → New Project
 * 2. Paste the contents of ApexelecFormHandler.gs
 * 3. Deploy → New deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL and paste it below
 */

// ⚠️ Replace this with your NEW Web App URL after re-deploying
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbynYoIGY-RtwwAeAT6-p2mXy6ykGhaZ_SJqbPfRS8UcT0IFkqJBCEnKzHpXBAJcZtazbQ/exec'

export async function submitEnquiry(formData) {
  try {
    const payload = JSON.stringify({
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'Apexelec Website',
    })

    // Send as GET with data encoded in the URL query string.
    // This is the only reliable way to pass data through no-cors
    // to Google Apps Script — postData is not accessible otherwise.
    const url = APPS_SCRIPT_URL + '?data=' + encodeURIComponent(payload)

    await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
    })

    return { success: true }

  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Fallback: open email client with pre-filled body
 * Called automatically if the fetch throws (network down, etc.)
 */
export function openMailtoFallback(formData) {
  const subject = encodeURIComponent(
    `New ${formData.serviceType || 'General'} Enquiry – ${formData.name}`
  )
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}\n` +
    `Service: ${formData.serviceType || 'N/A'}\n` +
    `Postcode: ${formData.postcode || 'N/A'}\n` +
    `Preferred Date: ${formData.preferredDate || 'N/A'}\n\n` +
    `Message:\n${formData.message}`
  )
  window.location.href = `mailto:info@apexelec.uk?subject=${subject}&body=${body}`
}