import Image from "next/image";

import { getCategories } from "../lib/action";

import { ShowCategories } from "../ui/showCategories";
import Link from "next/link";
import { SearchInput, SearchInputMobile } from "../ui/searchInput";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { User } from "../user";
import { LoginButton } from "../ui/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasCart" aria-labelledby="My Cart">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Growers cider</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Fresh grapes</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Heinz tomato ketchup</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </div>
        </div>
      </div>

      {/* search for mobile */}
      <SearchInputMobile />

      <header>
        <div className="container-fluid">
          <div className="row py-3 border-bottom">

            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
              <div className="main-logo">
                <Link href="/">
                  <Image width={250} height={250} src="/images/logo.png" alt="logo" className="Image-fluid" />
                </Link>
              </div>
            </div>

            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
              <div className="search-bar row bg-light p-2 my-2 rounded-4">
                <Suspense>
                  <SearchInput categories={categories} />
                </Suspense>

                <button className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
                </button>
              </div>
            </div>

            <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
              <Suspense>
                {/* <LoginButton/> */}
                <button className="rounded-lg font-bold bg-slate-100 text-orange-700 py-2 px-4">
                  {/* <UserName /> */}
                  {session?.user.userId}
                  {/* <User /> */}
                </button>
              </Suspense>
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a href="#" className="rounded-full p-2 mx-1">
                    <svg width="24" height="24" viewBox="0 0 24 24"><use href="#user"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="rounded-circle p-2 mx-1">
                    <svg width="24" height="24" viewBox="0 0 24 24"><use href="#heart"></use></svg>
                  </a>
                </li>
                <li className="d-lg-none">
                  <a href="#" className="rounded-circle p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                    <svg width="24" height="24" viewBox="0 0 24 24"><use href="#cart"></use></svg>
                  </a>
                </li>
                <li className="d-lg-none">
                  <a href="#" className="rounded-circle p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                    <svg width="24" height="24" viewBox="0 0 24 24"><use href="#search"></use></svg>
                  </a>
                </li>
              </ul>

              <div className="cart text-end d-none d-lg-block dropdown">
                <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                  <span className="cart-total fs-5 fw-bold">$1290.00</span>
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="container-fluid">
          <div className="row mx-auto py-3">
            <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
              <nav className="main-menu d-flex navbar navbar-expand-lg">

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                  <div className="offcanvas-header justify-content-center">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>

                  <div className=" offcanvas-body">
                    <ShowCategories categories={categories} />
                  </div>

                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {children}
    </>
  );
}
