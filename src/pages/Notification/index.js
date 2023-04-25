import React from 'react';
import Notification from 'bk-react-notification';

export default function App() {
  const [notificationList, setNotificationList] = React.useState([]);

  const removeNotification = id => {
    // You may use Web API to remove notification from data-base.
    let updatedDataList = [];
    if (id) {
      updatedDataList = notificationList.filter(item => item.id !== id);
    }
    setNotificationList(updatedDataList);
  };

  const updateViewedNotification = id => {
    // You may use Web API to update notification in data-base.
    let updatedDataList = [];
    if (id) {
      updatedDataList = notificationList.map(item => {
        if (item.id === id) {
          item.viewed = !item.viewed;
        }
        return item;
      });
    } else {
      updatedDataList = notificationList.map(item => {
        item.viewed = true;
        return item;
      });
    }
    setNotificationList(updatedDataList);
  };

  React.useEffect(() => {
    // you can use fetch API instead of below direct assignment
    let dataList = [
      {
        id: 1,
        from: 'Nguyen Duc Huy',
        content: "Admin Huy turned on all the lights.",
        updatedDate: new Date(2023, 4, 20),
        viewed: false,
      },
      {
        id: 2,
        from: 'Duc Huy',
        content: "Admin Huy watered.",
        updatedDate: new Date(2023, 4, 21),
        viewed: false,
      },
    ];
    setNotificationList(dataList);
  }, []);

  return (
    <div>
      <Notification
        title="Notifications"
        items={notificationList}
        updateViewedNotification={updateViewedNotification}
        removeNotification={removeNotification}
      />
    </div>
  );
}