import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";


export default function FeatureSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              AI-driven features for a safer worksite
            </h2>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image
                  src="@/public/images/analytics.svg" // Path to the icon in the public folder
                  alt="Real-Time Safety Analytics"
                  width={24}
                  height={24}
                  className="text-blue-500"
                />
                <span>Real-Time Safety Analytics</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Monitor site conditions with real-time analytics, ensuring immediate responses to safety risks.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image
                  src="@/public/images/metadata.svg" // Path to the icon in the public folder
                  alt="Safety Data Management"
                  width={24}
                  height={24}
                  className="text-blue-500"
                />
                <span>Safety Data Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Seamlessly track and manage compliance data to ensure adherence to safety regulations.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image
                  src="@/public/images/search.svg" // Path to the icon in the public folder
                  alt="Predictive Safety Insights"
                  width={24}
                  height={24}
                  className="text-blue-500"
                />
                <span>Predictive Safety Insights</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Harness the power of AI to predict potential safety hazards before they escalate.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image
                  src="@/public/images/code.svg" // Path to the icon in the public folder
                  alt="Custom Safety Solutions"
                  width={24}
                  height={24}
                  className="text-blue-500"
                />
                <span>Custom Safety Solutions</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Tailor AI-driven safety measures to fit the unique needs of your worksite, ensuring optimal protection.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image
                  src="@/public/images/compliance.svg" // Path to the icon in the public folder
                  alt="Global Safety Compliance"
                  width={24}
                  height={24}
                  className="text-blue-500"
                />
                <span>Global Safety Compliance</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Ensure that your worksite meets local and international safety standards, no matter where you operate.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Image
                  src="@/public/images/link.svg" // Path to the icon in the public folder
                  alt="Safety Metrics Tracking"
                  width={24}
                  height={24}
                  className="text-blue-500"
                />
                <span>Safety Metrics Tracking</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Continuously track safety performance metrics to improve site safety over time.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
