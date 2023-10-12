import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #333;
  color: white;
  
  .brand {
    font-size: 24px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export const UserGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin: 16px;
  padding: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 100px;
`;

export const UserCard = styled.div`
  background-color: white;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
  }

  h2 {
    margin: 8px 0;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
`;
