import Link from "next/link"
import { getAllCategories } from "@/app/lib/categories"

export default function Categories() {
    const categories = getAllCategories();

    return ( 
        <>
            <h1>Category Page</h1>
            {categories.map((category) => (
                <div key={category.slug}>
                    <h2><Link href={`/3d-models/categories/${category.slug}`}>{category.displayName}</Link></h2>
                </div>
            ))}
        </>
    )
}