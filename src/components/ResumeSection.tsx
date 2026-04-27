import FullScreenSection from "@/components/FullScreenSection";
import { skills } from "@/data";
import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFile } from "@fortawesome/free-solid-svg-icons";

const ResumeSection = () => {
	return (
		<FullScreenSection id="resume">
			<Box
				fontFamily="var(--mono)"
				fontSize="0.6875rem"
				letterSpacing="0.1em"
				textTransform="uppercase"
				color="var(--ink-3)"
				mb="2.25rem"
				alignItems="center"
				display="flex"
				gap="0.75rem">
				Resume
				<Box flex={1} height="1px" background="var(--border)" />
			</Box>

			{/* Resume Download Card */}
			<HStack
				background="var(--surface)"
				border="1px solid var(--border)"
				borderRadius="var(--r)"
				p="1.5rem"
				gap="1.5rem"
				maxWidth="33.75rem">
				<Box
					width="2.875rem"
					height="2.875rem"
					flexShrink={0}
					background="var(--accent-light)"
					borderRadius="10px"
					display="flex"
					alignItems="center"
					justifyContent="center">
					<FontAwesomeIcon icon={faFile} color="var(--accent)" />
				</Box>
				<Box flex={1} minWidth={0}>
					<Text>Demi Sokoya - Resume</Text>
					<Text>
						Front-end developer, illustrator &amp; UX Designer · PDF, updated
						Apr 2026
					</Text>
				</Box>
				<Link
					href="/demi_sokoya_resume.pdf"
					display="inline-flex"
					alignItems="center"
					gap="0.5rem"
					px="1.25rem"
					py="0.5rem"
					borderRadius="99px"
					background="var(--ink)"
					color="var(--bg)"
					fontSize="0.8125rem"
					flexShrink={0}
					textDecoration="none"
					_hover={{ opacity: 0.82, textDecoration: "none" }}>
					<FontAwesomeIcon icon={faDownload} size="xs" />
					Download
				</Link>
			</HStack>

			{/* Skills */}
			<Box mt="2rem">
				<Text
					fontFamily="var(--mono)"
					fontSize="0.6875rem"
					letterSpacing="0.08em"
					textTransform="uppercase"
					color="var(--ink-3)"
					mb="0.875rem">
					Skills &amp; tools
				</Text>
				<HStack flexWrap="wrap" gap="0.5rem">
					{skills.map((skill) => (
						<Box
							key={skill}
							fontSize="0.75rem"
							fontFamily="var(--mono)"
							color="var(--ink-2)"
							background="var(--bg)"
							border="1px solid var(--border)"
							borderRadius="4px"
							px="0.625rem"
							py="0.25rem">
							{skill}
						</Box>
					))}
				</HStack>
			</Box>
		</FullScreenSection>
	);
};

export default ResumeSection;
