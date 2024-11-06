// Simulated user retrieval from a token
export function getUserFromToken(token) {
  return { id: `user_${token.substring(0, 5)}` };
}
