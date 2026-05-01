import { Box, HStack, Link } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = ["work", "resume", "playlist"] as const;

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const prevScrollY = useRef<number>(0);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleClick = (anchor: string) => () => {
		setMenuOpen(false);
		const element = document.getElementById(`${anchor}-section`);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	useEffect(() => {
		const handleScroll = (): void => {
			const currentScrollY: number = window.scrollY;

			if (headerRef.current) {
				headerRef.current.style.transform =
					currentScrollY > prevScrollY.current
						? "translateY(-200px)"
						: "translateY(0)";
			}

			if (menuOpen) setMenuOpen(false);
			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [menuOpen]);

	return (
		<Box
			ref={headerRef}
			position="fixed"
			top={0}
			left={0}
			right={0}
			transitionProperty="transform"
			transitionDuration=".3s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#f5f2ece0"
			style={{ backdropFilter: "blur(12px)" }}
			borderBottom="1px solid"
			borderColor="blackAlpha.100"
			zIndex={100}>
			<Box maxWidth="min(56.25rem, 90vw)" margin="0 auto" px={{ base: "1rem", md: "2.5rem" }}>
				<HStack height="3.5rem" justifyContent="space-between">
					{/* Logo */}
					<Link
						href="#"
						fontFamily="var(--serif)"
						fontSize="1.125rem"
						letterSpacing="-0.02em"
						color="var(--ink)"
						textDecoration="none"
						_hover={{ textDecoration: "none" }}>
						Demi
					</Link>

					{/* Nav links — desktop only */}
					<HStack as="nav" gap="2rem" hideBelow="sm">
						{NAV_LINKS.map((anchor) => (
							<Link
								key={anchor}
								href={`#${anchor}`}
								fontSize="0.8125rem"
								color="var(--ink-2)"
								onClick={handleClick(anchor)}
								_hover={{ color: "var(--ink)" }}
								textDecoration="none">
								{anchor.charAt(0).toUpperCase() + anchor.slice(1)}
							</Link>
						))}
					</HStack>

					<HStack gap="0.75rem">
						{/* CTA */}
						<Link
							href="#contact"
							fontSize="0.8125rem"
							border="1px solid"
							borderColor="var(--border-strong)"
							borderRadius="99px"
							px="1rem"
							py="0.375rem"
							color="var(--ink)"
							whiteSpace="nowrap"
							textDecoration="none"
							_hover={{ background: "var(--surface)", textDecoration: "none" }}>
							Get in touch
						</Link>

						{/* Hamburger — mobile only */}
						<Box
							as="button"
							hideFrom="sm"
							display="flex"
							alignItems="center"
							justifyContent="center"
							width="2rem"
							height="2rem"
							color="var(--ink)"
							background="none"
							border="none"
							cursor="pointer"
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							onClick={() => setMenuOpen((o) => !o)}>
							<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
						</Box>
					</HStack>
				</HStack>
			</Box>

			{/* Dropdown — mobile only */}
			{menuOpen && (
				<Box
					hideFrom="sm"
					borderTop="1px solid"
					borderColor="blackAlpha.100"
					backgroundColor="#f5f2ece0"
					style={{ backdropFilter: "blur(12px)" }}
					px="1.5rem"
					py="1rem"
					display="flex"
					flexDirection="column"
					gap="0">
					{NAV_LINKS.map((anchor) => (
						<Link
							key={anchor}
							href={`#${anchor}`}
							fontSize="0.9375rem"
							color="var(--ink-2)"
							onClick={handleClick(anchor)}
							_hover={{ color: "var(--ink)" }}
							textDecoration="none"
							py="0.75rem"
							borderBottom="1px solid"
							borderColor="blackAlpha.50">
							{anchor.charAt(0).toUpperCase() + anchor.slice(1)}
						</Link>
					))}
				</Box>
			)}
		</Box>
	);
};

export default Header;
