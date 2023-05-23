import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {Overlay, ModalStyled} from './Modal.styled'



export const Modal = ({ largeImageURL, onClose }) => {

    useEffect(() => {

        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    } );

const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    }
    

        return (

            <Overlay onClick={handleBackdropClick}>
                <ModalStyled>
                    <img src={largeImageURL} alt="" />
                </ModalStyled>
            </Overlay>
        );
    };



Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onClick: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    
};



// export class Modal extends React.Component {

//     componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown)
//     };

//     componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown)
//     };


//     handleKeyDown = event => {
//         if (event.code === 'Escape') {
//             this.props.onClose();
//         }
//     };

//     handleBackdropClick = event => {
//         if (event.currentTarget === event.target) {
//             this.props.onClose();
//         }
//     };
//     render() {
//         const { largeImageURL } = this.props;
//         return (

//             <Overlay onClick={this.handleBackdropClick}>
//                 <ModalStyled>
//                     <img src={largeImageURL} alt="" />
//                 </ModalStyled>
//             </Overlay>
//         );
//     };

// };

// Modal.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     // onClick: PropTypes.func.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
    
// };