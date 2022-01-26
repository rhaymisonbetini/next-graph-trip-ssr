import * as S from './styles'
import { useRouter } from 'next/router'


const Main = () => {
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/home')
  }

  return (
    <S.Wrapper onClick={(e) => handleClick(e)}>
      <S.Logo src="../../../img/logo.svg"></S.Logo>
      <S.Title>Next.js With GraphQl and LeaFlet</S.Title>
      <S.Description>A Full Aplication</S.Description>
      <S.Illustration src="../../../img/hero-illustration.svg"></S.Illustration>
    </S.Wrapper>
  )
}
export default Main
