import { Dispatch, SetStateAction, createContext, useCallback, useState } from 'react'
import './App.css'
import Container from './components/container'
import Tower from './components/tower'
import { styled } from 'styled-components'

type disksT = {[key: string]: (number | undefined)[]} 

type TowerContextT = {
  disks: disksT,
  selecteTower: string, 
  setSelecteTower: Dispatch<SetStateAction<string>>
  setDisk: Dispatch<SetStateAction<disksT>>,
}

export const TowerContext = createContext<TowerContextT>({} as TowerContextT);

export const StyledButton = styled.button`
  margin-top: 50px;
`;

function App() {

  const [disks, setDisk] = useState<disksT>({ disk_1: [5,4,3,2,1], disk_2: [], disk_3: []});
  const [selecteTower, setSelecteTower] = useState<string>("");

  const handleNewGame = useCallback(() => 
    setDisk({...disks, disk_1: [5,4,3,2,1], disk_2: [], disk_3: []})
  ,[disks]);

  return (
    <TowerContext.Provider value={{disks, selecteTower, setSelecteTower, setDisk}}>
      <h1>Towers of Hanoi</h1>
      <p>This is a Towers of Hanoi game implemented using ReactJS.<br/> The Towers of Hanoi is a classic mathematical puzzle that consists of three rods and a number of disks of different sizes.<br/> The objective of the puzzle is to move the entire stack of disks from one rod to another following a few simple rules.</p>
      <Container>
        {Object.keys(disks).map((disk) => 
          <Tower key={disk} currentDisk={disks[disk]} tower={disk} />
        )}
      </Container>
      <StyledButton onClick={handleNewGame}>New Game</StyledButton>
    </TowerContext.Provider>
  )
}

export default App
