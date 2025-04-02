import Pagination from '@/components/doc-cmp/pagination';
import Sidebar from '@/components/doc-cmp/sidebar'
import TOC from '@/components/doc-cmp/toc';
import React from 'react'

const docsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div id='doc-content' className='min-h-screen h-full !max-w-full md:grid grid-cols-[240px_1fr_200px]'>
      <Sidebar/>
      <div className='flex-grow md:p-8 p-2.5 overflow-hidden'><div className='w-full max-w-5xl mx-auto space-y-10' >{children}
      <Pagination/>
        </div></div>
      <TOC/>
    </div>
  )
}

export default docsLayout