import AppBar from "../components/appBar/AppBar";
import { FlightStatus } from "../components/flightStatus/FlightStatus";
import Menu from "../components/menu/Menu";
import BaseLayout from "../layouts/BaseLayout";

const FlightStatusPage = () => {
  return (
    <BaseLayout>
      <AppBar />
      <Menu />
      <FlightStatus />
    </BaseLayout>
  );
};
export default FlightStatusPage;
