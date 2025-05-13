import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTags, faSearch, faCode, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';

export default function FeatureSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Our AI-driven features
            </h2>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FontAwesomeIcon icon={faChartLine} className="w-6 h-6 text-blue-500" />
                <span>Instant Analytics</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Our AI offers real-time data insights to optimize safety and efficiency on worksites.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FontAwesomeIcon icon={faTags} className="w-6 h-6 text-blue-500" />
                <span>Metadata</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Automatically collects and organizes metadata for safety compliance and auditing.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FontAwesomeIcon icon={faSearch} className="w-6 h-6 text-blue-500" />
                <span>SEO & Performance</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Optimize your site’s safety and performance with AI-driven SEO and analytics.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-blue-500" />
                <span>Custom Code</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Integrate custom code into your site to enhance its safety features based on specific needs.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 text-blue-500" />
                <span>Localization</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Ensure your site complies with local safety regulations, no matter where your teams are located.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FontAwesomeIcon icon={faLink} className="w-6 h-6 text-blue-500" />
                <span>Canonical URL</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Use canonical URLs to ensure accurate tracking and indexing of your safety-related pages.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
