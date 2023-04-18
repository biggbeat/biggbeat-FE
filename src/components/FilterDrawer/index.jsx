import { useState } from 'react'
import { useEffect } from 'react'
import FilterDrawerUI from './FilterDrawerUI'

const FitlerDrawer = ({
  //states
  openDrawer = false,
  sizeFilter = [],
  brandFilter,
  //func
  handleDrawer,
  handleBrandFilter,
  handleSizeFilter,
}) => {
  return (
    <FilterDrawerUI
      //states
      open={openDrawer}
      sizeFilter={sizeFilter}
      brandFilter={brandFilter}
      //func
      handleSizeFilter={handleSizeFilter}
      handleDrawer={handleDrawer}
      handleBrandFilter={handleBrandFilter}
    />
  )
}
export default FitlerDrawer
