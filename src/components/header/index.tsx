import { StatusBar } from 'expo-status-bar'
import { HeaderCP, Text, Container, Div, Avatar } from './style'
import { AntDesign } from '@expo/vector-icons';

export const Header = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent={true}  />
      {/* <HeaderCP colors={['#5618A5','#5618A5']}> */}
      <HeaderCP>
        <Container>
          <Div>
            <Avatar>
              <AntDesign name="user" size={30} color="#9747FF" />
            </Avatar>
          </Div>
          <Div>
            <Text>
              Bem vindo
            </Text>
            <Text $font='Roboto-Bold'>
              Evanilson
            </Text>
          </Div>
        </Container>
      </HeaderCP>
    </>
  )
}