import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import minhaFoto from './/img/minha_foto.jpg' ;
import projeto1 from './/img/projeto1.jpg'
import projeto2 from './/img/projeto2.jpg'
import projeto3 from './/img/projeto3.jpg'
import projeto4 from './/img/projeto4.jpg'

function App() {
  return (
    <div>
      <header>

        <img src={minhaFoto} alt="Minha Foto" />
        <h1>Meu portfolio</h1>

        <nav>
          <ul>
            <li><a href="">Sobre mim</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="https://wa.link/by4s7a">Whatsapp</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="sobre-mim">
        <h2>Sobre mim</h2>
        <p>Olá, sou Pedro Sousa, um jovem curioso que sempre amou o conhecimento e a busca por ele. Gosto de diversas áreas, e meu interesse por tecnologia começou desde muito novo, quando ainda era criança. Possuo autismo, e isso faz com que eu tenha uma grande capacidade de foco em minhas atividades, além de me impedir de abandonar coisas que começo. Estou sempre disposto a conhecer mais e solucionar problemas.</p>
        <p>Atualmente, estou cursando Sistemas de Informação na instituição Unifoa, que é reconhecida pela excelência do seu ensino na área de tecnologia. Tenho aprendido muito em minhas aulas e tenho colocado em prática os conhecimentos adquiridos em projetos e atividades extracurriculares.

Além disso, tive a oportunidade de participar de alguns projetos sociais voltados para a educação, como o Game Jam na Faetec. O Game Jam foi um workshop em que fui apresentador de eventos e dei aula para jovens sobre como criar seus primeiros jogos. Foi uma experiência muito gratificante poder compartilhar conhecimento e incentivar esses jovens a se interessarem pela área de tecnologia.</p>

<p>De fato, acredito que a tecnologia tem um grande potencial para transformar vidas e ajudar a construir um mundo melhor. Por isso, estou sempre em busca de novos desafios e oportunidades para aprender e aplicar meus conhecimentos em projetos que possam fazer a diferença.</p>
      </section>
      
      <section id="projetos">
        <h2>Projetos</h2>
        <div className="container">
          <div className="projeto">
            <h3>Projeto 1</h3>
            <img src={projeto1} alt="Projeto1"/>
            <p>Pagina de Login de uma Loja Virtual</p>
            <a href="#">Ver mais</a>
          </div>
          
          <div className="projeto">
            <h3>Projeto 2</h3>
            <img src={projeto2} alt="Projeto2" />
            <p>Carrinho da Loja Virtual</p>
            <a href="#">Ver mais</a>
          </div>
          
          <div className="projeto">
            <h3>Projeto 3</h3>
            <img src={projeto3} alt="Projeto3" />
            <p>Sessão de Produtos</p>
            <a href="#">Ver mais</a>
          </div>
          <div className="projeto">
            <h3>Projeto 4</h3>
            <img src={projeto4} alt="Projeto4" />
            <p>Meu antigo portfolio</p>
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
