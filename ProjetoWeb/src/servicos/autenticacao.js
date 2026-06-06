import { requisicao, cabecalhoPadrao } from './api';

const realizarLogin = async (email, senha) => {
  const dados = await requisicao('/usuarios/login', {
    method: 'POST',
    headers: cabecalhoPadrao(),
    body: JSON.stringify({ email, senha })
  });

  localStorage.setItem('token', dados.token);
  localStorage.setItem('usuarioLogado', JSON.stringify(dados.usuario));

  return dados;
};

const realizarCadastro = async (nome, email, senha) => {
  const dados = await requisicao('/usuarios/cadastro', {
    method: 'POST',
    headers: cabecalhoPadrao(),
    body: JSON.stringify({ nome, email, senha })
  });

  return dados;
};

const realizarLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('usuarioLogado');
};

const pegarUsuarioLogado = () => {
  const usuario = localStorage.getItem('usuarioLogado');
  return usuario ? JSON.parse(usuario) : null;
};

const estaAutenticado = () => {
  return !!localStorage.getItem('token');
};

export { realizarLogin, realizarCadastro, realizarLogout, pegarUsuarioLogado, estaAutenticado };