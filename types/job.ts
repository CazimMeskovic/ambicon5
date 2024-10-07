import { EmploymentType, UnitTextType } from "next-seo/lib/jsonld/jobPosting";

export interface Job {
	node: JobNode;
}

export interface JobNode {
	id: number;
	title: string;
	excerpt: string;
	slug: string;
	date: string;
	modified?: string;
	content?: string;
	featuredImage: FeaturedImage;
	categories: Categories;
	tags: Tags;
	jobSpecifications?: JobSpecifications;
}

export interface JobSpecifications {
	summary: string;
	salary: number;
	salaryTypeNew: UnitTextType;
	employmentTypeNew: EmploymentType;
	validThrough: string;
}

export interface FeaturedImage {
	node: Node2;
}

interface Node2 {
	sourceUrl: string;
}

interface Categories {
	nodes: Node3[];
}

interface Node3 {
	name: string;
}

interface Tags {
	nodes: Node4[];
}

interface Node4 {
	name: string;
}
