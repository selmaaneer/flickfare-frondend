import React, { useEffect, useState } from "react";
import styles from './Seat.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectSeat, deselectSeat } from '../../store/screenSlice'


function Seat(props) {
    
    const [status, setStatus] = useState('available')
    const bookedSeats = useSelector(state=>state.screen.bookedSeats)
    const dispatch = useDispatch()
 
    const seatNumber = props.index+1
    useEffect(() => {
        const result= bookedSeats.filter(seat=>seat.rowName === props.rowName && seat.seatNumber === seatNumber)
        if(result.length !== 0){
            setStatus('booked')
        }
    }, [bookedSeats])

    

    function handleSelect(){
        
        if(status === 'available')
        {
            setStatus('selected')
            dispatch(selectSeat({rowName: props.rowName, seatNumber: seatNumber}))

        }
        else if(status === 'selected'){
            setStatus('available')
            dispatch(deselectSeat({rowName: props.rowName, seatNumber: seatNumber}))
        }
        
    }
    return (
        <li className={styles.Seat + " " + (status==="selected"?styles.Selected:"") +" "+ (status === "booked"?styles.Booked: " ")} onClick={()=>{handleSelect()}}>
            <span>{seatNumber}</span>
        </li>
    );
    
}

export default Seat;