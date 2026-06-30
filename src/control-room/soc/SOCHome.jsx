import HeroContainer from './hero/HeroContainer';
import HeaderRegion from './regions/HeaderRegion';
import LeftRegion from './regions/LeftRegion';
import CenterRegion from './regions/CenterRegion';
import RightRegion from './regions/RightRegion';
import FooterRegion from './regions/FooterRegion';

export default function SOCHome(){
  return (
    <>
      <HeroContainer />
      <HeaderRegion />
      <LeftRegion />
      <CenterRegion />
      <RightRegion />
      <FooterRegion />
    </>
  );
}
