import PatientForm  from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";


export default function Home({searchParams}: SearchParamProps) {

  const isAdmin = searchParams?.admin === "true";

  return (
    <main className="flex h-screen max-h-screen">

      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/plainLogo.png"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit rounded-full"
            />
            <p className="-mt-12 text-xl font-black">VibingHealth</p>
          </div>
        

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 VibingHealth
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/newLandingCover.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />

    </main>
  );

};
