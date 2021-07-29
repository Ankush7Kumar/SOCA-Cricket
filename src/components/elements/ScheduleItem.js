import React from "react";
import classNames from 'classnames';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { propTypes } from "react-bootstrap/esm/Image";


export default function ScheduleItem(props) {
 
    return (
        <ListItem className="reveal-scale-down matchlistcolor mb-16 " data-reveal-delay="200"
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: ''
                
            }}
        >

            <Avatar src={require('./../../assets/images/scorecardresult.jpg')} />

            <div style={{ alignContent: "center" }}>
                <ListItemText 
                className="ta-c pl-12 pr-12"
                    primary= {props.teams1+" vs "+props.teams2}
                    secondary= {props.date+" / "+props.venue}
                    style={{ alignItems: "center", backgroundColor: ''}}
                />
            </div>

            <Avatar src={require('./../../assets/images/scorecardresult.jpg')} />

        </ListItem>
    );
}
