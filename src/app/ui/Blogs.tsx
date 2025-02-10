import Link from "next/link";
import { getLatestBlogs } from "../lib/action";
import Image from "next/image";

export async function Blogs() {
    const blogs = await getLatestBlogs();

    return (
        <section id="latest-blog" className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="section-header d-flex align-items-center justify-content-between my-5">
                        <h2 className="section-title">Our Recent Blog</h2>
                        <div className="btn-wrap align-right">
                            <Link href="blogs" className="d-flex align-items-center nav-link">Read All Articles <svg width="24" height="24"><use href="#arrow-right"></use></svg></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.map(blog => (
                        <div key={blog.blog_id} className="col-md-4">
                            <Link href={blog.blog_id} className="post-item card border-0 shadow-sm p-3">
                                <div className="image-holder zoom-effect">
                                    <Image height={200} width={200} src={`/${blog.imageUrl}`} alt={blog.title} className="card-Image-top w-full" />
                                </div>
                                <div className="card-body">
                                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                        <div className="meta-date items-center flex"><svg width="16" height="16"><use href="#calendar"></use></svg>{blog.dateCreated.toDateString()}</div>
                                        <div className="meta-categories flex items-center"><svg width="16" height="16"><use href="#category"></use></svg>{blog.category.name}</div>
                                    </div>
                                    <div className="post-header">
                                            <h3 className="post-title text-decoration-none font-bold">{blog.title}</h3>                                        
                                        <p className="truncate w-full">{blog.body}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}