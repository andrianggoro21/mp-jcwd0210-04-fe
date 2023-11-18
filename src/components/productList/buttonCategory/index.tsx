import { Box, Button, Text, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

interface ButtonCategoryProps {
    onCategoryChange: (category: number | any) => void;
  }

const ButtonCategory : React.FC<ButtonCategoryProps> = ({onCategoryChange}) => {
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
            <Box display='flex' alignItems='center' gap='36px'>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(null)} _hover={{bgColor: "#FFF7F3"}} border='none' _focus={{border: "none", boxShadow: "none",}}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/allmenu.svg' />
                        <Text color='#FF7940'>All Menu</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(1)} _hover={{bgColor: "#FFF7F3"}} border='none' _focus={{border: "none", boxShadow: "none",}}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[1] as any)?.image}`} />
                        <Text color='#FF7940'>{(category[1] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(2)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[2] as any)?.image}`}/>
                        <Text color='#FF7940'>{(category[2] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(3)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[3] as any)?.image}`} />
                        <Text color='#FF7940'>{(category[3] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(4)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[4] as any)?.image}`} />
                        <Text color='#FF7940'>{(category[4] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(5)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[5] as any)?.image}`} />
                        <Text color='#FF7940'>{(category[5] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(6)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${import.meta.env.VITE_APP_IMAGE_URL}/category/${(category[6] as any)?.image}`} />
                        <Text color='#FF7940'>{(category[6] as any)?.categoryName}</Text>
                    </Box> 
                </Button>
            </Box>
        </Box>
    )
}

export default ButtonCategory;