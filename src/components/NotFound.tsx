import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1>404 - Страница не найдена</h1>
      <Link to="/" style={{ color: '#35B8BE', fontWeight: 'bold' }}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
