import categoriesMegaMenu from "./categoriesMegaMenu";

// MAIN NAVIGATION DATA
const navbarNavigations = [
  {
    title: "OAB 1ª Fase",
    megaMenu: false,
    megaMenuWithSub: false,
    child: [
      {
        title: "Conheça o curso",
        url: "/cursos/cursos-oab-1fase",
      },

      {
        title: "Cursos Gratuitos",
        url: "/categorias/oab-1-fase-cursos-gratuitos",
      },
      {
        title: "Associados AASP",
        url: "/categorias/oab-1-fase-associados-aasp",
      },

      { title: "40º Exame", url: "/categorias/oab-1-fase-40-exame" },
    ],
  },
  {
    title: "OAB 2ª Fase",
    megaMenu: false,
    megaMenuWithSub: false,
    child: [
      {
        title: "Conheça o curso",
        url: "/cursos/cursos-oab-2fase",
      },
      {
        title: "Regular",
        url: "/categorias/oab-2-fase-regular",
      },
      {
        title: "Administrativo",
        url: "/categorias/oab-2-fase-administrativo",
      },
      { title: "Civil", url: "/categorias/oab-2-fase-civil" },
      {
        title: "Constitucional",
        url: "/categorias/oab-2-fase-constitucional",
      },
      { title: "Empresarial", url: "/categorias/oab-2-fase-empresarial" },
      { title: "Penal", url: "/categorias/oab-2-fase-penal" },
      { title: "Trabalho", url: "/categorias/oab-2-fase-trabalho" },
      { title: "Tributário", url: "/categorias/oab-2-fase-tributario" },
      {
        title: "Mentoria 2ª Fase",
        url: "/categorias/oab-2-fase-mentoria-2-fase",
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Pós Graduação",
    child: [
      { title: "Conheça os cursos", url: "/categorias/pos-graduacao" },
    ],
  },

  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Concursos Públicos",
    child: [
      { title: "Conhheça os cursos", url: "/cursos/concursos-publicos" },
      {
        title: "Carreiras Policiais",
        url: "/categorias/concursos-publicos-carreiras-policiais",
      },
      {
        title: "Tribunais",
        url: "/categorias/concursos-publicos-tribunais---mp",
      },
      {
        title: "Procuradorias",
        url: "/categorias/concursos-publicos-procuradorias",
      },
      {
        title: "Planos de assinatura",
        url: "/categorias/concursos-publicos-planos-de-assinatura",
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Atualização e Prática",
    child: [
      { title: "Conheça os cursos", url: "/atualizacao-e-pratica" },
      {
        title: "Cursos",
        child: [
          {
            title: "Administrativo",
            url: "/categorias/atualizacao-e-pratica-administrativo",
          },
          {
            title: "Ambiental",
            url: "/categorias/atualizacao-e-pratica-ambiental",
          },
          {
            title: "Civil",
            url: "/categorias/atualizacao-e-pratica-civil",
          },
          {
            title: "Competências Emocionais",
            url: "/categorias/atualizacao-e-pratica-competencias-emocionais",
          },
          {
            title: "Direito Digital e Compliance",
            url: "/categorias/atualizacao-e-pratica-direito-digital-e-compliance",
          },
          {
            title: "Compilance Digital",
            url: "/searchCategory?CategoryId=82",
          },
          {
            title: "Direito Público",
            url: "/categorias/atualizacao-e-pratica-direito-publico",
          },
          {
            title: "Direito Médico",
            url: "/categorias/atualizacao-e-pratica-direito-medico",
          },
          {
            title: "Diversos",
            url: "/categorias/atualizacao-e-pratica-diversos",
          },
          {
            title: "Empresatial",
            url: "/categorias/atualizacao-e-pratica-empresarial",
          },
          {
            title: "Penal",
            url: "/categorias/atualizacao-e-pratica-penal",
          },
          {
            title: "Previdenciário",
            url: "/categorias/atualizacao-e-pratica-previdenciario",
          },
          {
            title: "Trabalhista",
            url: "/categorias/atualizacao-e-pratica-trabalhista",
          },
        ],
      },
    ],
  },

  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Primeiros passos",
    url: "/cursos/primeiros-passos-na-advocacia",
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Congressos Jovem Advocacia",
    url: "/categorias/congressos-jovem-advocacia",
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "/Professor",
    url: "/professor",
    child: [
      { title: "Conheça os cursos", url: "/#" },
      {
        title: "Alessandro Spilborghs",
        url: "http://aluno.fadeg.com.br/marketplace/index/alessandrospilborghs",
      },
      {
        title: "Carol Macaubal",
        url: "http://aluno.fadeg.com.br/marketplace/index/carolmacaubal",
      },
      {
        title: "Conrado Paulino",
        url: "http://aluno.fadeg.com.br/marketplace/index/conradopaulino",
      },
      {
        title: "Daniel Lamounier",
        url: "http://aluno.fadeg.com.br/marketplace/index/lamounierdaniel",
      },
      {
        title: "Darlan Barroso",
        url: "http://aluno.fadeg.com.br/marketplace/index/darlanbarroso",
      },
      {
        title: "Enki Pimenta",
        url: "http://aluno.fadeg.com.br/marketplace/index/enkipimenta",
      },
      {
        title: "Marcelle Tasoko",
        url: "http://aluno.fadeg.com.br/marketplace/index/marcelletasoko",
      },
      {
        title: "Marcos Oliveira",
        url: "http://aluno.fadeg.com.br/marketplace/index/marcosoliveira",
      },
      {
        title: "Priscila Souto",
        url: "http://aluno.fadeg.com.br/marketplace/index/priscilasouto",
      },
      {
        title: "Savio Chalita",
        url: "http://aluno.fadeg.com.br/marketplace/index/saviochalita",
      },
      {
        title: "Vanderlei Garcia",
        url: "http://aluno.fadeg.com.br/marketplace/index/vanderleijr",
      },
      {
        title: "Yuri Carneiro",
        url: "http://aluno.fadeg.com.br/marketplace/index/yuricarneiro",
      },
      {
        title: "Anselmo Gonzalez",
        url: "http://aluno.fadeg.com.br/marketplace/index/anselmogonzalez",
      },
      {
        title: "Ivana David",
        url: "http://aluno.fadeg.com.br/marketplace/index/ivanadavid",
      },
      {
        title: "Sérgio Gabriel",
        url: "http://aluno.fadeg.com.br/marketplace/index/sergiogabriel",
      },
    ],
  },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: false,
  //   title: "Embaixadores / Parceiros",
  //   url: "/embaixadores",
  // },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Blog MeuCurso",
    url: "https://blog.meucurso.com.br/",
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Central de Ajuda",
    url: "/central-de-ajuda",
  },
];

export default navbarNavigations;
