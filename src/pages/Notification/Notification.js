import React, { useState } from 'react';

function Notify() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae dui vel urna pulvinar vulputate. Duis finibus orci id dui faucibus, in lobortis est sagittis.',
            date: '2023-04-07',
        },
        {
            id: 2,
            message:
                'Sed faucibus velit sed ipsum convallis, vitae rhoncus enim dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean iaculis luctus lacus ut sollicitudin.',
            date: '2023-04-06',
        },
        {
            id: 3,
            message:
                'Cras vitae justo at sem mattis malesuada in sed odio. Nulla facilisi. Nullam sit amet justo eu purus dapibus vestibulum. Duis bibendum risus at urna fermentum fringilla.',
            date: '2023-04-05',
        },
        {
            id: 4,
            message:
                'Proin aliquet urna ut risus pellentesque vehicula. Aliquam erat volutpat. Phasellus malesuada, mauris ut bibendum fermentum, nunc arcu vehicula velit, non efficitur orci lectus sit amet est.',
            date: '2023-04-04',
        },
        {
            id: 5,
            message:
                'Nam euismod odio quis nunc iaculis, quis bibendum eros efficitur. Donec euismod orci quis est aliquet bibendum. Nulla facilisi. Vestibulum tempor ipsum a leo sollicitudin, non placerat mi feugiat.',
            date: '2023-04-03',
        },
        {
            id: 6,
            message:
                'Suspendisse potenti. Fusce auctor sodales urna, vel viverra mi. Nullam laoreet ex vel mi elementum tristique. Ut euismod velit sit amet nibh suscipit, ac facilisis turpis volutpat.',
            date: '2023-04-02',
        },
        {
            id: 7,
            message:
                'Duis vitae orci dolor. Nam faucibus magna enim, a lacinia ex maximus ac. Praesent a lacinia dolor. Suspendisse potenti. Cras sit amet malesuada lorem. ',
            date: '2023-04-01',
        },
        {
            id: 8,
            message:
                'Pellentesque blandit massa vitae tortor feugiat blandit. Donec posuere lacus sit amet ipsum imperdiet sollicitudin. Morbi feugiat nisi quis lectus placerat faucibus. Aenean id lorem vel erat bibendum blandit.',
            date: '2023-03-31',
        },
        {
            id: 9,
            message:
                'Donec auctor velit vel massa ultrices bibendum. Integer tempor lorem eu diam luctus vehicula. Sed vitae risus sit amet justo bibendum malesuada vel vel sem.',
            date: '2023-03-30',
        },
        {
            id: 10,
            message:
                'Mauris facilisis dui arcu, at lacinia ex lobortis id.Pellentesque blandit massa vitae tortor feugiat blandit. Donec posuere lacus sit amet ipsum imperdiet sollicitudin',
            date: '2023-03-29',
        },
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
                {/* <button style={{ margin: '10px' }}>Button 1</button>
                <button style={{ margin: '10px' }}>Button 2</button>
                <button style={{ margin: '10px' }}>Button 3</button>
                <button style={{ margin: '10px' }}>Button 4</button>
                <button style={{ margin: '10px' }}>Button 5</button>
                <button style={{ margin: '10px' }}>Button 6</button> */}
            </div>
            <div style={{ flex: 40 }}>
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        style={{
                            backgroundColor: '#fff',
                            padding: '10px',
                            marginBottom: '10px',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{notification.message}</div>
                        <div style={{ fontSize: '12px', color: '#888' }}>{notification.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notify;
