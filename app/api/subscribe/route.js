export async function POST(request) {
  const { email } = await request.json();
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ message: "A valid email is required." }, { status: 400 });
  }

  const endpoint = process.env.MAILCHIMP_ENDPOINT;
  if (!endpoint) {
    return Response.json({ message: "Newsletter subscription is not configured." }, { status: 503 });
  }

  const url = new URL(endpoint.replaceAll("&amp;", "&"));
  const body = new URLSearchParams({ EMAIL: email });
  const response = await fetch(url, { method: "POST", body, headers: { "Content-Type": "application/x-www-form-urlencoded" } });
  if (!response.ok) return Response.json({ message: "Subscription failed." }, { status: 502 });
  return Response.json({ message: "Successfully subscribed." });
}
