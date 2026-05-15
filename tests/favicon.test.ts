import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

describe("favicon assets", () => {
  it("includes DA monogram icon files in the app directory", () => {
    const appDir = join(process.cwd(), "app");

    expect(existsSync(join(appDir, "icon.png"))).toBe(true);
    expect(existsSync(join(appDir, "apple-icon.png"))).toBe(true);
    expect(existsSync(join(appDir, "favicon.ico"))).toBe(true);
  });
});
