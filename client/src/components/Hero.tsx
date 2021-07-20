import { Flex, Heading } from '@chakra-ui/react';
  /*
Title

*/

export const Hero = () => (
  <Flex
    justifyContent="center"
    height="40vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="5vw">Tic-Tac-Toe</Heading>
  </Flex>
);
