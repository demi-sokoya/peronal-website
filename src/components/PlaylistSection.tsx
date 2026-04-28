import { Box, Text } from "@chakra-ui/react";
import FullScreenSection from "@/components/FullScreenSection";

const PlaylistSection = () => {
	return (
		<FullScreenSection id="playlist">
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
				Currently listening
				<Box flex={1} height="1px" background="var(--border)" />
			</Box>

			<Box
				display="grid"
				gridTemplateColumns="1fr 1fr"
				gap="2.5rem"
				alignItems="center">
				{/* Text side */}
				<Box>
					<Box
						fontFamily="var(--serif)"
						fontSize="2rem"
						letterSpacing="-0.03em"
						mb="0.75rem"
						lineHeight={1.15}>
						Somehow{" "}
						<Box as="em" fontStyle="italic" color="var(--accent)">
							Florence + the Machine
						</Box>{" "}
						and Wizkid ended up in the same playlist.
					</Box>
					<Text fontSize="0.875rem" color="var(--ink-2)" lineHeight={1.7}>
						It works. I don't question it.
					</Text>
				</Box>

				{/* Spotify embed — theme=0 is dark, theme=1 is light */}
				<Box borderRadius="12px" overflow="hidden" height="22rem">
					<iframe
						data-testid="embed-iframe"
						style={{ borderRadius: "12px" }}
						src="https://open.spotify.com/embed/playlist/7sPvRANlNjd2pqWM4J74my?utm_source=generator&theme=0"
						width="100%"
						height="352"
						allowFullScreen
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"></iframe>
				</Box>
			</Box>
		</FullScreenSection>
	);
};

export default PlaylistSection;
