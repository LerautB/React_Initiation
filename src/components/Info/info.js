const Info = ({ nom, prenom, titre }) => {
	return (
		<div>
			<h2 class='title-name'>
				{' '}
				{nom} {prenom} - {titre}
			</h2>
			<br />
			<a class='link-linkedin' href='https://fr.linkedin.com/'>
				Mon linkedin
			</a>
			<br />
			<a class='link-git' href='.'>
				Mon git
			</a>
		</div>
	)
}

export default Info
