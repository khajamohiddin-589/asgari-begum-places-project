import styled from 'styled-components'

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#ffffff' : '#0070c1')};
`

export const StatesContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  opacity: 1;
  width: 90vw;
  background-image: url(${props => props.backgroundurl});
`
export const StateName = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 800;
  font-family: 'Roboto';
`
