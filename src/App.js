import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailList from './components/emaillist/EmailList';
import Mail from './components/mail/Mail';
import SendMail from './components/sendmail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/login/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // Logged in
        dispatch(login({
          id: userAuth.id,
          displayName: userAuth.displayName,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch])
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className="app_body">
            <SideBar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;