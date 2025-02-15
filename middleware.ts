import { withAuth } from "next-auth/middleware";

export default withAuth((req) => {
  console.log("Middleware triggered for:", req.nextUrl.pathname);
  // You can perform additional custom logic here if needed.
}, {
  pages: {
    signIn: "/auth/signin",
  },
});

export const config = {
  matcher: ['/dashboard', '/app/:path*', '/other/:path*', '/help/:path*']
};
