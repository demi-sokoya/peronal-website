import type { Project } from "@/data";
import { Box, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";

interface ProjectCardProps {
	project: Project;
}

const FeaturedCard = ({ project }: ProjectCardProps) => (
	<Box>
		<Image src={project.imageSrc} alt={project.title} />
		<Box>
			<Text>{project.tag}</Text>
			<Heading>{project.title}</Heading>
			<Text>{project.desc}</Text>
			<HStack>
				{project.stack.map((tech) => (
					<Box>{tech}</Box>
				))}
			</HStack>
			<HStack>
				<Link></Link>
				<Link></Link>
			</HStack>
		</Box>
	</Box>
);

export default FeaturedCard;
