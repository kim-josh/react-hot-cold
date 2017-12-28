// Actions the user can perform 
// Make a guess, restart the game (onClick),  auralUpdate

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = (correctAnswer) => ({
    type: RESTART_GAME,
    correctAnswer
});

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = () => ({
    type: AURAL_UPDATE
});

