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
		py={{ base: "48px", md: "80px" }}
		px={{ base: "20px", md: "40px" }}
		maxWidth="900px"
		margin="0 auto"
		{...boxProps}>
		{children}
	</Box>
);

export default FullScreenSection;
