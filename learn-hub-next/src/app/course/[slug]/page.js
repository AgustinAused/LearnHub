import ArticulCourse from '@/components/Course/ArticulCourse';
import React from 'react'

export default function page({params}) {

console.log(params.slug);
  return (
    <div className='my-28'>
        {/* <ArticulCourse course={course}/> */}
        <ArticulCourse course={params.slug} />
    </div>
  );
}

