import { FaWindows, FaPlaystation, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe, BsXbox} from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        mac: FaApple,
        nintendo: SiNintendo,
        xbox: BsXbox,
        linux: FaLinux,
        android: FaAndroid,
        web: BsGlobe,
        ios: MdPhoneIphone
    }

    return (
    <HStack marginY={1}>
      {platforms.map(platform => <Icon as={iconMap[platform.slug]} color='gray.400'/>)}
    </HStack>
  );
}

export default PlatformIconList