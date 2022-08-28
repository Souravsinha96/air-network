import Airlines from "../components/airlines/Airlines";
import AppBar from "../components/appBar/AppBar";
import BaseLayout from "../layouts/BaseLayout";

const AirlinesPage = () => {
  return (
    <BaseLayout>
      <AppBar />
      <Airlines />
    </BaseLayout>
  );
};
export default AirlinesPage;
