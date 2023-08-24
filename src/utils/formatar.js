function formatarCelular(cel) {
  cel = cel.replace(/\D/g, "");
  cel = cel.replace(/^(\d{2})(\d)/g, "($1) $2");
  cel = cel.replace(/(\d)(\d{4})$/, "$1-$2");
  return cel;
}

function formatarCNPJ(cnpj) {
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}

export { formatarCelular, formatarCNPJ }
