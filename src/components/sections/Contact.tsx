import React from "react";
import Image from "next/image";
import { Title, P, Container, Hyperlink, List, ListItem } from "../elements";
import { Gap, Justify } from "../enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <Container>
      <Title title="Contato" />
      <P
        text="Caso você também seja apaixonado por tecnologia ou tenha interesse
            em algumas das minhas outras áreas de interesse, sinta-se à vontade
            para me enviar uma mensagem através das minhas redes sociais. Será
            um prazer trocar conhecimentos e ideias!"
      />
      <List>
        <ListItem justify={Justify.start} gap={Gap["16px"]}>
          <Hyperlink
            href="https://github.com/wilsonsdr"
            children={<FontAwesomeIcon icon={faGithubSquare} fontSize={30} />}
          />
          <Hyperlink
            href="https://www.linkedin.com/in/wilsonsdr/"
            children={<FontAwesomeIcon icon={faLinkedin} fontSize={30} />}
          />
          <Hyperlink
            href="mailto:wilsonsdr@gmail.com"
            children={
              <FontAwesomeIcon icon={faSquareGooglePlus} fontSize={30} />
            }
          />
        </ListItem>
      </List>
      <Image
        className="fixed left-2/3 top-1/2 -z-50 h-[100px] w-[100px] max-md:opacity-30"
        src="/img/paper-airplane.svg"
        alt="paper-airplane"
        width={100}
        height={100}
        loading="lazy"
      />
    </Container>
  );
}
