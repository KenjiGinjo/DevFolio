// Simulated function for generating session IDs
export async function generateSessionId() {
  return `session_${Math.random().toString(36).substring(2, 15)}`;
}
