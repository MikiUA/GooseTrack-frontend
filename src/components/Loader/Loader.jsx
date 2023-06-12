import ReactLoading from 'react-loading';
import { Container } from './Loader.styled';
export const Loader = () => {
    return (
        <Container>
            <ReactLoading type={'spin'} color={'#ffffff'} height={'100%'} width={'100%'} />
        </Container>
    );
};