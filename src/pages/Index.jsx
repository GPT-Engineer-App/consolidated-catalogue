import { Container, Text, VStack, Box, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaTruck, FaGlobe, FaTags, FaWarehouse } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Wholesale Logistics Export Import Company
          </Text>
          <Text fontSize="lg" mt={4}>
            We work with over 150 food producers from Central and Eastern Europe to offer a consolidated catalogue of more than 10,000 goods for various acquired tastes.
          </Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1516912919409-2f7f1a1a9b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwfGVufDB8fHx8MTY4NTc4NzY0Nw&ixlib=rb-4.0.3&q=80&w=1080" alt="Container Ship" borderRadius="md" />
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Our Services
          </Text>
          <Text mt={2}>Our clients benefit from our complete service package, simplifying the process of ordering products from international producers. Over the years we have perfected importing, exporting, product sticker labeling, private/white labelling, logistics, and product consolidation.</Text>
        </Box>

        <HStack spacing={8} justify="center" mt={4}>
          <VStack>
            <IconButton aria-label="Import Export" icon={<FaGlobe />} size="lg" />
            <Text>Import & Export</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Product Labeling" icon={<FaTags />} size="lg" />
            <Text>Product Labeling</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Private Labeling" icon={<FaWarehouse />} size="lg" />
            <Text>Private Labeling</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Logistics" icon={<FaTruck />} size="lg" />
            <Text>Logistics</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
