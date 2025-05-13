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
              AI-driven features for a safer worksite
            </h2>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Real-Time Risk Insights</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Leverage AI to continuously monitor worksite conditions and surface emerging risks before incidents occur.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Automated Safety Metadata</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Capture key metadata from every safety event—incidents, near-misses, inspections—for faster analysis and compliance tracking.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>AI-Powered Hazard Detection</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Detect unsafe actions, environmental threats, and equipment anomalies through live video and sensor data analysis.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Custom Safety Triggers</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Configure AI-based thresholds for risk factors and receive instant alerts when safety boundaries are crossed.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Localized Compliance Intelligence</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Adapt protocols to local laws and standards automatically, ensuring your worksite meets jurisdiction-specific safety mandates.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Unified Safety Records</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Maintain a single source of truth for training, inspections, and incident history—centralized, searchable, and secure.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
