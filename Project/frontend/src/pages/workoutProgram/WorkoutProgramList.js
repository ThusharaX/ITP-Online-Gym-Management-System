import React from 'react'
import { Button } from '@mantine/core';

import WorkoutProgramContext from '../../contexts/WorkoutProgramContext';
import { useContext } from 'react';

const WorkoutProgramList = () => {

    const { workoutPrograms, confirmDelete } = useContext(WorkoutProgramContext);

    return (
        <>
            <ul>
                {workoutPrograms.map((item) => (
                    <div>
                        <img src={item.photoURL} alt={item.name} />
                        <li key={item._id}>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>{item.conducted_by}</p>
                                <p>{item.fee}</p>
                                <p>{item.day}</p>
                                <p>{item.time}</p>
                            </div>
                            <Button onClick={() => confirmDelete(item._id)} color="red" compact>Delete</Button>
                        </li>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default WorkoutProgramList