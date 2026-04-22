import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const events = [
        { date: '2026-01-01', title: 'New Year Celebration', description: 'Celebrated the New Year with friends and family.' },
        { date: '2026-02-14', title: 'Valentine's Day', description: 'Had a romantic dinner.' },
        { date: '2026-04-22', title: 'Timeline Component Created', description: 'Created a React component for timeline visualization.' },
    ];

    return (
        <div className='timeline'>
            <h1>Event Timeline</h1>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <div className='event-date'>{event.date}</div>
                        <div className='event-title'>{event.title}</div>
                        <div className='event-description'>{event.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;