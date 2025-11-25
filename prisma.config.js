import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    datasource: {
        url: env(DATABASE_URL), // previously: url()
        directUrl: env("DIRECT_URL"), // optional, for migrations
    },
});
