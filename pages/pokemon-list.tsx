import Link from 'next/link';
export default function PokemonList() {
  return (
    <div>
      <Link href="/">
        <p>トップに戻る</p>
      </Link>
      <p>ポケモンリスト</p>
    </div>
  )
}
