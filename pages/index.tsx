import { Inter } from '@next/font/google';
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Wrapper>hi</Wrapper>
      <div> gihihis</div>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 8px;
  background: ${({ theme }) => theme.colors.primary['G']};
`;
