'use client'

// src/pages/index.tsx
import {  useState } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeModal from '../components/welcomeModal';
import { useUser } from '../context/UserContext';
import nookies from 'nookies'
const oneDay = 24 * 60 * 60 * 1000

const Login = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const setClientCookies = (cookie:string, value:string) => {
    nookies.set(null, cookie, value, {
      maxAge: oneDay,
      path: '/',
    })
  }

  const handleCloseModal = () => {
    setClientCookies('username', user.username)
    setClientCookies('jobTitle', user.jobTitle)

    router.push('/');

    setIsModalOpen(false);
  };

  return (
      <WelcomeModal isOpen={isModalOpen} onClose={handleCloseModal} />
  );
};

export default Login;
