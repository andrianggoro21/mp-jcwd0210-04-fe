import { useDisclosure, Box, Image } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import ModalUpdateProduct from '../../modal/updateProduct';

interface Product {
    id: number;
    productName: string;
    categoryId: string;
    price: string;
    stock: number;
    description: string;
    image: string;
    statusId: number;
    category: any;
    status: any;
    createdAt: string;
    updatedAt: string;
    // Add other properties as needed
  }

 

const BodyManageProduct = ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectAll, setSelectAll] = useState(false);
    const [product, setProduct] = useState([])
    const [productById, setProductById] = useState<Product | null>()
    const [productId, setProductId] = useState<number | any>()
    const toast = useToast()

    const getProductAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/product`);
            // console.log(res?.data?.data);
            setProduct(res?.data?.data)
            // toast({ title: res?.data?.message, status: 'success', position: 'top', duration: 4000, isClosable: true})
        } catch (err : any) {
            alert(err);
            // toast({ title: err, status: 'error', duration: 4000, isClosable: true})
        }
    };

    useEffect(() => {
        getProductAll();
    }, []);

    const handleModalClose = () => {
        onClose();
        getProductAll();
    };
    
    
    return (
        <Box>
            <TableContainer>
                <Table size='sm' variant='striped' bgColor='#FFF6F3' >
                <Thead bgColor='#FF7940' h='40px'>
                    <Tr >
                        <Th ><Checkbox isChecked={selectAll} onChange={() => setSelectAll(!selectAll)}/></Th>
                        <Th color='#ffffff'>Product Image</Th>
                        <Th color='#ffffff'>Product Name</Th>
                        <Th color='#ffffff'>Price</Th>
                        <Th color='#ffffff'>Stock</Th>
                        <Th color='#ffffff'>Category</Th>
                        <Th color='#ffffff'>Description</Th>
                        <Th color='#ffffff' textAlign='center'>Status</Th>
                        <Th color='#ffffff' textAlign='center'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px'>
                    {product?.map((item: any, index) => (
                        <Tr>
                            <Td><Checkbox isChecked={selectAll}/></Td>
                            <Td><Image w='100px' h='60px' src={`${import.meta.env.VITE_APP_IMAGE_URL}/product/${item?.image}`} /></Td>
                            <Td >{item?.productName}</Td>
                            <Td >Rp {item?.price}</Td>
                            <Td >{item?.stock}</Td>
                            <Td >{item?.category?.categoryName}</Td>
                            <Td maxW='150px' maxH='40px' overflow='hidden' textOverflow='ellipsis' whiteSpace='normal' /*overflowY='auto'*/>{item?.description}</Td>
                            <Td textAlign='center'><Switch colorScheme='green'/></Td>
                            <Td textAlign='center'><Box display='flex' justifyContent='center' gap='10px'><Button size='sm' w='50px' bgColor='#FF7940' color='#ffffff' onClick={() => { setProductById(item); setProductId(item?.id); onOpen(); }} >Edit</Button> <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'>Delete</Button></Box></Td>
                        </Tr>
                    ))}
                </Tbody>
                </Table>
            </TableContainer>
            {isOpen &&<ModalUpdateProduct isOpen={isOpen} onClose={handleModalClose} productId={productId} productById={productById}/>}
        </Box>
    )
}

export default BodyManageProduct;