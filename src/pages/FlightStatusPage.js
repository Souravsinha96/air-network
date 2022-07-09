import AppBar from "../components/appBar/AppBar";
import { FlightStatus } from "../components/flightStatus/FlightStatus";
import BaseLayout from "../layouts/BaseLayout";

const FlightStatusPage = () => {
  return (
    <BaseLayout>
      <AppBar />

      <FlightStatus />
    </BaseLayout>
  );
};
export default FlightStatusPage;
