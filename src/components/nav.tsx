import Link from "next/link";
import Image from "next/image";

import Button from "./button";
import styles from "./nav.module.scss"

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href="/" className={styles.home}>
				<Image src="/images/logo.svg" alt="logo"
					width={36} height={36}
					className={styles.logo} />
				<p className={styles.name}>陳子涵</p>
			</Link>
			<div className={styles.toSection}>
				<Button href="/#records">職涯紀錄</Button>
				<Button href="/about">關於我</Button>
			</div>
		</nav>
	)
}