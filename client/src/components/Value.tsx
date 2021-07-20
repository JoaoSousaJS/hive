import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

  /*
Create a button element that will receive the click and shows X or O

*/

type ValueProps = {
  value: string
  onClick: MouseEventHandler<HTMLButtonElement>
  isActive: boolean
}

export const Value = ({ value, onClick, isActive }:ValueProps) => (
  <Button colorScheme="yellow" size="lg" onClick={onClick} width="40" height="20" isDisabled={isActive || !!value}>
    {value}
  </Button>
  );
