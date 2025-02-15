export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/dashboard', '/app/:path*', '/other/:path*', '/help/:path*']
}
console.log('middleware is running');
