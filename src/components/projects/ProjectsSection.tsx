import { projects, type GhostCard, type Project } from "@/data";
import FullScreenSection from "../FullScreenSection";
import { Box, Text } from "@chakra-ui/react";
import FeaturedCard from "./FeaturedCard";
import RegularCard from "./RegularCard";

function isGhostCard(item: Project | GhostCard): item is GhostCard {
	return (item as GhostCard).ghost === true;
}

const featured = projects.find(
	(p): p is Project => !isGhostCard(p) && p.featured,
);
const regular = projects.filter(
	(p): p is Project => !isGhostCard(p) && !p.featured,
);
const ghosts = projects.filter(isGhostCard);

const ProjectsSection = () => {
	return (
		<FullScreenSection id="work">
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
				Selected work
				<Box flex={1} height="1px" background="var(--border)" />
			</Box>

			{featured && <FeaturedCard project={featured} />}

			{(regular.length > 0 || ghosts.length > 0) && (
				<Box
					display="grid"
					gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
					gap="1rem"
					mt="1rem">
					{regular.map((p) => (
						<RegularCard key={p.id} project={p} />
					))}
					{ghosts.map((g, i) => (
						<Box
							key={`ghost-${i}`}
							border="1px dashed var(--border-strong)"
							borderRadius="var(--r)"
							minHeight="16rem"
							display="flex"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							gap="0.5rem">
							<Box
								width="1.5rem"
								height="1.5rem"
								borderRadius="50%"
								border="1px dashed var(--border-strong)"
							/>
							<Text
								fontSize="0.75rem"
								color="var(--ink-3)"
								fontFamily="var(--mono)">
								{g.label}
							</Text>
						</Box>
					))}
				</Box>
			)}
		</FullScreenSection>
	);
};

export default ProjectsSection;

