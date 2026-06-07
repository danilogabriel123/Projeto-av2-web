import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Eye, EyeOff, Flower2 } from 'lucide-react';
import { realizarCadastro } from '../servicos/autenticacao';
import './Cadastro.css';

const Cadastro = () => {
  const navegar = useNavigate();

  const [formulario, setFormulario] = useState({ nome: '', email: '', senha: '' });
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const aoAlterarCampo = (evento) => {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  };

  const aoSubmeterFormulario = async (evento) => {
    evento.preventDefault();
    setErro('');
    setSucesso('');
    setCarregando(true);

    try {
      await realizarCadastro(formulario.nome, formulario.email, formulario.senha);
      setSucesso('Conta criada com sucesso! Redirecionando para o login...');
      setTimeout(() => navegar('/login'), 2000);
    } catch (erroRecebido) {
      setErro(erroRecebido.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="pagina-cadastro">
      <div className="pagina-cadastro__card">

        <div className="pagina-cadastro__lado-esquerdo">
          <Flower2 size={44} className="pagina-cadastro__icone-marca" />
          <h2 className="pagina-cadastro__boas-vindas">Bem-vindo à...nao sei</h2>
          <p className="pagina-cadastro__descricao-marca">ver com a veia.</p>
          <Link to="/login" className="pagina-cadastro__botao-alternar">
            Entrar
          </Link>
        </div>


        <div className="pagina-cadastro__lado-direito">
          <h1 className="pagina-cadastro__titulo">Cria sua conta</h1>

          <form className="pagina-cadastro__formulario" onSubmit={aoSubmeterFormulario}>

            <div className="pagina-cadastro__campo">
              <label className="pagina-cadastro__label">Nome completo</label>
              <div className="pagina-cadastro__input-wrapper">
                <input
                  className="pagina-cadastro__input"
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formulario.nome}
                  onChange={aoAlterarCampo}
                  required
                />
              </div>
            </div>

            <div className="pagina-cadastro__campo">
              <label className="pagina-cadastro__label">E-mail</label>
              <div className="pagina-cadastro__input-wrapper">
                <input
                  className="pagina-cadastro__input"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formulario.email}
                  onChange={aoAlterarCampo}
                  required
                />
              </div>
            </div>

            <div className="pagina-cadastro__campo">
              <label className="pagina-cadastro__label">Senha</label>
              <div className="pagina-cadastro__input-wrapper">
                <input
                  className="pagina-cadastro__input"
                  type={senhaVisivel ? 'text' : 'password'}
                  name="senha"
                  placeholder="••••••••"
                  value={formulario.senha}
                  onChange={aoAlterarCampo}
                  required
                />
                <button
                  type="button"
                  className="pagina-cadastro__botao-olho"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                >
                  {senhaVisivel ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {erro && <p className="pagina-cadastro__erro">{erro}</p>}
            {sucesso && <p className="pagina-cadastro__sucesso">{sucesso}</p>}

            <button className="pagina-cadastro__botao" type="submit" disabled={carregando}>
              <UserPlus size={18} />
              {carregando ? 'Cadastrando...' : 'Cadastrar'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Cadastro;