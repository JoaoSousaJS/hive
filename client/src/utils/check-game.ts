/* eslint-disable no-tabs */
/*
check if the board has a result

this is a common js solution, I have spent some time trying to make a diffent one,
but the code was becoming not legible and not performative

*/
export const checkGame = (games: string[]) => {
  /*
basically, I have all possibles results as all games will have the following format 3x3

*/
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
	];
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
/*
checking if I have in the board any combination that matches the lines array

for example:

X on array 3, 4 and 5

if any positions match, return X or O

*/
      if (games[a] && games[a] === games[b] && games[a] === games[c]) {
        return games[a];
      }
    }
	return null;
};
