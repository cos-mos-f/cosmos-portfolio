// page.tsx
import { css } from 'linaria';
import React from 'react';

// Linariaを使用したスタイル定義
const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const heading = css`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const button = css`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

// コンポーネント
const HomePage: React.FC = () => {
  return (
    <div className={container}>
      <h1 className={heading}>Hello, Linaria with Next.js!</h1>
      <button className={button}>Click Me</button>
    </div>
  );
};

export default HomePage;

