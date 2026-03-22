/**
 * APEXELEC — Form Submission Service
 * 
 * HOW IT WORKS:
 * 1. Form data is sent to a Google Apps Script Web App
 * 2. The Apps Script saves the data to a Google Sheet
 * 3. An email notification is automatically sent to info@apexelec.uk
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com → New Project
 * 2. Paste the Apps Script code from README.md
 * 3. Deploy as Web App → Anyone can access
 * 4. Copy the Web App URL and paste it below as APPS_SCRIPT_URL
 */

// ⚠️ REPLACE THIS with your Google Apps Script Web App URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

export async function submitEnquiry(formData) {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Apps Script
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'Apexelec Website',
      }),
    })

    // no-cors returns opaque response, so we assume success
    return { success: true }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Fallback: open email client with pre-filled body
 * Used if Google Apps Script is not yet configured
 */
export function openMailtoFallback(formData) {
  const subject = encodeURIComponent(`New ${formData.serviceType} Enquiry – ${formData.name}`)
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}\n` +
    `Service: ${formData.serviceType}\n` +
    `Postcode: ${formData.postcode || 'N/A'}\n` +
    `Preferred Date: ${formData.preferredDate || 'N/A'}\n\n` +
    `Message:\n${formData.message}`
  )
  window.location.href = `mailto:info@apexelec.uk?subject=${subject}&body=${body}`
}
