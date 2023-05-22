const Projet = ({ img, nom, link, descr }) => {
	return (
		<div class='projet-container'>
			<h3 class='projet-title'>{nom}</h3>
			<p class='projet-descr'>{descr}</p>
			<img class='projet-img' src={img} alt={nom} />
			<a class='projet-link' href={link}>
				GO
			</a>
		</div>
	)
}

export default Projet
