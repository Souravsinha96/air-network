import { Airports } from "../components/airports/Airports";
import AppBar from "../components/appBar/AppBar";
import BaseLayout from "../layouts/BaseLayout";
const AirportsPage = () => {
  return (
    <BaseLayout>
      <AppBar />
      <Airports />
    </BaseLayout>
  );
};
export default AirportsPage;
