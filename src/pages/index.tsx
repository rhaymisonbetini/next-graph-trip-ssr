import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/LinkWrapper';

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Homer() {

  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={[]} />
    </>
  )
}

