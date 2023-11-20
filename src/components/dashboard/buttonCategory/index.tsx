import { Box, Button, Text, Image, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ButtonCategoryDashboard = () => {
    const navigate = useNavigate()


    const [category, setCategory] = useState([])
    const toast = useToast()

    const getCategoryAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/category`);
            setCategory(res?.data?.data)
        } catch (err : any) {
            toast({ title: err.response.data, status: 'error', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getCategoryAll();
    }, []);
    return (
        <Box mb='30px'>
            <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='18px'>Categories</Text>
            <Box display='flex' alignItems='center' gap='36px' mt='20px'>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => navigate('/manage-category')}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/allmenu.svg' />
                        <Text color='#B4B4B4'>All Menus</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => navigate('/manage-category')}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[1] as any)?.image}`} />
                        <Text color='#B4B4B4'>{(category[1] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => navigate('/manage-category')}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[2] as any)?.image}`} />
                        <Text color='#B4B4B4'>{(category[2] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => navigate('/manage-category')}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[3] as any)?.image}`} />
                        <Text color='#B4B4B4'>{(category[3] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => navigate('/manage-category')}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[4] as any)?.image}`} />
                        <Text color='#B4B4B4'>{(category[4] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => navigate('/manage-category')}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[5] as any)?.image}`} />
                        <Text color='#B4B4B4'>{(category[5] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => navigate('/manage-category')}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[6] as any)?.image}`} />
                        <Text color='#B4B4B4'>{(category[6] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
            </Box>
        </Box>
    )
}

export default ButtonCategoryDashboard;