import { Category } from "@prisma/client";
import Link from "next/link";

export default function ShowCategories({ categories }: { categories: Category[] }) {
    return (
        <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
            {categories.map(category => (
                <li key={category.category_id} className="nav-item hover:bg-gray-100/90 hover:transition rounded-lg hover:duration-500 hover:scale-125">
                    <Link href="#" className="nav-link">{category.name}</Link>
                </li>
            ))}
        </ul>
    );
}
export async function CategorySelect({ categories }: { categories: Category[] }) {
    return (
        <select className="form-select border-0 bg-transparent">
            <option value="">All Categories</option>
            {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
}
