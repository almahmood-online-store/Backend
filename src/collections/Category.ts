import { CollectionConfig } from "payload/types";

const Category: CollectionConfig = {
	slug: "category",
	access: {
		read: () => true, // Allows public read access
		create: ({ req: { user } }) => user && user.role === "admin", // Only admin users can create
		update: ({ req: { user } }) => user && user.role === "admin", // Only admin users can update
		delete: ({ req: { user } }) => user && user.role === "admin", // Only admin users can delete
	},
	fields: [
		{
			name: "_id",
			type: "text",
			required: true,
		},
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
			name: "image",
			type: "text",
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
