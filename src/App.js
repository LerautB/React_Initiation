import logo from './VS_logo.svg.png'
import './App.css'
import Layout from './components/layouts/layouts'
import Projet from './components/Projet/projet'
import Exp from './components/Exp/exp'
import Formation from './components/Formation/formation'
import Interest from './components/interest/interest'
import Skill from './components/skills/skills'
import Info from './components/Info/info'
var competences = [
	{ title: 'Html/CSS', grade: 8 },
	{ title: 'PHP', grade: 8 },
	{ title: 'Python', grade: 8 },
	{ title: 'JavaScript', grade: 8 },
	{ title: 'C# - Csharp', grade: 8 },
	{ title: 'Docker', grade: 8 },
	{ title: 'Windows', grade: 8 },
	{ title: 'Ubuntu', grade: 8 },
	{ title: 'Debian', grade: 8 },
	{ title: 'Anglais', grade: 8 },
]
var experiences = [
	{ title: 'Freelance Factory', descr: 'Mars-Juin 2021' },
	{ title: 'Agecco', descr: 'Septembre 2021 - Septembre 2023' },
]

var formations = [
	{ title: 'IUT R&T - UVSQ Vélizy Villacoublay', descr: '2018-2020' },
	{ title: 'BTS SIO SLAM - IPSSI SQY', descr: '2020-2022' },
	{ title: 'BACHELOR FULLSTACK - IPSSI SQY', descr: '2022-2023' },
]

var hobbies = [{ title: 'Jeux vidéos' }, { title: 'Films/séries/animes' }, { title: 'Repos/Dormir' }, { title: 'NBA/NFL' }]
function App() {
	return (
		<div className='App'>
			<Layout>
        <br/>
				<div class='info-container'>
					<Info nom='LERAUT' prenom='Bastien' titre='Developpeur Apprenti'></Info>
				</div>
				<div class='skills-container'>
					<h1>Compétences</h1>
					{competences.map((competence) => {
						return <Skill title={competence.title} grade={competence.grade}></Skill>
					})}
				</div>
        <br/>
				<div class='exp-container'>
					<h1>Experiences</h1>
					{experiences.map((data) => {
						return <Exp title={data.title} descr={data.descr}></Exp>
					})}
				</div>
        <br/>
				<div class='formation-container'>
					<h1>Formations</h1>
					{formations.map((formation) => {
						return <Formation title={formation.title} descr={formation.descr}></Formation>
					})}
				</div>
        <br/>
				<div class='interest-container'>
					<h1>Centre d'intérêts</h1>
					{hobbies.map((hobby) => {
						return <Interest title={hobby.title}></Interest>
					})}
				</div>
        <br/>
				<div class='project-container'>
					<Projet nom='Estudia' link='../' descr='Plateforme de vie scolaire en html/css,php,js' img={logo}></Projet>
				</div>
			</Layout>
		</div>
	)
}

export default App
