"use client"
import CommonError from "@/app/common/error"

export default function Error({ props }: { props: any }) {
  return <CommonError {...props} />
}
