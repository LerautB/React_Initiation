import logo from '../../VS_logo.svg.png'

const Layout = ({ children }) => {
	return (
		<>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>

			<main className='App-header'>{children}</main>

			{/* <footer>
				<p>Je suis un footer</p>
			</footer> */}
		</>
	)
}

export default Layout
