import { Airports } from "../components/airports/Airports";
import AppBar from "../components/appBar/AppBar";
import Menu from "../components/menu/Menu";
import BaseLayout from "../layouts/BaseLayout";
const AirportsPage = () => {
  return (
    <BaseLayout>
      <AppBar />
      <Menu />
      <Airports />
    </BaseLayout>
  );
};
export default AirportsPage;
