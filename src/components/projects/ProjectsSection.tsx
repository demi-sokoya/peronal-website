import { projects, type GhostCard, type Project } from "@/data";
import FullScreenSection from "../FullScreenSection";
import { Box, Text, VStack } from "@chakra-ui/react";
import FeaturedCard from "./FeaturedCard";
import RegularCard from "./RegularCard";

function isGhostCard(item: Project | GhostCard): item is GhostCard {
	return (item as GhostCard).ghost === true;
}

const ProjectsSection = () => {
	return (
		<FullScreenSection>
			<Box>
				Selected work
				<Box />
			</Box>

			<VStack>
				{projects.map((item, index) => {
					if (isGhostCard(item)) {
						return (
							<Box key={`ghost-${index}`}>
								<Box></Box>
								<Text>{item.label}</Text>
							</Box>
						);
					}

					return item.featured ? (
						<FeaturedCard key={item.id} project={item} />
					) : (
						<RegularCard key={item.id} project={item} />
					);
				})}
			</VStack>
		</FullScreenSection>
	);
};

export default ProjectsSection;
