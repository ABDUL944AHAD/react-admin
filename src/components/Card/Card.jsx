import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, LayoutGroup } from 'framer-motion'
import './Card.css'
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

const Card = (props) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <LayoutGroup>
            {
                expanded ?
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} layoutId={props.layoutId} /> :
                    <CompactCard param={props} setExpanded={() => setExpanded(true)} layoutId={props.layoutId} />
            }
        </LayoutGroup>
    )
}


//CompactCard
function CompactCard({ param, setExpanded, layoutId }) {
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            onClick={setExpanded}
            layoutId={layoutId}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png size="2rem" color="white" />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}




//ExpandedCard
function ExpandedCard({ param, setExpanded, layoutId }) {
    // const Png = param.png;
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto"
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,

            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2023-10-01T00:00:00.000Z",
                    "2023-10-01T01:30:00.000Z",
                    "2023-10-01T02:30:00.000Z",
                    "2023-10-01T03:30:00.000Z",
                    "2023-10-01T04:30:00.000Z",
                    "2023-10-01T05:30:00.000Z",
                    "2023-10-01T06:30:00.000Z",
                ],
            },
        }
    }
    return (
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId={layoutId}
        >
            <div style={{ cursor: "pointer", color: "white", alignSelf: "flex-end" }}>
                <UilTimes onClick={setExpanded} size="2rem" color= "white" />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type="area" options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}
export default Card


