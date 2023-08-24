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
    id: 1,
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
    id: 2,
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
    id: 3,
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

const mockMedicines = [
  {
    id: 1,
    img: "./remedio.png",
    medicamento: "Dipirona com 10 comprimidos",
    laboratorio: "EMS",
    dosagem: "500mg",
    preco: "4.99",
    tipoDoMedicamento: "Medicamento Comum",
    descricaoMedicamento: "Este medicamento é indicado como analgésico e antitérmico, utilizado no tratamento das manifestações dolorosas e febre. O efeito analgésico e antipirético pode ser esperado em 30 a 60 minutos após a administração e geralmente duram aproximadamente 4 horas. Seu uso é contraindicado em caso de hipersensibilidade aos componentes da fórmula."
  },
  {
    id: 2,
    img: "./remedio.png",
    medicamento: "Ritalina com 60 comprimidos",
    descricaoMedicamento: "É utilizada para o tratamento do Transtorno de déficit de atenção/hiperatividade. Também é utilizada para o tratamento da narcolepsia.",
    laboratorio: "Novartis",
    dosagem: "10mg",
    preco: "84.99",
    tipoDoMedicamento: "Medicamento Controlado"
  },
  {
    id: 3,
    img: "./remedio.png",
    descricaoMedicamento: "O ômega 3 mais vendido do Brasil* é fabricado pelo Catarinense Pharma. Sua fórmula possui 1000mg de óleo de peixe, sendo que em três cápsulas contém 540mg EPA e 360mg DHA. O consumo de ácidos graxos ômega 3 auxilia na manutenção de níveis saudáveis de triglicerídeos, desde que associado a uma alimentação equilibrada e hábitos de vida saudáveis. Alto teor de ácidos graxos ômega 3. ",
    medicamento: "Ômega 3 com 120 cápsulas",
    laboratorio: "Catarinense Pharma",
    dosagem: "1000mg",
    preco: "42.90",
    tipoDoMedicamento: "Medicamento Comum"
  },
  {
    id: 4,
    img: "./remedio.png",
    descricaoMedicamento: "Este medicamento é indicado para: - asma, incluindo a prevenção dos sintomas de asma durante o dia e noite, também previne o estreitamento das vias aéreas causado pelo exercício; - rinite alérgica, incluindo sintomas diurnos e noturnos como congestão nasal, coriza, coceira nasal e espirros, congestão nasal ao despertar, dificuldade de dormir e despertares noturnos, lacrimejamento, coceira, vermelhidão e inchaço dos olhos. Seu uso é contraindicado em caso de alergia aos componentes da fórmula.",
    medicamento: "Montelucaste 30 comprimidos",
    laboratorio: "Ache",
    dosagem: "10mg",
    preco: "28.75",
    tipoDoMedicamento: "Medicamento Comum"
  }
]

export { pages, medicineTypes, mockPharmacies, mockMedicines }