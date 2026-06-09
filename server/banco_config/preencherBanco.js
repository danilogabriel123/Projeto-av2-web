const Produto = require('../modelos/Produto');

async function preencherBancoSeVazio() {
  try {
    const qtdProdutos = await Produto.countDocuments();
    if (qtdProdutos === 0) {
      const listaDeProdutosInicial = [
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""},
        { nome: "", preco: 0, descricao: "", imagem: ""}
      ];
      await Produto.insertMany(listaDeProdutosInicial);
      console.log("✅ Banco de dados preenchido com os 10 produtos.");
    }
  } catch (err) {
    console.error("Erro ao popular banco inicial:", err);
  }
}

module.exports = preencherBancoSeVazio;