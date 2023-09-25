import { Header } from '../../src/components/header';
import { useEffect, useState } from 'react'
import { Container, SubContainer, Text, Div, ViewFiles } from './style'
import * as MediaLibrary from 'expo-media-library';

import { List } from '../../src/components/List';

interface LISTIN {
  albumId?: any,
  creationTime?: any,
  duration?: any,
  filename?: any,
  height?: any,
  id?: any,
  mediaType?: any,
  modificationTime?: any,
  uri?: any,
  width?: any,
}

// {"albumId": "1389444597", "creationTime": 0, "duration": 172.784, "filename": "AUD-20210523-WA0028.mp3", "height": 0, "id": "75625", "mediaType": "audio", "modificationTime": 1621808214000, "uri": "file:///storage/emulated/0/AUD-20210523-WA0028.mp3", "width": 0}

export const Home = () => {

  const [allFileAudio, setAllFileAudio] = useState<number | null>(null)
  const [audio, setAudio] = useState([])


  useEffect(() => {
    getPermission() // refatorar para um modal
  }, [])

  const getFilesAudio = async () => {
     let media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
    });
    
    media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
      first: media.totalCount,
    });

    const { totalCount, assets } = media

    setAllFileAudio(totalCount)

    setAudio(assets)

    console.log(assets)

  }

  const getPermission = async () => {
    try {
      const permision = await MediaLibrary.requestPermissionsAsync()
      const { granted, status } = permision
      if(granted && status === 'granted') {
        console.log('sim')
        getFilesAudio()
      }
      console.log(permision)
    } catch (error) {
      console.log('error', error)
    } 

  }

  return (
    <>
       <Container colors={['#000', '#000', '#2E1450']}>
        <Header />
        <SubContainer>
          <Div>
            <Text>
                Musicas recentes
            </Text>
            {/* <Text>
                Total de { allFileAudio } de Musicas
            </Text> */}
          </Div>
          <ViewFiles>
            {audio.length > 0 ? audio?.map(({ id, filename, duration }: LISTIN) => (
              <List key={id} duration={duration} name={filename}/>
            )) : <Text> Aguarde </Text>}
          </ViewFiles>
        </SubContainer>
      </Container>
    </>
  )
}


