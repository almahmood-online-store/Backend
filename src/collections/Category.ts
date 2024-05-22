import { CollectionConfig } from "payload/types";
import { admins } from "../access/admins";
import { adminsOrLoggedIn } from "../access/adminsOrLoggedIn";

const Category: CollectionConfig = {
	slug: "category",
	access: {
		read: () => true, // Allows public read access
		update: admins,
		create: admins,
		delete: admins,
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
		},
		{
			name: "parent",
			type: "relationship",
			relationTo: "category",
		},
		{
			name: "media",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "colors",
			type: "group",
			fields: [
				{
					name: "start",
					type: "text",
				},
				{
					name: "end",
					type: "text",
				},
			],
		},
		{
			name: "level",
			type: "number",
		},
		{
			name: "children",
			type: "relationship",
			relationTo: "category",
			hasMany: true,
		},
		{
			name: "createdAt",
			type: "date",
		},
		{
			name: "updatedAt",
			type: "date",
		},
	],
	timestamps: true,
};

export default Category;
