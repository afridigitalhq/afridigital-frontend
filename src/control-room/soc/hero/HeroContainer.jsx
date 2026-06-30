import BrandHero from './BrandHero';
import EcosystemOrbit from './EcosystemOrbit';
import SystemSummary from './SystemSummary';
import LiveBanner from './LiveBanner';
import LiveEcosystemGlobe from './globe/LiveEcosystemGlobe';

export default function HeroContainer() {
  return (
    <>
      <BrandHero />
      <LiveEcosystemGlobe />
      <EcosystemOrbit />
      <SystemSummary />
      <LiveBanner />
    </>
  );
}
