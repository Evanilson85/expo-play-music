import { ContainerList, SubContainerList, Img, Text, Div } from './style'

interface PROPS {
  name?: string,
  duration?: string,
  uri?: string,
  albumId?: string,
  id?: string
}

export const List = ({ name, duration, uri , albumId, id}: PROPS) => {
  return (
    <>
      <ContainerList>
        <SubContainerList>
          <Img></Img>
          <Div>
            <Text color='#ffffff7a'>
              The Chainsmokers
            </Text>
            <Text size='10px' numberOfLines={1} ellipsizeMode="tail">
              {name}
            </Text>
          </Div>
        </SubContainerList>
        <Text size='10px'>
          {duration} min
        </Text>
      </ContainerList>
    </>
  )
}

// {"albumId": "1389444597", "creationTime": 0, "duration": 172.784, "filename": "AUD-20210523-WA0028.mp3", "height": 0, "id": "75625", "mediaType": "audio", "modificationTime": 1621808214000, "uri": "file:///storage/emulated/0/AUD-20210523-WA0028.mp3", "width": 0}