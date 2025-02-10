import { Category } from "@prisma/client";
import Link from "next/link";

export function ShowCategories({ categories }: { categories: Category[] }) {
    return (
        <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
            {categories.map(category => (
                <li key={category.category_id} className="nav-item hover:bg-gray-100/90 hover:transition rounded-lg hover:duration-500 hover:scale-125">
                    <Link href={`category/${category.category_id}`} className="nav-link">{category.name}</Link>
                </li>
            ))}
        </ul>
    );
}
