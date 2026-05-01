import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box
			borderTop="1px solid var(--border)"
			px="2.5rem"
			py="1.5rem"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			fontSize="0.75rem"
			color="var(--ink-3)"
			fontFamily="var(--mono)">
			<Box>© 2026 Demi Sokoya</Box>
			<Link
				href="#"
				color="var(--ink-3)"
				opacity={0.6}
				textDecoration="none"
				transition="opacity 0.15s"
				_hover={{ opacity: 1, textDecoration: "none" }}>
				Back to top ↑
			</Link>
		</Box>
	);
};

export default Footer;
