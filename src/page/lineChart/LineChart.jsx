import { Box } from "@mui/material";// @ts-ignore
import Line from "./Line";
import Header from "../../components/Header";

const LineChart = () => {
    return (
        <Box>
            <Header title="Line Chart" subTitle="Simple Line Chart" />

            <Line />
        </Box>
    );
};

export default LineChart;
