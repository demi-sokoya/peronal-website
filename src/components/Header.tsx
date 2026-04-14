import { Box, HStack, Link } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);

	const prevScrollY = useRef<number>(0);

	const handleClick = (anchor: string) => () => {
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
			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

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
			<Box maxWidth="min(56.25rem, 90vw)" margin="0 auto" px="2.5rem">
				<HStack height="3.5rem" justifyContent="space-between">
					{/* Logo Placeholder */}
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
					{/* Nav Links */}
					<HStack as="nav" gap="2rem">
						{(["work", "resume", "playlist"] as const).map((anchor) => (
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
						textDecoration="none"
						_hover={{ background: "var(--surface)", textDecoration: "none" }}>
						Get in touch
					</Link>
				</HStack>
			</Box>
		</Box>
	);
};

export default Header;
