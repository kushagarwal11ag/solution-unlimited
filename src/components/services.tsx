import Image from "next/image";
import { Button } from "./ui/button";

const services = () => {
  return (
    <section id="services" className="dark:bg-black container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-2 text-center">
          <div className="inline-block rounded-lg text-sm text-black/75 dark:text-white/75">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Tailored Solutions for Your Business
          </h2>
          {/* <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Solution Unlimited offers a wide range of services to meet your
            business needs, from property management to electrical installation
            and repair.
          </p> */}
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our services include electrical and civil repairs, maintenance, new
            installations, and PEB shed fabrication. We also provide electrical
            inspections and testing to ensure your infrastructure meets all
            standards.
          </p>
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            With 24/7 emergency services, we minimize downtime and keep your
            operations running smoothly. Our skilled team delivers high-quality
            work tailored to your specific needs, eliminating the hassle of
            coordinating with multiple vendors.
          </p>
        </div>
        <div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Design and PEB Fabrication</h3>
              <p className="text-black/85 dark:text-white/85">
                We offer design, fabrication, installation, upgrades, repairs,
                and maintenance of Pre-Engineered Building (PEB) structures. Our
                durable, compliant solutions extend the lifespan and
                functionality of your buildings.
              </p>
              <ul className="list-disc list-inside">
                <li>Steel Building Solutions</li>
                <li>Industrial and Commercial Building Construction</li>
                <li>Roofing and Cladding Solutions</li>
                <li>Structural Steel Fabrication</li>
                <li>Pre-Engineered Building Systems</li>
              </ul>
              <Button variant="default">Learn More</Button>
            </div>
          </div>
          <div className="relative overflow-hidden h-64">
            <Image
              src="/fabrication.jpg"
              layout="fill"
              objectFit="cover"
              alt="PEB Fabrication"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden h-64">
            <Image
              src="/electric.jpg"
              layout="fill"
              objectFit="cover"
              alt="Electrical Services"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Electrical Services</h3>
              {/* <p className="text-black/85 dark:text-white/85">
                We provide comprehensive services for electrical and civil
                systems, including new installations, upgrades, repairs and
                maintenance.
              </p> */}
              <p className="text-black/85 dark:text-white/85">
                We provide end-to-end electrical services, including
                installations, upgrades, repairs, and maintenance. Our team
                ensures efficient, safe, and minimally disruptive electrical
                systems tailored to your needs.
              </p>
              <ul className="list-disc list-inside">
                <li> Residential and Commercial Wiring</li>
                <li> Industrial Electrical Services</li>

                <li> New Installations and Upgrades </li>
                <li> Electromechanical Installation and Maintenance </li>
                <li> Industrial Automation Solutions</li>
                <li>
                  Electrical and Mechanical machine Installation and Maintenance
                </li>
                <li> Electrical Inspections and testing</li>
              </ul>
              <Button variant="default">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Plumbing Services</h3>
              <p className="text-black/85 dark:text-white/85">
                We deliver comprehensive plumbing services, from installations
                and upgrades to repairs and maintenance. Our skilled team
                ensures efficient, safe, and reliable plumbing systems,
                addressing issues promptly.
              </p>

              <Button variant="default">Learn More</Button>
            </div>
          </div>
          <div className="relative overflow-hidden h-64">
            <Image
              src="/plumbing.jpg"
              layout="fill"
              objectFit="cover"
              alt="Plumbing Services"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
