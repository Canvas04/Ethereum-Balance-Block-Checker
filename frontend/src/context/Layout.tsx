import { EtheriumBalance } from "./EtheriumBalance";
import { NavBar } from "./NavBar/NavBar";
import Head from "next/head";

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			{/* <link rel="icon" href="" /> */}
			{/* <link rel="shortcut icon" href="" /> */}
		</Head>
		<NavBar />
		<main>{children}</main>
		<EtheriumBalance />
	</>
);

export default Layout;
