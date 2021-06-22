import styled from '@emotion/styled';

const Button = styled.button({
  padding: '.6em 1em',
  border: '1px solid #CCC',
  borderRadius: '10em',
  fontSize: '.4em',
  color: '#595959',
  backgroundColor: 'transparent',
  margin: 'auto',
  '&:hover': {
    backgroundColor: '#D6D6D6',
  },
  '&:active': {
    backgroundColor: '#BABABA',
  },
});

export default Button;
