import AppBar from "../components/appBar/AppBar";
import BaseLayout from "../layouts/BaseLayout";
import UserInfo from "../components/userInfo/UserInfo";
const UserInfoPage = () => {
  return (
    <BaseLayout>
      <AppBar />
      <UserInfo />
    </BaseLayout>
  );
};
export default UserInfoPage;
