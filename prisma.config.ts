import { defineConfig, env } from "prisma/config";
import { readFileSync } from "fs";
import { resolve } from "path";

// Carregar .env manualmente
try {
  const envFile = readFileSync(resolve(process.cwd(), ".env"), "utf-8");
  envFile.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split("=");
    if (key && valueParts.length > 0) {
      const value = valueParts.join("=").trim();
      process.env[key.trim()] = value.replace(/^["']|["']$/g, "");
    }
  });
} catch (error) {
  console.warn("Could not load .env file");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});