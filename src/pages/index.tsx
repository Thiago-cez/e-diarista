import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais proximos a sua localidade."
        }
      />
      <UserInformation
        name={"Thiago Cezario"}
        picture={"https://github.com/Thiago-cez.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
};

export default Home;
