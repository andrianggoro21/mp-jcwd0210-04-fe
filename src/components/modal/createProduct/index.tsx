import { useDisclosure, InputLeftElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import { Box, Button, Input, InputGroup, InputLeftAddon, Textarea, Select, Stack } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import React, { useRef, useEffect, useState } from 'react';
import { IconPhoto } from '@tabler/icons-react';
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

interface ModalCreateProductProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCreateProduct : React.FC<ModalCreateProductProps> = ({isOpen, onClose}) => {
    const [image, setImage] = useState <string | null>(null);
    const [category, setCategory] = useState([])
    const [status, setStatus] = useState([])
    const toast = useToast()

    const getCategoryAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/category`);
            setCategory(res?.data?.data)
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    const getStatusAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/status`);
            setStatus(res?.data?.data)
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getCategoryAll();
        getStatusAll();
    }, []);

    const handleResetForm = () => {
        formik.resetForm();
        setImage(null)
     };

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: ['image/*'] as any,
        onDrop: (acceptedFiles) => {
          if (acceptedFiles.length > 0) {
            const imageURL = URL.createObjectURL(acceptedFiles[0]);
            setImage(imageURL);
          }
        },
    });

    const createProduct = async (productName: string, categoryId: string, price: string, stock: string, description: string, statusId: string) => {
        try {
            let formData = new FormData();
            formData.append("productName", productName);
            formData.append("categoryId", categoryId);
            formData.append("price", price);
            formData.append("stock", stock);
            formData.append("description", description);
            formData.append("statusId", statusId);
            acceptedFiles.forEach((file) => {
                formData.append("image", file);
            });
            const res = await axios.post("http://localhost:8080/product", 
              formData
            );
            // console.log(res?.data?.data);
            toast({ title: res?.data?.message, status: 'success', position: 'top', duration: 4000, isClosable: true})
            setTimeout(() => {onClose();  window.location.reload();}, 3000);
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    }

    const formik = useFormik({
        initialValues: {
            productName: "",
            categoryId: "",
            price: "",
            stock: "",
            description: "",
            statusId: "",
        },
    
        onSubmit: (values) => {
            createProduct(values.productName, values.categoryId, values.price, values.stock, values.description, values.statusId)
        },
    });

    return (
        <Box  w="900px">
            <Modal  onClose={() => { onClose(); window.location.reload(); }} isOpen={isOpen} size='custom' isCentered>
                <ModalOverlay />
                <form onSubmit={formik.handleSubmit} >
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
                                                <Box {...getRootProps()} className="dropzone" color="#ffffff" display="flex" alignItems="center" justifyContent="center">
                                                    <Input {...getInputProps()}  size="xl" type='file' w='100%' h='100%' position='absolute' opacity='0'/>
                                                    <Box hidden={image ? true : false}>
                                                        <IconPhoto color='#838383' width='130px' height='80px'/>
                                                    </Box>  
                                                </Box>
                                                {image && <img src={image}  />}
                                            </Box>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#696666'>Status</FormLabel>
                                            <Select bgColor='#EEEDED' placeholder='Select option' name="statusId" value={formik.values.statusId} onChange={formik.handleChange}>
                                                {status?.map((item : any, index) => (
                                                        <option key={index} value={item.id}>{item.statusName}</option>
                                                    ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box w='50%' display='flex' flexDirection='column' gap='34px'>
                                        <FormControl>
                                            <FormLabel color='#696666'>Product Name</FormLabel>
                                            <Input bgColor='#EEEDED' placeholder='Product name here...' name="productName" value={formik.values.productName} onChange={formik.handleChange}/>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#696666'>Price</FormLabel>
                                            <InputGroup>
                                                <InputLeftAddon bgColor='#EEEDED' children='Rp' />
                                                <Input type='tel' bgColor='#EEEDED' placeholder='phone number' name="price" value={formik.values.price} onChange={formik.handleChange} />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#696666'>Stock</FormLabel>
                                            <Input bgColor='#EEEDED' placeholder='Type stock here...' name="stock" value={formik.values.stock} onChange={formik.handleChange}/>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#696666'>Product Category</FormLabel>
                                            <Select bgColor='#EEEDED' placeholder='Select option' name="categoryId" value={formik.values.categoryId} onChange={formik.handleChange}>
                                                {category?.map((item : any, index) => (
                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>

                                </Box>
                                <FormControl>
                                    <FormLabel color='#696666'>Description</FormLabel>
                                    <Textarea bgColor='#EEEDED' placeholder='Tell the description of the product here...' name="description" value={formik.values.description} onChange={formik.handleChange}/>
                                </FormControl>
                            </Box>
                        </ModalBody>
                        <ModalFooter display='flex' gap='20px'>
                            <Button w='80px' variant='outline' color='#FF7940' border='1px solid #FF7940' type='submit'>Save</Button>
                            <Button w='80px' bgColor='#FF7940' color='#ffffff' onClick={handleResetForm}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </Box>
        
      
    )
}

export default ModalCreateProduct;