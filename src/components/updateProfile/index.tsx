// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Divider,
//   AspectRatio,
//   Image,
//   Input,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { update } from "lodash";
// import { BsPersonCircle } from "react-icons/bs";

// function UpdateProfile() {
//   const toast = useToast();
//   const [fieldImage, setFieldImage] = useState<any | string | null>(null);
//   const updateProfile : React.FC<UpdateProfile>

// function handleChange(e: any) {
//   setFieldImage(e.target.files[0]);
// }

// const updateProfile = async () => {
//   try {
//     let formData = new FormData();
//     formData.append("image", fieldImage);
//     const { data } = await axios.patch(
//       `${import.meta.env.VITE_APP_API_BASE_URL}/profile/1`,
//       formData
//     );
//     toast({
//       title: data?.message,
//       status: "error",
//     });
//     setFieldImage("");
//     await onClose();
//   } catch (err) {
//     toast({
//       title: "Upload Error",
//       description: "File Too Large",
//       status: "warning",
//     });
//     setFieldImage("");
//   }
// };


//   return (
//     <Box>
//       <VStack align={"stretch"}>
//         <HStack>
//           <Box p={".25em .5em"}>
//             <Text as={"b"}>Profile</Text>
//           </Box>
//         </HStack>
//         <Divider borderColor={"#192655"} borderWidth={"2px"} />
//         <Box p={"0 .5em"}>
//           <VStack align={"stretch"} spacing={"1em"}>
//             {/* <Box>
//               <Text>Foto Profile</Text>
//             </Box> */}
//             <Box>
//               <AspectRatio width={{ base: "20", md: "40" }} ratio={1}>
//                 <Box
//                   borderColor="gray.300"
//                   borderStyle="dashed"
//                   borderWidth="2px"
//                   borderRadius={"50%"}
//                   shadow="sm"
//                   _hover={{ shadow: "md" }}
//                   display={"flex"}
//                   alignItems={"center"}
//                   justifyContent={"center"}
//                 >
//                   <Box
//                     position="relative"
//                     height="100%"
//                     width="100%"
//                     display={"flex"}
//                     alignItems={"center"}
//                     justifyContent={"center"}
//                   >
//                     <Box>
//                       <Image alt="not found" transform={"scale(2)"} />
//                     </Box>
//                     <Box
//                       height="100%"
//                       width="100%"
//                       display="flex"
//                       alignItems={"center"}
//                       justifyContent={"center"}
//                     >
//                       <Image />
//                       <Image />
//                     </Box>
//                     <Box
//                       height="100%"
//                       width="100%"
//                       position="absolute"
//                       display={"flex"}
//                       alignItems={"center"}
//                       justifyContent={"center"}
//                       opacity="0.2"
//                     >
//                       <BsPersonCircle fontSize={"40px"} />
//                     </Box>
//                     <Input
//                       type="file"
//                       height="100%"
//                       width="100%"
//                       position="absolute"
//                       top="0"
//                       left="0"
//                       opacity="0"
//                       aria-hidden="true"
//                       accept="image/*"
//                     />
//                   </Box>
//                 </Box>
//               </AspectRatio>
//               <Box position={"absolute"} display={"flex"} gap={2} mt={"10px"}>
//                 <Button size={"sm"} w={"70px"}>
//                   Remove
//                 </Button>
//                 <Button size={"sm"} w={"70px"}>
//                   Submit
//                 </Button>
//               </Box>
//               <></>
//             </Box>
//             <Box bgColor={"red"}>
//               <Text as={"b"}>Nama</Text>
//             </Box>
//           </VStack>
//         </Box>
//       </VStack>
//     </Box>
//   );
// }

// export default UpdateProfile;
