import {
 Box, Button, Heading, SimpleGrid, Stack,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { checkGame } from '../utils/check-game';
import { Value } from './Value';

export const Board = () => {
/*
Defines the board format
*/
  const [board, setBoard] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  /*
store game result, if the game is active, if it is X turn and change player turn

*/
  const [gameResult, setGameResult] = useState('');
  const [isGameInactive, setIsGameInactive] = useState(true);

  const [xTurn, setXTurn] = useState(true);
  const [playerTurn, setPlayerTurn] = useState('X Turn');

    /*
basically, I have all possibles results as all games will have the following format 3x3

*/
  const handleSet = (position: number) => () => {
      /*
update board state

change player turn layout and go to next turn

*/
    const newBoard = [...board];
    newBoard[position] = xTurn ? 'X' : 'O';
    setPlayerTurn(!xTurn ? 'X Turn' : 'O Turn');
    setBoard(newBoard);
    setXTurn(!xTurn);
  };

    /*
reset or start the game resetting the results and the board

*/

  const startNewGameAndReset = () => {
    setIsGameInactive(false);
    setXTurn(true);
    setPlayerTurn('X Turn');
    setGameResult('');
    setBoard([
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
  };

  const sendResults = async (results:string) => {
/*
send the results to the back end, the results can be X or O

*/
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify({
      gameResult: results,
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    await fetch('http://localhost:3000/api/game/', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log('error', error));
  };

  useEffect(() => {
/*
every time the board is updated, check if someone has won

if someone has won, disable the board and send the results to the api

*/
    const result = checkGame(board);
    if (result === 'X' || result === 'O') {
      setGameResult(result);
      setIsGameInactive(true);
      sendResults(result);
    }
  }, [board]);

  return (
    <Box>
      {!isGameInactive && !gameResult && <Heading textAlign="center" mb={3} fontSize="2vw">{playerTurn}</Heading>}

      {gameResult && (
        <Heading textAlign="center" mb={3} fontSize="2vw">
          {gameResult}
          {' '}
          <span> </span>
          Won
        </Heading>
)}
      <SimpleGrid columns={3} spacing={1}>
        {board.map((_, index) => (
          <Value
            key={index}
            value={board[index]}
            onClick={handleSet(index)}
            isActive={isGameInactive}
          />
      ))}

      </SimpleGrid>

      <Stack textAlign="center" mt={4}>
        {isGameInactive && <Button colorScheme="red" onClick={startNewGameAndReset}>Start new game</Button>}
        {!isGameInactive && <Button colorScheme="red" onClick={startNewGameAndReset}>Reset game</Button>}

      </Stack>

    </Box>
  );
};
