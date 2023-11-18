import { useDisclosure, InputLeftElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import { Box, Button, Input, InputGroup, InputLeftAddon, Textarea, Select, Stack } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import React, { useRef, useEffect, } from 'react';
import { IconPhoto } from '@tabler/icons-react';
import axios from 'axios';
import { useState } from 'react';
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { useToast } from '@chakra-ui/react';


interface ModalCreateProductProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCreateCategory : React.FC<ModalCreateProductProps> = ({isOpen, onClose}) => {
    const [image, setImage] = useState <string | null>(null);
    const toast = useToast()

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: ['image/*'] as any,
        onDrop: (acceptedFiles) => {
          if (acceptedFiles.length > 0) {
            const imageURL = URL.createObjectURL(acceptedFiles[0]);
            setImage(imageURL);
          }
        },
      });

    const createCategory = async (categoryName: string) => {
        try {
            let formData = new FormData();
            formData.append("categoryName", categoryName);
            acceptedFiles.forEach((file) => {
                formData.append("image", file);
            });
            const res = await axios.post("http://localhost:8080/category", 
              formData
            );
            toast({ title: res?.data?.message, status: 'success', position: 'top', duration: 4000, isClosable: true})
            setTimeout(() => {onClose();  window.location.reload();}, 3000);
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    }

    const formik = useFormik({
        initialValues: {
            categoryName: "",
        },
    
        onSubmit: (values) => {
            createCategory(values.categoryName)
        },
    });

    return (
        <Box  w="900px">
            <Modal onClose={() => { onClose(); window.location.reload(); }} isOpen={isOpen} size='custom' isCentered>
                <ModalOverlay />
                <form onSubmit={formik.handleSubmit} >
                    <ModalContent w="490px" h="450px">
                        <ModalHeader>Create Category</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box w='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' gap='20px'>
                                <Box display='flex' w='100%' gap='20px' alignItems='center'>
                                    <FormControl display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                        <FormLabel color='#696666'>Category Icon</FormLabel>
                                        <Box bgColor='#EEEDED' w='174px' h='174px' display='flex' alignItems='center' justifyContent='center' borderRadius='10px'>
                                            <Box {...getRootProps()} className="dropzone" color="#ffffff" display="flex" alignItems="center" justifyContent="center">
                                                <Input {...getInputProps()}  size="lg" /*type='file' w='100%' h='100%' position='absolute' opacity='0'*//>
                                                <Box hidden={image ? true : false}>
                                                 <IconPhoto  color='#838383' width='130px' height='80px'/>
                                                </Box>
                                            </Box> 
                                            {image && <img src={image}  />}     
                                        </Box>
                                    </FormControl>
                                </Box>
                                <FormControl>
                                    <FormLabel color='#696666'>Category Name</FormLabel>
                                    <Input bgColor='#EEEDED' placeholder='Category name here...' name="categoryName" value={formik.values.categoryName} onChange={formik.handleChange}/> 
                                </FormControl>
                            </Box>
                        </ModalBody>
                        <ModalFooter display='flex' gap='20px'>
                            <Button w='80px' variant='outline' color='#FF7940' border='1px solid #FF7940' type='submit'>Save</Button>
                            <Button w='80px' bgColor='#FF7940' color='#ffffff' onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
                
            </Modal>
        </Box>
        
      
    )
}

export default ModalCreateCategory;