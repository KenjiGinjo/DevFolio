import { Exception } from "./exception";

describe("Exception", () => {
  describe("Unauthorized", () => {
    it("should create an Unauthorized exception with default code", () => {
      const unauthorized = new Exception.Unauthorized("Invalid credentials");
      expect(unauthorized.status).toBe(401);
      expect(unauthorized.message).toBe("Invalid credentials");
      expect(unauthorized.code).toBe("E_UNAUTHORIZED");
    });

    it("should create an Unauthorized exception with custom code", () => {
      const unauthorized = new Exception.Unauthorized(
        "Access denied",
        "CustomCode",
      );
      expect(unauthorized.status).toBe(401);
      expect(unauthorized.message).toBe("Access denied");
      expect(unauthorized.code).toBe("E_CUSTOM");
    });
  });
});
