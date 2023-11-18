import { useDisclosure, Box, Image } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import ModalUpdateCategory from '../../modal/updateCategory';

interface Category {
    id: number;
    categoryName: string;
    image: string;
  }

const BodyManageCategory  = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectAll, setSelectAll] = useState(false);
    const [category, setCategory] = useState([])
    const [categoryById, setCategoryById] = useState<Category | null>()
    const [categoryId, setCategoryId] = useState<number | any>()
    const [categoryDelete, setCategoryDelete] = useState<Category | null>()
    const toast = useToast()

    const getCategoryAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/category`);
            setCategory(res?.data?.data)
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    const deleteCategory = async (categoryId: number) => {
        try {
            const res = await axios.delete(`http://localhost:8080/category/category/${categoryId}`);
            setCategoryDelete(res?.data?.data)
            toast({ title: res?.data?.message, status: 'success', position: 'top', duration: 2000, isClosable: true})
        } catch (err : any) {   
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getCategoryAll();
    }, [categoryDelete]);

    const handleModalClose = () => {
        onClose();
        getCategoryAll();
    };
    
    return (
        <Box>
            <TableContainer>
                <Table size='sm' variant='striped' bgColor='#FFF6F3' >
                <Thead bgColor='#FF7940' h='40px'>
                    <Tr >
                        <Th ><Checkbox isChecked={selectAll} onChange={() => setSelectAll(!selectAll)}/></Th>
                        <Th color='#ffffff'>Category Icon</Th>
                        <Th color='#ffffff'>Category Name</Th>
                        {/* <Th color='#ffffff' textAlign='center'>Status</Th> */}
                        <Th color='#ffffff' textAlign='center'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px'>
                    {category.map((item:string|any, index) => (
                        <Tr>
                            <Td><Checkbox isChecked={selectAll}/></Td>
                            <Td><Image w='80px' h='60px' src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${item.image }`} /></Td>
                            <Td >{item.categoryName}</Td>
                            {/* <Td textAlign='center'><Switch colorScheme='green'/></Td> */}
                            <Td textAlign='center'>
                                <Box display='flex' justifyContent='center' gap='10px'>
                                    <Button size='sm' w='50px' bgColor='#FF7940' color='#ffffff' onClick={() => { setCategoryId(item?.id); setCategoryById(item);  onOpen(); }} >Edit</Button>
                                    <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940' onClick={() => deleteCategory(item.id)}>Delete</Button>
                                </Box>
                            </Td>
                        </Tr>
                    ))}
                    
                </Tbody>
                </Table>
            </TableContainer>
            {isOpen && <ModalUpdateCategory isOpen={isOpen} onClose={handleModalClose} categoryId={categoryId} categoryById={categoryById}/>}
            
        </Box>
    )
}

export default BodyManageCategory;