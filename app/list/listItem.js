import Link from "next/link"

export default function ListItem({content, id}) {
  return (
    <div className="list-item">
      <Link href={`/detail/${id}`}>{content}</Link>
    </div>
  )
}