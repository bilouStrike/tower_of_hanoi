import { 
    StyledBar,
    StyledBase,
    StyledTower,
    StyledDisk
 } from "./style"
import { TowerContext } from "../../App";
import { useContext } from "react";

type TowerT =  {
    currentDisk: (number | undefined)[],
    tower: string
}

const Tower: React.FC<TowerT> = ({currentDisk, tower}) => {
    const { disks, selecteTower, setSelecteTower, setDisk }  = useContext(TowerContext);

    const handleTowerClick = (tower: string) => {
        if (selecteTower === "" && disks[tower].length) {
            setSelecteTower(tower);
            return;
        }
        if (!disks[selecteTower]) return;

        const eleToMove = [...disks[selecteTower]].pop();
        const lastDestinationElem = [...disks[tower]].slice(-1)[0];

        if (eleToMove && lastDestinationElem && eleToMove > lastDestinationElem) {
            alert('this move not allowed');
            setSelecteTower("");
        } else {
            const diskToMove = disks[selecteTower].pop();
            setDisk({...disks, [tower]: [...disks[tower], diskToMove] });
            setSelecteTower("");
        }
    }
    
    return (
        <StyledTower onClick={() => handleTowerClick(tower)}>
            <StyledBar />
                {currentDisk.map((disk, index) => 
                   <StyledDisk
                        key={disk}
                        position={index}
                        disk={disk || 0}
                    />
                )}
            <StyledBase />
        </StyledTower>
    )
}

export default Tower;