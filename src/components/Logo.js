import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <div>
      <Link href={"/"} className="flex items-center space-x-2">
        <Image
          src="/sm-logo.png"
          alt={"logo"}
          width={50}
          height={50}
        />
        <Image
          src="/logo.png"
          alt={"logo"}
          width={205}
          height={100}
          className="hidden sm:inline-block"
        />
      </Link>
    </div>
  )
}
