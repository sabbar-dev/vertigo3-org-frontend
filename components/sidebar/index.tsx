import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="column-left logo">
      <Link href="/">
        <img
          className="img-fluid"
          src="/images/vertigo3-orange-logo.png"
          alt=""
        />
      </Link>
    </div>
  )
}
