import React from "react";
import {
  FooterContainer,
  FooterStyled,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem Somos</FooterTitle>
        <Typography>
          E-Diaristas te ajuda a encontrar um profissional perfeito para
          realizar a limpeza da sua casa. Garantimos a melhor profissional com
          total segurança e praticidade! São milhares de clientes satisfeitos
          por todo o país.
        </Typography>
        <FooterTitle>Baixe nossos Aplicativos</FooterTitle>
        <AppList>
          <li>
            <a href={"/"} target={"_blank"}>
              <img src={"./img/logos/app-store.png"} alt={"app Store"} />
            </a>
          </li>
        </AppList>
        <Typography></Typography>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
