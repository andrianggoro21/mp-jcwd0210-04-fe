import { useDisclosure, InputLeftElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import { Box, Button, Input, InputGroup, InputLeftAddon, Textarea, Select, Stack } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import React, { useRef, useEffect, } from 'react';
import { IconPhoto } from '@tabler/icons-react';


interface ModalCreateProductProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCreateCategory : React.FC<ModalCreateProductProps> = ({isOpen, onClose}) => {
    return (
        <Box  w="900px">
            <Modal  onClose={onClose} isOpen={isOpen} size='custom' isCentered>
                <ModalOverlay />
                <ModalContent w="490px" h="450px">
                    <ModalHeader>Create Category</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box w='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' gap='20px'>
                            <Box display='flex' w='100%' gap='20px' alignItems='center'>
                                <FormControl display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                    <FormLabel color='#696666'>Category Icon</FormLabel>
                                    <Box bgColor='#EEEDED' w='174px' h='174px' display='flex' alignItems='center' justifyContent='center' borderRadius='10px'>
                                        <Box className="dropzone" color="#ffffff" display="flex" alignItems="center" justifyContent="center">
                                            <Input type='file' w='100%' h='100%' position='absolute' opacity='0'/>
                                            <IconPhoto color='#838383' width='130px' height='80px'/>
                                        </Box>      
                                    </Box>
                                </FormControl>
                            </Box>
                            <FormControl>
                                <FormLabel color='#696666'>Category Name</FormLabel>
                                <Input bgColor='#EEEDED' placeholder='Category name here...'/>
                                
                            </FormControl>
                        </Box>
                    </ModalBody>
                    <ModalFooter display='flex' gap='20px'>
                        <Button w='80px' variant='outline' color='#FF7940' border='1px solid #FF7940' >Save</Button>
                        <Button w='80px' bgColor='#FF7940' color='#ffffff' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
        
      
    )
}

export default ModalCreateCategory;