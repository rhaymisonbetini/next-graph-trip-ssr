type props = {
  never: boolean
}

export default function Home({ never = 'teste' }: props) {
  return <div>Testando</div>
}
