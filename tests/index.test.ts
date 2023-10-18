import { describe, it, expect } from "bun:test";
import shellExec from "../src";

describe("should export function", () => {
  it("function", () => {
    expect(shellExec).toBeDefined();
    expect(typeof shellExec).toBe("function");
  });
});

describe("should return promise", () => {
  it("promise", () => {
    expect(shellExec("")).resolves.toMatchObject({
      stdout: "",
      stderr: "",
    });
  });
});

describe("must return the code 64 on command result", () => {
  it("exit 64", () => {
    expect(shellExec("exit 64")).resolves.toMatchObject({ code: 64 });
  });
});
