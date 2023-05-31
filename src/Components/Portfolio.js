import React, { useState } from 'react';
import {
  Box,
  Grid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';

import image1 from '../Assets/portfolio1.png';
import image2 from '../Assets/portfolio2.jpg';
import image3 from '../Assets/portfolio3.jpg';
import image4 from '../Assets/portfolio4.jpg';
import image5 from '../Assets/portfolio5.jpg';

const Portfolio = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: image1,
      alt: 'Image 1',
    },
    {
      id: 2,
      src: image2,
      alt: 'Image 2',
    },
    {
      id: 3,
      src: image3,
      alt: 'Image 3',
    },
    {
      id: 4,
      src: image4,
      alt: 'Image 4',
    },
    {
      id: 5,
      src: image5,
      alt: 'Image 5',
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.src;
      link.download = "image.jpg";
      link.click();
    }
  };

  return (
    <Box>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={4}
        width="100%"
        mt={{ base: '40px', md: '120px' }}
      >
        {images.map((image) => (
          <Box key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              width="100%"
              height="550px"
              cursor="pointer"
              onClick={() => handleImageClick(image)}
            />
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton   bg="red.500"
          position="fixed"
            size="lg"
            color="white"
            _hover={{ bg: 'red.600' }}
            _active={{ bg: 'red.700' }}/>
          <ModalBody>
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width="100%"
                height="auto"
              />
            )}
            <Button
            position="fixed"
            bottom={4}
            bg="red.500"
            color="white"
            left={4}
            right={4}
            px={8}
            py={4}
            borderRadius="md"
            onClick={handleDownload}
          >
            Download the image
          </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Portfolio;
