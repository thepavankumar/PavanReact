import React, { useState } from 'react';
import {
  Box,
  Grid,
  Center,
  Text,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';

// thumbnail images
import thumb_image1 from '../Assets/tumbnail4.jpg';
import thumb_image2 from '../Assets/tumbnail2.jpg';
import thumb_image3 from '../Assets/tumbnail3.jpg';
import thumb_image4 from '../Assets/tumbnail1.jpg';
import thumb_image5 from '../Assets/tumbnail5.jpg';
import thumb_image6 from '../Assets/tumbnail6.jpg';
import thumb_image7 from '../Assets/tumbnail7.jpg';
import thumb_image8 from '../Assets/tumbnail8.jpg';

// modal images
import image1 from '../Assets/portfolio4.jpg';
import image2 from '../Assets/portfolio2.jpg';
import image3 from '../Assets/portfolio3.jpg';
import image4 from '../Assets/portfolio1.png';
import image5 from '../Assets/portfolio5.jpg';
import image6 from '../Assets/portfolio6.png';
import image7 from '../Assets/portfolio7.jpg';
import image8 from '../Assets/portfolio8.png';

const Portfolio = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      thumbscr: thumb_image1,
      src: image1,
      alt: 'Image 1',
    },
    {
      id: 2,
      thumbscr: thumb_image2,
      src: image2,
      alt: 'Image 2',
    },
    {
      id: 3,
      thumbscr: thumb_image3,
      src: image3,
      alt: 'Image 3',
    },
    {
      id: 4,
      thumbscr: thumb_image4,
      src: image4,
      alt: 'Image 4',
    },
    {
      id: 5,
      thumbscr: thumb_image5,
      src: image5,
      alt: 'Image 5',
    },
    {
      id: 6,
      thumbscr: thumb_image6,
      src: image6,
      alt: 'Image 6',
    },
    {
      id: 7,
      thumbscr: thumb_image7,
      src: image7,
      alt: 'Image 7',
    },
    {
      id: 8,
      thumbscr: thumb_image8,
      src: image8,
      alt: 'Image 8',
    },
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
       <Grid p={4}>
      <Center>
        <Heading as="h2" size="xl" mb={4}>
          My Portfolio
        </Heading>
      </Center>
      <Text textAlign="center">
      Hello, I have compiled a selection of my Photoshop, HTML, CSS, and JavaScript works.
      </Text>
    </Grid>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={4}
        width="100%"
        mt={{ base: '40px', md: '60px' }}
      >
        {images.map((image) => (
          <Box key={image.id} borderWidth="2px"  p="4" rounded="md">
            <Image
              src={image.thumbscr}
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
