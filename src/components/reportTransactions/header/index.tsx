import { useDisclosure, Box, Text, Input, Button} from '@chakra-ui/react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import ModalCreateCategory from '../../modal/createCategory';
import { useState, useEffect } from 'react';
import { IconPrinter, IconDownload  } from '@tabler/icons-react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import * as XLSX from 'xlsx';

interface Product {
    id: number;
    price: string;
    productName: string;
    // Add other necessary properties
  }
interface TransactionDetail {
    id: number;
    productId: number;
    transactionId: number;
    quantity: number;
    price: string;
    product: Product[];
    // Add other necessary properties
  }
  
  interface User {
    id: number;
    username: string;
    // Add other necessary properties
  }
  
  interface Transaction {
    id: number;
    date: string;
    totalQuantity: number;
    totalPrice: string;
    transaction_details: TransactionDetail[];
    user: User;
    // Add other necessary properties
  }
interface FooterReportTransactionProps {
    onDateChange: (startDate: string, endDate: string) => void;
    
    // onExportExcel: () => void;
}
const HeaderReportTransaction : React.FC<FooterReportTransactionProps> = ({ onDateChange }) => {
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

      const [transaction, setTransaction] = useState<Transaction[]>([])
      const toast = useToast()
  
      const getTransactionAll = async () => {
          try {
            //   const pageToFetch = Math.max(1, 1);
              const res = await axios.get(`http://localhost:8080/report/excel`);
            //   console.log(res?.data?.data);
              
              setTransaction(res?.data?.data)
              // window.location.reload();
          } catch (err : any) {
              toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
          }
      };
  
    //   const exportToExcel = (transactionId: number) => {
    //       const filteredTransaction = transaction.filter((item) => item.id === transactionId);
    //       const ws = XLSX.utils.json_to_sheet(filteredTransaction);
    //       const wb = XLSX.utils.book_new();
    //       XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
    //       XLSX.writeFile(wb, `transactions_${transactionId}.xlsx`);
    //     };
  
    //   const exportToExcel = (transactionId: number) => {
    //       // Filter transactions based on the given transactionId
    //       const filteredTransaction = transaction.filter((item) => item.id === transactionId);
      
    //       // Convert the filtered data to an Excel sheet
    //       const ws = XLSX.utils.json_to_sheet(filteredTransaction);
      
    //       // Create a new Excel workbook and append the sheet to it
    //       const wb = XLSX.utils.book_new();
    //       XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
      
    //       // Save the Excel file with a specific filename based on the transactionId
    //       XLSX.writeFile(wb, `transactions_${transactionId}.xlsx`);
    //   };

    const exportToExcel = () => {
        try {
          // Convert the existing transaction data to an Excel sheet
          const ws = XLSX.utils.json_to_sheet(transaction);
    
          // Create a new Excel workbook and append the sheet to it
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
    
          // Save the Excel file with a specific filename
          XLSX.writeFile(wb, 'all_transactions.xlsx');
        } catch (err) {
          toast({
            title: 'Error exporting to Excel',
            status: 'error',
            position: 'top',
            duration: 2000,
            isClosable: true,
          });
        }
      };
 
  
      useEffect(() => {
          
          getTransactionAll();
          
      }, []);


    
   
    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>Transactions</Text>
                <Box display='flex' alignItems='end' gap='18px'>
                    {/* <form>
                        <Box w='375px' display='flex' alignItems='center' bgColor='#FFFFFF' padding='0 5px 0 5px' borderRadius='5px'>
                            <Input border='none' _focus={{border: "none", boxShadow: "none"}} placeholder='Search Transaction here....'/>
                            <IconSearch color='#838383' />
                        </Box>
                    </form> */}
                    
                    
                    <Box>
                        <Text>Start date</Text>
                        <Input bgColor='#FFFFFF' w='230px' placeholder="Start Date" size="md" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} onBlur={handleDateChange}/>
                    </Box>
                    <Box>
                        <Text>End date</Text>
                        <Input bgColor='#FFFFFF' w='230px' placeholder="Start Date" size="md" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} onBlur={handleDateChange} onKeyDown={handleKeyDown}/>
                    </Box>
                    <Box>
                        <Button className='exportAllTransaction' size='md' bgColor='#FF7940' color='#ffffff' border='1px solid #FF7940' onClick={exportToExcel}><Box display='flex' textAlign='center' gap='5px'><IconDownload stroke={1.5}/></Box></Button>
                    </Box>
                    
                    
                </Box>
                
            </Box>
            
        </Box>
    )
}

export default HeaderReportTransaction;