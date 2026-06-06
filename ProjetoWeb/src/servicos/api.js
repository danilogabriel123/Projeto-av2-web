const URL_BASE = 'http://localhost:5000/api';

const pegarToken = () => localStorage.getItem('token');

const cabecalhoAutenticado = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${pegarToken()}`
});

const cabecalhoPadrao = () => ({
  'Content-Type': 'application/json'
});

const requisicao = async (endpoint, opcoes = {}) => {
  const resposta = await fetch(`${URL_BASE}${endpoint}`, opcoes);
  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.erro || 'Algo deu errado na requisição.');
  }

  return dados;
};

export { URL_BASE, cabecalhoAutenticado, cabecalhoPadrao, requisicao };