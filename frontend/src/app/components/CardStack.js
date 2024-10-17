import { SimpleGrid } from "@chakra-ui/react"

export default function CardStack({children}){
    return (
        <SimpleGrid minChildWidth='120px' spacing='10px'>{children}</SimpleGrid>

    )
}