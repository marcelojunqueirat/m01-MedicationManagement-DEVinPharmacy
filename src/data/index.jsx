const pages = [
  {
    route: "/map",
    description: "Mapa"
  },
  {
    route: "/pharmacy",
    description: "Farmácias"
  },
  {
    route: "/medicine",
    description: "Medicamentos"
  }
]

const medicineTypes = ["Medicamento Comum", "Medicamento Controlado"]

const mockPharmacies = [
  {
    razaoSocial: "Farmácia Popular",
    nomeFantasia: "Farmácia Popular LTDA",
    cep: "88020300",
    logradouro: "Avenida Mauro Ramos",
    complemento: "",
    bairro: "Centro",
    cidade: "Florianópolis",
    estado: "SC",
    numero: "1054",
    latitude: "-27.592106",
    longitude: "-48.543176",
    cnpj: "63456470000184",
    email: "popular@teste.com.br",
    celular: "48998121314"
  },
  {
    cep: "88015310",
    logradouro: "Rua Dom Joaquim",
    complemento: "Próximo ao Medical Center",
    bairro: "Centro",
    cidade: "Florianópolis",
    estado: "SC",
    numero: "949",
    razaoSocial: "Farmácia Catarinense",
    nomeFantasia: "Farmácia Catarinense S.A",
    cnpj: "30584390000155",
    email: "catarinense@teste.com.br",
    telefone: "4832290009",
    celular: "48991232435",
    latitude: "-27.589346",
    longitude: "-48.546893"
  },
  {
    cep: "88020420",
    logradouro: "Rua General Rosinha",
    complemento: "",
    bairro: "Centro",
    cidade: "Florianópolis",
    estado: "SC",
    numero: "7410",
    razaoSocial: "Pro Fórmula Farmacêutica",
    nomeFantasia: "Pro Fórmula Farmacêutica LTDA",
    cnpj: "25487274000188",
    email: "proformula@teste.com.br",
    telefone: "4832149966",
    celular: "48997741036",
    latitude: "-27.589780",
    longitude: "-48.534541"
  }
]

export { pages, medicineTypes, mockPharmacies }