import React from "react";

const OpenGraphTags: React.FC = () => {
  return (
    <React.Fragment>
      <meta property="og:url" content="https://meucurso.com.br" />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="MeuCurso - Do seu jeito.  No seu tempo."
      />
      <meta
        property="og:description"
        content="Cursos para o Exame da OAB, Carreiras Jurídicas, Carreiras Públicas, Pós Graduação Jurídica certificada pelo MEC, Cursos de Extensão Profissional. Cursos Online e Presenciais em São Paulo"
      />
      <meta
        property="og:image"
        content="/assets/images/landing/preview_meucurso.png"
      />
    </React.Fragment>
  );
};

export default OpenGraphTags;
