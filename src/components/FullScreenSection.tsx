import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface FullScreenSectionProps extends BoxProps {
	children: ReactNode;
}

const FullScreenSection = ({
	children,
	...boxProps
}: FullScreenSectionProps) => (
	<Box
		py={{ base: "3rem", md: "5rem" }}
		px={{ base: "1.25rem", md: "2.5rem" }}
		maxWidth="min(56.25rem, 90vw)"
		margin="0 auto"
		{...boxProps}>
		{children}
	</Box>
);

export default FullScreenSection;
