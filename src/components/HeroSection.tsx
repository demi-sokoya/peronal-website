import { Box, Link } from "@chakra-ui/react";
import FullScreenSection from "@/components/FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
	return (
		<FullScreenSection pt={{ base: "5rem", md: "7.5rem" }}>
			{/* Eyebrow */}
			<Box
				fontFamily="var(--mono)"
				fontSize="0.75rem"
				color="var(--accent)"
				letterSpacing="0.08em"
				textTransform="uppercase"
				mb="1.25rem"
				display="flex"
				alignItems="center"
				gap="0.625rem">
				<Box width="1.5rem" height="1px" background="var(--accent)" />
				Front-end developer &amp; UX Designer
			</Box>

			{/* Headline */}
			<Box
				as="h1"
				fontFamily="var(--serif)"
				fontSize="clamp(3rem, 7vw, 5rem)"
				lineHeight={1.05}
				letterSpacing="-0.03em"
				mb="1.75rem"
				maxWidth="45rem">
				Building things for the{" "}
				<Box as="em" color="var(--accent)" fontStyle="italic">
					web,
				</Box>{" "}
				that feel good to use.
			</Box>

			{/* Sub-copy */}
			<Box
				fontSize="1rem"
				color="var(--ink-2)"
				maxWidth="30rem"
				mb="2.5rem"
				lineHeight={1.7}>
				I craft interfaces that are fast, accessible, and considered. Based in
				Calgary.
			</Box>

			{/* CTAs */}
			<Box display="flex" gap="0.75rem" alignItems="center">
				<Link
					href="#work"
					background="var(--ink)"
					color="var(--bg)"
					borderRadius="99px"
					px="1.5rem"
					py="0.75rem"
					fontSize="0.875rem"
					textDecoration="none"
					_hover={{ opacity: 0.85, textDecoration: "none" }}>
					See my work
				</Link>
				<Link
					href="#contact"
					color="var(--ink-2)"
					fontSize="0.875rem"
					display="flex"
					alignItems="center"
					gap="0.375rem"
					textDecoration="none"
					_hover={{ color: "var(--ink)", textDecoration: "none" }}>
					Say hello
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</Box>
		</FullScreenSection>
	);
};

export default HeroSection;
