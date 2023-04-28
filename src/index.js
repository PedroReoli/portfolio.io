import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import minhaFoto from './/img/minha_foto.jpg';
function App() {
  return (
    <div>
      <header>

        <h1>Meu portfolio</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="sobre-mim">
        <h2>Sobre mim</h2>
        <p>Olá, sou Pedro Sousa, um jovem curioso que sempre amou o conhecimento e a busca por ele. Gosto de diversas áreas, e meu interesse por tecnologia começou desde muito novo, quando ainda era criança. Possuo autismo, e isso faz com que eu tenha uma grande capacidade de foco em minhas atividades, além de me impedir de abandonar coisas que começo. Estou sempre disposto a conhecer mais e solucionar problemas.</p>
      </section>
      
      <section id="projetos">
        <h2>Projetos</h2>
        <div className="container">
          <div className="projeto">
            <h3>Projeto 1</h3>
            {/* <img src={minha_foto} alt="Minha Foto" /> */}
            <p>Descrição do projeto 1.</p>
            <a href="#">Ver mais</a>
          </div>
          
          <div className="projeto">
            <h3>Projeto 2</h3>
            <img src="projeto1.jpg" alt="Projeto 1" />
            <p>Descrição do projeto 2.</p>
            <a href="#">Ver mais</a>
          </div>
          
          <div className="projeto">
            <h3>Projeto 3</h3>
            <img src="projeto3.jpg" alt="Projeto 3" />
            <p>Descrição do projeto 3.</p>
            <a href="#">Ver mais</a>
          </div>
          <div className="projeto">
            <h3>Projeto 4</h3>
            <img src="projeto4.jpg" alt="Projeto 4" />
            <p>Descrição do projeto 4.</p>
            <a href="#">Ver mais</a>
          </div>
        </div>
      </section>
      
      <section id="contato">
        <h2>Contato</h2>
        <form>
      <h2>Me mande uma <a href="https://wa.link/by4s7a">mensagem</a></h2>
          
        </form>
      </section>
      
      <footer>
        <p>Desenvolvido por Pedro Sousa</p>
      </footer>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
