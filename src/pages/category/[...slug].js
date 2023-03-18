import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSlug } from '@/services/commosService'

const Category = (props) => {
  const router = useRouter()

  useEffect(() => {
    console.log('query : ', props)
  }, [])

  return <div>Category</div>
}

export default Category

export async function getServerSideProps(context) {
  let slug = getSlug(context.query.slug)
  return {
    props: {
      categoryName: slug,
    },
  }
}
