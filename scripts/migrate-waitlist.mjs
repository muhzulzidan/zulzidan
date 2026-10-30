import { migrateWaitlist } from "../src/lib/waitlist-store.mjs";
await migrateWaitlist();
console.log("Waitlist tables are ready in the shared leads database.");
