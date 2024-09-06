import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"
import EdxModalContentWrapper from "./EdxModalContentWrapper"

interface EdxModalProps {
    show: boolean 
    heading: string 
    hideControls?: boolean
    isSavingChanges?: boolean
    children: JSX.Element | JSX.Element[]
    onSave?: () => void
    onClose: () => void
}

const EdxModal = ({ heading, show, isSavingChanges, hideControls, children, onSave, onClose }: EdxModalProps) => {
    return (
        <Modal 
            isOpen={show} 
            onClose={onClose}
            motionPreset='slideInRight'>
                <ModalOverlay />
                <ModalContent 
                    aria-label={`${heading} Dialog`}
                    borderRadius='0'
                    top='0rem' 
                    mt='0'
                    h='100vh'
                    marginLeft='auto'
                    maxW='629px' 
                    w='629px' >
                        <ModalCloseButton />
                        <ModalBody 
                            bg='#eff4f6'
                            padding='111px 67px 463px 42px'
                            left='0'
                            w='629px' 
                            maxW='629px'>
                                <EdxModalContentWrapper 
                                    heading={heading}
                                    hideControls={hideControls}
                                    isSavingChanges={isSavingChanges}
                                    onSave={onSave? onSave : () => null} 
                                    onCancel={onClose}>
                                        {children}
                                </EdxModalContentWrapper>
                        </ModalBody>
                </ModalContent>
        </Modal>
    )    
}

export default EdxModal