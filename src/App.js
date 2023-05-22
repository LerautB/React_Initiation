import logo from './VS_logo.svg.png'
import './App.css'
import Layout from './components/layouts/layouts'
import Projet from './components/Projet/projet'
import Exp from './components/Exp/exp'
import Formation from './components/Formation/formation'
import Interest from './components/interest/interest'
import Skill from './components/skills/skills'
import Info from './components/Info/info'
function App() {
	return (
		<div className='App'>

			<Layout>
        <div class="info-container">
          <Info nom="LERAUT" prenom="Bastien" titre="Developpeur Apprenti"></Info>
        </div>
        <div class="skills-container">
          <h1>Compétences</h1>
          <Skill
          title="Html/CSS"
          ></Skill>
          <Skill
          title="PHP"
          ></Skill>
          <Skill
          title="Python"
          ></Skill>
          <Skill
          title="JavaScript"
          ></Skill>
          <Skill
          title="C# - Csharp"
          ></Skill>
          <Skill
          title="Docker"
          ></Skill>
          <Skill
          title="Windows"
          ></Skill>
          <Skill
          title="Ubuntu"
          ></Skill>
          <Skill
          title="Debian"
          ></Skill>
          <Skill
          title="Anglais"
          ></Skill>
        </div>

        <div class="exp-container">
          <h1>Experiences</h1>
          <Exp title="Freelance Factory" descr="Mars-Juin 2021"></Exp>
          <Exp title="Agecco" descr="Septembre 2021 - Septembre 2023"></Exp>
        </div>
        <div class="formation-container">
          <h1>Formations</h1>
          <Formation title="IUT R&T - UVSQ Vélizy Villacoublay" descr="2018-2020"></Formation>
          <Formation title="BTS SIO SLAM - IPSSI SQY" descr="2020-2022"></Formation>
          <Formation title="BACHELOR FULLSTACK - IPSSI SQY" descr="2022-2023"></Formation>
        </div>
        <div class="interest-container">
          <h1>Centre d'intérêts</h1>
          <Interest title="Jeux vidéos"></Interest>
          <Interest title="Films/séries/animes"></Interest>
          <Interest title="Repos/Dormir"></Interest>
          <Interest title="NBA/NFL"></Interest>
        </div>
        <div class="project-container">
          <Projet nom="Estudia" link="../" descr="Plateforme de vie scolaire en html/css,php,js" img={logo}></Projet>
        </div>
			</Layout>
		</div>
	)
}

export default App
