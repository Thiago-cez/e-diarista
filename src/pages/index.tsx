import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@mui/material";
import { FormElementsContainer } from "ui/styles/pages/index.style";

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
      <FormElementsContainer>
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
        />
        <Typography color={"error"}>CEP Inválido</Typography>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px" }}
        >
          Buscar
        </Button>
      </FormElementsContainer>
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
