import type { Project } from "@/data";
import { Box, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
	project: Project;
}

const RegularCard = ({ project }: ProjectCardProps) => (
	<Box
		border="1px solid"
		borderColor="var(--border)"
		borderRadius="var(--r)"
		overflow="hidden"
		background="var(--surface)"
		transition="border-color 0.2s, transform 0.2s"
		_hover={{
			borderColor: "var(--border-strong)",
			transform: "translateY(-2px)",
		}}>
		<Image
			src={project.imageSrc}
			alt={project.title}
			width="100%"
			aspectRatio="16/9"
			objectFit="cover"
		/>
		<Box p={4}>
			<Text
				fontFamily="var(--mono)"
				fontSize="0.625rem"
				letterSpacing="0.06em"
				textTransform="uppercase"
				color="var(--accent)"
				mb={2}>
				{project.tag}
			</Text>
			<Heading
				fontFamily="var(--serif)"
				fontSize="1.25rem"
				letterSpacing="-0.02em"
				mb={2}>
				{project.title}
			</Heading>
			<Text fontSize="0.8125rem" color="var(--ink-2)" lineHeight={1.55} mb={3}>
				{project.desc}
			</Text>
			<HStack flexWrap="wrap" gap="0.25rem" mb={3}>
				{project.stack.map((tech) => (
					<Box
						key={tech}
						fontSize="0.6875rem"
						fontFamily="var(--mono)"
						color="var(--ink-2)"
						background="var(--bg)"
						border="1px solid var(--border)"
						borderRadius="9999px"
						px="0.5rem"
						py="0.125rem"
						_hover={{
							cursor: "default",
						}}>
						{tech}
					</Box>
				))}
			</HStack>
			<HStack gap="0.75rem">
				<Link
					href={project.live}
					fontSize="0.75rem"
					color="var(--ink-2)"
					display="flex"
					alignItems="center"
					gap="0.25rem"
					textDecoration="none"
					_hover={{ color: "var(--accent)", textDecoration: "none" }}>
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" /> Live
					site
				</Link>
				<Link
					href={project.repo}
					fontSize="0.75rem"
					color="var(--ink-2)"
					display="flex"
					alignItems="center"
					gap="0.25rem"
					textDecoration="none"
					_hover={{ color: "var(--accent)", textDecoration: "none" }}>
					<FontAwesomeIcon icon={faGithub} size="xs" /> GitHub
				</Link>
			</HStack>
		</Box>
	</Box>
);

export default RegularCard;
