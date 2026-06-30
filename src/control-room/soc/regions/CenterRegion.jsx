import InfrastructureBoard from '../boards/InfrastructureBoard';
import SecurityBoard from '../boards/SecurityBoard';
import EcosystemBoard from '../boards/EcosystemBoard';
import AfriAIBoard from '../boards/AfriAIBoard';
import AlertBoard from '../boards/AlertBoard';

export default function CenterRegion() {
  return (
    <>
      <InfrastructureBoard />
      <SecurityBoard />
      <EcosystemBoard />
      <AfriAIBoard />
      <AlertBoard />
    </>
  );
}
