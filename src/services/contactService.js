/*
 * Sends a contact request. When REACT_APP_CONTACT_ENDPOINT is configured the
 * request is posted there; otherwise it is simulated so the landing page can be
 * reviewed before the backend endpoint is available.
 */
const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT || "";
const SIMULATED_DELAY_MS = 600;

export async function submitContactRequest(contactRequest) {
  if (!CONTACT_ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
    return { status: "received" };
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactRequest),
  });

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}`);
  }

  return response.json();
}
