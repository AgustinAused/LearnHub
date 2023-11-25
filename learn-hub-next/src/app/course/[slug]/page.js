import ArticulCourse from '@/components/Course/ArticulCourse';
import React, { useEffect } from 'react'

export default function page({params}) {
  useEffect();

  return (
    <div className='my-28'>
        {/* <ArticulCourse course={course}/> */}
        <ArticulCourse course={params.slug} />
    </div>
  );
}

