// Simple cookie parsing function
export function parseCookies(cookieHeader) {
  return Object.fromEntries(
    cookieHeader.split(";").map((cookie) => {
      const [key, value] = cookie.split("=");
      return [key.trim(), decodeURIComponent(value)];
    })
  );
}
