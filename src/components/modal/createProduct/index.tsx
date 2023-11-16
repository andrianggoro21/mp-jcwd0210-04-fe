import { useDisclosure, InputLeftElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import { Box, Button, Input, InputGroup, InputLeftAddon, Textarea, Select, Stack } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import React, { useRef, useEffect, } from 'react';
import { IconPhoto } from '@tabler/icons-react';


interface ModalCreateProductProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCreateProduct : React.FC<ModalCreateProductProps> = ({isOpen, onClose}) => {
    return (
        <Box  w="900px">
            <Modal  onClose={onClose} isOpen={isOpen} size='custom' isCentered>
                <ModalOverlay />
                <ModalContent w="1050px" h="700px">
                    <ModalHeader>Create Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display='flex' justifyContent='center' flexDirection='column' gap='20px'>
                            <Box display='flex' w='100%' gap='20px'>
                                <Box w='50%' display='flex' flexDirection='column' gap='20px'>
                                    <FormControl>
                                        <FormLabel color='#696666'>Product Image</FormLabel>
                                        <Box bgColor='#EEEDED' h='265px' display='flex' alignItems='center' justifyContent='center' borderRadius='10px'>
                                            <Box className="dropzone" color="#ffffff" display="flex" alignItems="center" justifyContent="center">
                                                <Input type='file' w='100%' h='100%' position='absolute' opacity='0'/>
                                                <IconPhoto color='#838383' width='130px' height='80px'/>
                                            </Box>
                                            
                                        </Box>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color='#696666'>Status</FormLabel>
                                        <Select bgColor='#EEEDED' placeholder='Select option'>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box w='50%' display='flex' flexDirection='column' gap='34px'>
                                    <FormControl>
                                        <FormLabel color='#696666'>Product Name</FormLabel>
                                        <Input bgColor='#EEEDED' placeholder='Product name here...'/>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color='#696666'>Price</FormLabel>
                                        <InputGroup>
                                            <InputLeftAddon bgColor='#EEEDED' children='Rp' />
                                            <Input type='tel' bgColor='#EEEDED' placeholder='phone number' />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color='#696666'>Stock</FormLabel>
                                        <Input bgColor='#EEEDED' placeholder='Type stock here...'/>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color='#696666'>Product Category</FormLabel>
                                        <Select bgColor='#EEEDED' placeholder='Select option'>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Box>
                            <FormControl>
                                <FormLabel color='#696666'>Product Category</FormLabel>
                                <Textarea bgColor='#EEEDED' placeholder='Tell the description of the product here...'/>
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

export default ModalCreateProduct;