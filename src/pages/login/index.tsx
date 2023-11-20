import { Box, Image, Text, Button } from "@chakra-ui/react";
import ImgLogin from "../../../public/images/login.png"
import ImgLogoLogin from "../../../public/images/logo-login.png"
import { useUserRole } from "../roles";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { setRole } = useUserRole();

    const handleLogin = (role : string, route: string) => {
        console.log('Setting role:', role);
        
        setRole(role);
        navigate(route)

        
        
    };

    return (
        <Box maxW='100vw' minH='100vh'>
            <Box  bgColor='#ffffff' w='100vw' h='100vh' display='flex'>
                <Image w='50vw' src={ImgLogin} />
                <Box  w='50vw' display='flex' alignItems='center' flexDirection='column' gap='80px' padding='150px 0 0 0'>
                    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                        <Image src={ImgLogoLogin} />
                        <Text fontFamily='Nunito' fontSize='48px' fontWeight='700' color='#FF7940'>POJA</Text>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap='30px'>
                        <Button bgColor='#FF7940' w='300px' color='#ffffff' onClick={() => handleLogin('admin', '/')}>Admin</Button>
                        <Button bgColor='#FF7940' w='300px' color='#ffffff' onClick={() => handleLogin('cashier', '/transaction')}>Cashier</Button>
                    </Box>
                    
                </Box>
            </Box>

        </Box>
    )
}

export default Login