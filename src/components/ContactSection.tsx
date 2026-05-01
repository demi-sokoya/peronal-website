import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactLink {
	label: string;
	href: string;
	icon: IconDefinition;
}

const contactLinks: ContactLink[] = [
	{
		label: "hello@demi.dev",
		href: "mailto:obademiladesokoya7@gmail.com",
		icon: faEnvelope,
	},
	{
		label: "Github",
		href: "https://github.com/demi-sokoya",
		icon: faGithub,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/dsokoya/",
		icon: faLinkedin,
	},
];

const ContactSection = () => {
	return (
		<FullScreenSection id="contact" textAlign="center">
			<Box
				fontFamily="var(--mono)"
				fontSize="0.6875rem"
				letterSpacing="0.1em"
				textTransform="uppercase"
				color="var(--ink-3)"
				mb="2.25rem"
				display="flex"
				alignItems="center"
				gap="0.75rem">
				Get in touch
				<Box flex={1} height="1px" background="var(--border)" />
			</Box>
			<Box
				fontFamily="var(--serif)"
				fontSize="clamp(2.25rem, 5vw, 3.5rem)"
				letterSpacing="-0.03em"
				mb="1rem"
				lineHeight={1.1}>
				Let's make something{" "}
				<Box as="em" fontStyle="italic" color="var(--accent)">
					good.
				</Box>
			</Box>
			<Text fontSize="0.9375rem" color="var(--ink-2)" mb="2.25rem">
				Open to freelance projects, full-time roles, and interesting
				conversations.
			</Text>

			<HStack gap="0.75rem" justifyContent="center" flexWrap="wrap">
				{contactLinks.map((link) => (
					// 📘 link is inferred as ContactLink — .label, .href, .icon are all available
					<Link
						key={link.label}
						href={link.href}
						display="inline-flex"
						alignItems="center"
						gap="0.5rem"
						px="1.25rem"
						py="0.625rem"
						border="1px solid var(--border-strong)"
						borderRadius="99px"
						fontSize="0.8125rem"
						color="var(--ink)"
						background="var(--surface)"
						textDecoration="none"
						_hover={{
							background: "var(--bg)",
							borderColor: "var(--ink)",
							textDecoration: "none",
						}}>
						<FontAwesomeIcon icon={link.icon} size="sm" />
						{link.label}
					</Link>
				))}
			</HStack>
		</FullScreenSection>
	);
};

export default ContactSection;
