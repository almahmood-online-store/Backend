import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Category from "./collections/Category";

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: [Users, Category],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	// cors: [
	// 	"https://checkout.stripe.com",
	// 	process.env.PAYLOAD_PUBLIC_SERVER_URL,
	// 	"http://localhost:8081/" || "",
	// ].filter(Boolean),

	// csrf: [
	// 	"https://checkout.stripe.com",
	// 	process.env.PAYLOAD_PUBLIC_SERVER_URL,
	// 	"http://localhost:8081" || "",
	// ].filter(Boolean),

	plugins: [payloadCloud()],
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
});
