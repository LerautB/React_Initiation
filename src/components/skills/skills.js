const Skill = ({ title, grade }) => {
	return (
		<div class='skills-item'>
			<h5 class='skills-item-title'>
				{title} - {grade}/10
			</h5>
		</div>
	)
}

export default Skill
