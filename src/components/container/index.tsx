import StyledContainer from "./style"

type ContainerT = {
    children: React.ReactNode
}

const Container: React.FC<ContainerT> = ({children}) => {
    return (
       <StyledContainer>
            {children}
       </StyledContainer>
    )
}

export default Container;