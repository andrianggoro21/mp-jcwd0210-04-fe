import { useDisclosure, Box, Text, Input, Button } from '@chakra-ui/react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import ModalCreateProduct from '../../modal/createProduct';
import { useFormik } from "formik";

interface HeaderProductListProps {
    inputSearch: (productName: string) => void;
}

const HeaderManageProduct : React.FC<HeaderProductListProps>= ({inputSearch}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
 

    const formik = useFormik({
        initialValues: {
            productName: "",
        },
    
        onSubmit: (values) => {
            inputSearch(values.productName)
        },
    });
    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>Manage Product</Text>
                <form onSubmit={formik.handleSubmit} >
                        <Box display='flex' alignItems='center' gap='18px'>
                            <Box w='375px' display='flex' alignItems='center' bgColor='#FFFFFF' padding='0 5px 0 5px' borderRadius='5px'>
                                <Input border='none' _focus={{border: "none", boxShadow: "none",}} placeholder='Search Product here....' name='productName' value={formik.values.productName} onChange={formik.handleChange}/>
                                <Button variant='ghost' type='submit'>
                                    <IconSearch color='#838383' />
                                </Button> 
                            </Box>
                            <Button bgColor='#FF7940' color='#ffffff' display='flex' gap='10px' onClick={onOpen}> <IconPlus/> <Text>Create Product</Text> </Button>
                        </Box>
                </form>
                
            </Box>
            <ModalCreateProduct isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default HeaderManageProduct