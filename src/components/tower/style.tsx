import { styled } from "styled-components";

export const StyledTower = styled.div`
    display: flex;
    position: relative;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledBase = styled.div`
    width: 75%;
    height: 5px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.3), transparent),
    linear-gradient(#b27315, #966f33 13%, #faddb0 14.5%, #faddb0 27.5%, #966f33 29%, #966f33 42%, #faddb0 43.5%, #d7b889 56.5%, #966f33 58%, #966f33 71%, #d7b889 72.5%, #d7b889 85.5%, #966f33 87%, #b27315);
`;

export const StyledBar = styled.div`
    width: 30px;
    height: 200px;
    background: linear-gradient(to right, #d7b889, #b27315, #966f33);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

export const StyledDisk = styled.div<{disk: number, position: number}>`
    position: absolute;
    bottom: ${props => props.position * 20 + 5}px;
    width: ${props => (props.disk + 1) * 30}px;
    height: 20px;
    background: linear-gradient(to right, #666, #000, #333);
    border-radius: 5px;
    border: 1px solid #C0BB00;
    cursor: pointer;
`;
