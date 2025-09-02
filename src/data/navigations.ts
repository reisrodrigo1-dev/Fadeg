import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

const navigations = [
  {
    icon: BalanceOutlinedIcon,
    title: "OAB 1ª Fase",
    href: "/cursos/cursos-oab-1fase",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        title: "Cursos Gratuitos",
        href: "/categorias/oab-1-fase-cursos-gratuitos",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Associados AASP",
        href: "/categorias/oab-1-fase-associados-aasp",
        megaMenu: "MegaMenu1",
      },

      {
        title: "40º Exame",
        href: "/categorias/oab-1-fase-40-exame",
        megaMenu: "MegaMenu1",
      },
    ],
  },

  {
    icon: BalanceOutlinedIcon,
    title: "OAB 2ª Fase",
    href: "/cursos/cursos-oab-2fase",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        title: "Regular",
        href: "/categorias/oab-2-fase-regular",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Administrativo",
        href: "/categorias/oab-2-fase-administrativo",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Civil",
        href: "/categorias/oab-2-fase-civil",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Constitucional",
        href: "/categorias/oab-2-fase-constitucional",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Empresarial",
        href: "/categorias/oab-2-fase-empresarial",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Penal",
        href: "/categorias/oab-2-fase-penal",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Trabalho",
        href: "/categorias/oab-2-fase-trabalho",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Tributário",
        href: "/categorias/oab-2-fase-tributario",
        megaMenu: "MegaMenu1",
      },

      {
        title: "Mentoria 2ª Fase",
        href: "/categorias/oab-2-fase-mentoria-2-fase",
        megaMenu: "MegaMenu1",
      },
    ],
  },

  {
    icon: SchoolOutlinedIcon,
    title: "Pós Graduação",
    href: "/cursos/pos-graduacao",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        title: "Cursos",
        href: "/categorias/pos-graduacao",
        megaMenu: "MegaMenu1",
      },
      // {
      //   title: "Congressos Digitais",
      //   href: "/categorias/",
      //   megaMenu: 2,
      // },
      // {
      //   title: "Eventos Gratuitos",
      //   href: "/searchCategory?CategoryId=99",
      //   megaMenu: 3,
      // },
    ],
  },
  {
    icon: GavelOutlinedIcon,
    title: "Concursos Públicos",
    href: "/cursos/concursos-publicos",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        title: "Carreiras Policiais",
        href: "/categorias/concursos-publicos-carreiras-policiais",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Tribunais",
        href: "/categorias/concursos-publicos-tribunais---mp",
        megaMenu: "MegaMenu1",
      },
      {
        title: "Procuradorias",
        href: "/categorias/concursos-publicos-procuradorias",
        megaMenu: 2,
      },
      {
        title: "Planos de Assinatura",
        href: "/categorias/concursos-publicos-planos-de-assinatura",
        megaMenu: 2,
      },
    ],
  },
  {
    icon: LocalLibraryOutlinedIcon,
    title: "Atualização e Prática",
    href: "/cursos/atualizacao-e-pratica",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        title: "Cursos",
        href: "/atualizacao-e-pratica",
        megaMenu: "MegaMenu3",
        menuData: {
          categories: [
            {
              title: "Administrativo",
              href: "/categorias/atualizacao-e-pratica-administrativo",
            },
            {
              title: "Ambiental",
              href: "/categorias/atualizacao-e-pratica-ambiental",
            },
            {
              title: "Civil",
              href: "/categorias/atualizacao-e-pratica-civil",
            },
            {
              title: "Competências Emocionais",
              href: "/categorias/atualizacao-e-pratica-competencias-emocionais",
            },
            {
              title: "Direito Digital e Compliance",
              href: "/categorias/atualizacao-e-pratica-direito-digital-e-compliance",
            },
            {
              title: "Direito Público",
              href: "/categorias/atualizacao-e-pratica-direito-publico",
            },
            {
              title: "Direito Médico",
              href: "/categorias/atualizacao-e-pratica-direito-medico",
            },
            {
              title: "Diversos",
              href: "/categorias/atualizacao-e-pratica-diversos",
            },
            {
              title: "Empresarial",
              href: "/categorias/atualizacao-e-pratica-empresarial",
            },
            {
              title: "Penal",
              href: "/categorias/atualizacao-e-pratica-penal",
            },
            {
              title: "Previdenciário",
              href: "/categorias/atualizacao-e-pratica-previdenciario",
            },
            {
              title: "Trabalhista",
              href: "/categorias/atualizacao-e-pratica-trabalhista",
            },
          ],
        },
      },
    ],
  },
  {
    icon: BalanceOutlinedIcon,
    title: "Primeiros Passos",
    href: "/cursos/primeiros-passos-na-advocacia",
    menuComponent: "MegaMenu1",
  },
  {
    icon: BalanceOutlinedIcon,
    title: "Congressos Jovem Advocacia",
    href: "/categorias/congressos-jovem-advocacia",
    menuComponent: "MegaMenu1",
  },
  {
    icon: GavelOutlinedIcon,
    title: "/Professor",
    href: "/#",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        title: "Alessandro Spilborghs",
        href: "http://aluno.fadeg.com.br/marketplace/index/alessandrospilborghs",
      },
      {
        title: "Carol Macaubal",
        href: "http://aluno.fadeg.com.br/marketplace/index/carolmacaubal",
      },
      {
        title: "Conrado Paulino",
        href: "http://aluno.fadeg.com.br/marketplace/index/conradopaulino",
      },
      {
        title: "Daniel Lamounier",
        href: "http://aluno.fadeg.com.br/marketplace/index/lamounierdaniel",
      },
      {
        title: "Darlan Barroso",
        href: "http://aluno.fadeg.com.br/marketplace/index/darlanbarroso",
      },
      {
        title: "Enki Pimenta",
        href: "http://aluno.fadeg.com.br/marketplace/index/enkipimenta",
      },
      {
        title: "Marcelle Tasoko",
        href: "http://aluno.fadeg.com.br/marketplace/index/marcelletasoko",
      },
      {
        title: "Marcos Oliveira",
        href: "http://aluno.fadeg.com.br/marketplace/index/marcosoliveira",
      },
      {
        title: "Priscila Souto",
        href: "http://aluno.fadeg.com.br/marketplace/index/priscilasouto",
      },
      {
        title: "Savio Chalita",
        href: "http://aluno.fadeg.com.br/marketplace/index/saviochalita",
      },
      {
        title: "Vanderlei Garcia",
        href: "http://aluno.fadeg.com.br/marketplace/index/vanderleijr",
      },
      {
        title: "Yuri Carneiro",
        href: "http://aluno.fadeg.com.br/marketplace/index/yuricarneiro",
      },
      {
        title: "Anselmo Gonzalez",
        href: "http://aluno.fadeg.com.br/marketplace/index/anselmogonzalez",
      },
      {
        title: "Ivana David",
        href: "http://aluno.fadeg.com.br/marketplace/index/ivanadavid",
      },
      {
        title: "Sérgio Gabriel",
        href: "http://aluno.fadeg.com.br/marketplace/index/sergiogabriel",
      },
    ],
  },
];

export default navigations;
