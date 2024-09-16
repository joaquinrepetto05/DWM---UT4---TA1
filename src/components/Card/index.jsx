import React from "react";
import classes from "./index.module.css";	

function Card ({ title , description , assignedTo , startDate , endDate }) {
    return (
        <div className = {classes.card}>
            <h2 className = {classes.cardTitle}>{title}</h2>
            <p className = {classes.cardContent}>{description}</p>
            <p className = {classes.cardContent}>Assigned to: {assignedTo}</p>
            <p className = {classes.cardContent}>Start date: {startDate}</p>
            <p className = {classes.cardContent}>End date: {endDate}</p>
        </div>
    );
}

export default Card;