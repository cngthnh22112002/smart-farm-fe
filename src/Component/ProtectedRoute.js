import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../Component/Login/Login';
import HomePage from './HomePage';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State để lưu trạng thái đăng nhập

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Xử lý đăng nhập thành công, cập nhật giá trị của isAuthenticated
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => <LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <ProtectedRoute path="/homepage" component={HomePage} isAuthenticated={isAuthenticated} />
        <Redirect to="/login" /> {/* Nếu không tìm thấy route, chuyển hướng đến trang đăng nhập */}
      </Switch>
    </Router>
  );
}

export default App;