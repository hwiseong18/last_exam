import Link from "next/link"

export default function ListItem({name, id}) {
  return (
    <div className="list-item">
      <Link href={`/detail/${id}`}>{name}</Link>
    </div>
  )
}