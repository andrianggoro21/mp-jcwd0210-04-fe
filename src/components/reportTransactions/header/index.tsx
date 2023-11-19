import { useDisclosure, Box, Text, Input, Button} from '@chakra-ui/react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import ModalCreateCategory from '../../modal/createCategory';
import { useState } from 'react';



const HeaderReportTransaction = ({ onDateChange }:  { onDateChange: (startDate: string, endDate: string) => void }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleDateChange = () => {
        onDateChange(startDate, endDate);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleDateChange();
        }
      };

    
   
    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>Transactions</Text>
                <Box display='flex' alignItems='end' gap='18px'>
                    <Box w='375px' display='flex' alignItems='center' bgColor='#FFFFFF' padding='0 5px 0 5px' borderRadius='5px'>
                        <Input border='none' _focus={{border: "none", boxShadow: "none"}} placeholder='Search Transaction here....'/>
                        <IconSearch color='#838383' />
                    </Box>
                    <Box>
                        <Text>Start date</Text>
                        <Input bgColor='#FFFFFF' w='230px' placeholder="Start Date" size="md" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} onBlur={handleDateChange}/>
                    </Box>
                    <Box>
                        <Text>End date</Text>
                        <Input bgColor='#FFFFFF' w='230px' placeholder="Start Date" size="md" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} onBlur={handleDateChange} onKeyDown={handleKeyDown}/>
                    </Box>
                    
                    
                </Box>
                
            </Box>
            
        </Box>
    )
}

export default HeaderReportTransaction;