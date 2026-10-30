export const BUSINESS_TYPES = ["Consulting & coaching", "Creative & marketing", "Home & local services", "Professional services", "Education & training", "Other service business"];
export const WAITLIST_STATUSES = ["new", "reviewing", "waitlisted", "selected", "building", "delivered", "declined", "withdrawn"];

export function validateApplication(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Please complete the application form.");
  const text = (key, max, required = false) => {
    const value = typeof body[key] === "string" ? body[key].trim() : "";
    if (value.length > max || (required && !value)) throw new Error(`Please check the ${key.replace(/([A-Z])/g, " $1").toLowerCase()} field.`);
    return value;
  };
  const result = {
    name: text("name", 120, true), email: text("email", 254, true).toLowerCase(),
    business: text("business", 160, true), businessType: text("businessType", 80, true),
    website: text("website", 2048), goal: text("goal", 2000, true),
    country: text("country", 100, true), referral: text("referral", 300),
    source: text("source", 300) || "/", referrer: text("referrer", 600),
  };
  if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(result.email)) throw new Error("Please enter a valid email address.");
  if (!BUSINESS_TYPES.includes(result.businessType)) throw new Error("Please select your type of business.");
  if (body.consent !== true) throw new Error("Please agree to being contacted about your application.");
  if (result.goal.length < 20) throw new Error("Please tell me a little more about what your website needs to do (at least 20 characters).");
  if (result.website) {
    try {
      const url = new URL(/^https?:\/\//i.test(result.website) ? result.website : `https://${result.website}`);
      if (!["https:", "http:"].includes(url.protocol) || !url.hostname.includes(".") || url.username || url.password || /\s/.test(result.website)) throw new Error();
      result.website = url.href;
    } catch { throw new Error("Please enter a valid website or social profile URL, or leave it blank."); }
  }
  result.attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map(key => [key, typeof body.attribution?.[key] === "string" ? body.attribution[key].slice(0, 200) : ""]));
  return result;
}
