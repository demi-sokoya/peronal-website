import FullScreenSection from "@/components/FullScreenSection";
import { skills } from "@/data";
import { Box, HStack, Link, Text } from "@chakra-ui/react";

const ResumeSection = () => {
	return (
		<FullScreenSection>
			<Box>
				Resume
				<Box flex={1} height="1px" background="var(--border)" />
			</Box>

			<HStack>
				<Box></Box>
				<Box>
					<Text>Demi Sokoya — Resume</Text>
					<Text>
						Front-end developer, illustrator &amp; UX Designer · PDF, updated
						Apr 2026
					</Text>
				</Box>
				<Link>Download</Link>
			</HStack>

			{/* Skills */}
			<Box>
				<Text>Skills &amp; tools</Text>
				<HStack>
					{skills.map((skill) => (
						<Box key={skill}>{skill}</Box>
					))}
				</HStack>
			</Box>
		</FullScreenSection>
	);
};

export default ResumeSection;
