import React, { useState } from 'react';

export default function Notify () {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Control pump',
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae dui vel urna pulvinar vulputate. Duis finibus orci id dui faucibus, in lobortis est sagittis.',
            date: '10:42:32 PM April 24 2023',
        },
        {
            id: 2,
            title: 'Control fan',
            message:
            'Pellentesque blandit massa vitae tortor feugiat blandit. Donec posuere lacus sit amet ipsum imperdiet sollicitudin. Morbi feugiat nisi quis lectus placerat faucibus. Aenean id lorem vel erat bibendum blandit.',
            date: '10:42:32 PM April 24 2023',
        },
        {
            id: 3,
            title: 'Control light',
            message:
            'Light is on!',
            date: '10:42:32 PM April 24 2023',
        }

        
    ]);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                backgroundColor: '#efefef',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div
                style={{
                    backgroundColor: 'grey',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 2,
                    justifyContent: 'space-between',
                    marginRight: 20,
                    marginBottom: 560,
                }}
            >
            </div>
            
            <div style={{ flex: 35 }}>
                {notifications.map((notification) => (
                    <div key={notification.id}
                        style={{
                            backgroundColor: '#fff',
                            padding: '10px',       
                        }}
                    >
                        <div style={{ 
                            fontSize: '12px', 
                            color: '#000022', 
                            border: '2px solid #000',
                            marginBottom: '4px', 
                            width: '160px',
                            height: '24px',
                            background: '#3399FF',
                            borderRadius: '4px 4px 4px 4px',
                            }}>
                            {notification.date}
                        </div>
                        <div style={{ 
                            fontSize: '16px', 
                            borderTop: '4px solid green', 
                            backgroundColor: '#00FFCC', 
                            borderRadius: '0 0 4px 4px',
                           }}>
                            <div
                                style={{
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    marginLeft: '10px'
                                }}>
                                {notification.title}
                            </div>
                            <div style={{
                                    textAlign: 'left',
                                    marginLeft: '10px'
                                }}>
                            {notification.message}
                            </div>
                        </div>
                        
                    </div>    
                ))}
            </div>
        </div>
    );
}

// export default Notify;
