import { useEffect, useState } from 'react';
import useMessageStore from '../store/useMessageStore';

const Snackbar = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    const unsubscribe = useMessageStore.subscribe(
      ({ message, messageType }) => {
        setMessage(message);
        setMessageType(messageType);
        if (message) {
          const timer = setTimeout(() => {
            setMessage('');
            setMessageType('');
          }, 3000);
          return () => clearTimeout(timer);
        }
      },
      (state) => [state.message, state.messageType]
    );

    return () => unsubscribe();
  }, []);

  if (!message) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded text-white ${
        messageType === 'success' ? 'bg-green-700' : 'bg-red-700'
      }`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
