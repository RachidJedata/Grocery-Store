import Image from "next/image";

import { Metadata } from 'next';
import { Suspense } from "react";
import LoginForm  from "../ui/login-form";

export const metadata: Metadata = {
    title: 'Login'
};

export default async function Page() {
    return (
        <section className="py-5">
            <div className="container-fluid">

                <div className="bg-secondary py-5 my-5 rounded-5 ad1">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-6 p-5">
                                <Image width={500} height={500} src="/images/logo.png" alt="logo" className="Image-fluid" />
                                <p className="pt-4">Login to grocery store, so that you can buy , mark as favourite and so on...
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur assumenda iusto tempora similique praesentium magnam
                                </p>
                            </div>
                            <div className="col-md-6 p-5">
                                <Suspense>
                                    <LoginForm />
                                </Suspense>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}