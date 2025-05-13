import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Safer sites. Smarter systems.
              <br />
              Built for the future of work.
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" /></svg>
                <span>Real-Time Risk Monitoring</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Our AI continuously scans worksites using video and sensor data to detect unsafe conditions in real time—before incidents happen.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9Z" /></svg>
                <span>Compliance Made Easy</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Automatically flag and log safety violations to streamline compliance with industry standards and local regulations.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                <span>Predictive Safety</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Leverage historical incident data to forecast where accidents are likely to occur, empowering your team to act preemptively.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" /></svg>
                <span>Incident Replay</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Review and learn from past events with visual playback and analytics—helping teams understand what went wrong and how to fix it.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M10.284.33a1 1 0 1 0-.574 1.917A6.049 6.049 0 0 1 12.127 3.64A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33Z" /></svg>
                <span>Multilingual Support</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Enable safety alerts and signage in multiple languages to ensure clear communication with diverse crews across global projects.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1Z" /></svg>
                <span>System Integrations</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Connect SafeWorkAI to your existing tools—from access control and payroll to fleet management—for a unified safety ecosystem.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
