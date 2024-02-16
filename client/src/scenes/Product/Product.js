import { useGetProductQuery } from "../../redux/api";
import { useState } from "react";
import { 
    useMediaQuery, Box, Card, 
    CardActions, CardContent, Collapse, 
    Button, Typography, Rating, useTheme } from "@mui/material";
import Header from "../../component/Header";
const Product = ()=>{

    const {data, isLoading} = useGetProductQuery()
    const isNonMobile =  useMediaQuery("(min-width : 1000px)")

    const Singledata = ({singledata})=>{
        const {
            _id, name, price, 
            description, category, rating, 
            supply, stat} = singledata
        const theme= useTheme();
        const [isExpanded, setIsExpanded] = useState(false)
        return (
            <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem"
            }}
            >
                <CardContent>
                    <Typography sx={{fontSize: 14}} color={theme.palette.secondary[700]} gutterBottom>
                        {category}
                    </Typography>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: "1.5rem"}} color={theme.palette.secondary[400]}>
                        ${Number(price).toFixed(2)}
                    </Typography>
                    <Rating
                    value={rating} readOnly/>
                    <Typography variant="body2">{description}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                    variant="primary"
                    size="small"
                    onClick={()=> setIsExpanded(!isExpanded)}
                    >
                       {isExpanded ? 'Less' : "SeeMore"}
                    </Button>
                    <Collapse
                    in={isExpanded}
                    timeout="auto"
                    sx={{
                        color: theme.palette.neutral[300]
                    }}
                    >
                        <CardContent>
                            <Typography>
                                id: {_id}
                            </Typography>
                            <Typography>
                                Supply Left: {supply}
                            </Typography>
                            <Typography>
                                Yearly Sales This Year: {stat.yearlySalesTotal}
                            </Typography>
                            <Typography>
                                yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActions>
            </Card>
        )
    }
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Products" subtitile="Proudcts List"/>
            {
                data && !isLoading ? (
                <Box
                mt="20px"
                display="grid"
                justifyContent= "space-between"
                rowGap="20px"
                columnGap="1.33rem"
                gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                sx={{
                    "& > div" : { gridColumn: isNonMobile ? undefined : "span 4"}
                }}
                >
                    {data.map((SingleData)=> 
                    <Singledata singledata={SingleData}/> )}
                    </Box>
                ) :(
                <>
                Loading ...
                </>)
            }
        </Box>
    )
}
export default Product;