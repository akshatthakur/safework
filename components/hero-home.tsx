import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Prevent accidents before they happen.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                SafeWorkAI monitors live camera feeds and site data to detect risks in real time — from mechanical failures to unsafe behavior. Reduce incidents, increase compliance, and keep your teams protected.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="mailto:info@safeworkai.com"
                  >
                    <span className="relative inline-flex items-center">
                      Contact Us{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  SafeWorkAI.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0 space-y-1">
  <span className="block animate-[code-1_10s_infinite] text-gray-200">
    Initializing SafeWorkAI Core...
  </span>
  <span className="block animate-[code-2_10s_infinite]">
    ✅ Video stream connected: zone_3_cam_12
  </span>
  <span className="block animate-[code-3_10s_infinite]">
    🧠 Model loaded: HazardNet_v3.4
  </span>
  <span className="block animate-[code-4_10s_infinite]">
    ⚠️ Detection: worker_missing_helmet @ 13:02:11
  </span>
  <span className="block animate-[code-5_10s_infinite]">
    🚧 Risk level: Medium — PPE violation
  </span>
  <span className="block animate-[code-6_10s_infinite]">
    🔁 Notified: Safety supervisor (ID 2271)
  </span>
  <span className="block animate-[code-7_10s_infinite] text-gray-200">
    ✔ Incident logged to compliance dashboard
  </span>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
