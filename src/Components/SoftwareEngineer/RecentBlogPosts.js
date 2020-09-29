import React from 'react';
import Card from '../Card';

const RecentBlogPosts = () => {
  return (<div className='section blue-gradient'>
    <h2>RECENT BLOG POSTS</h2>
    <div className='grid'>
      <Card background='gray' buttonColor='white'
        title='Racial Applications'
        date='Sep 8, 2020'
        link='/blog/racial-applications'
        linkWords='VIEW THE POST'/>
      <Card background='gray' buttonColor='white'
        title='3 Tips to Land Your Next Coding Job'
        date='Sep 10, 2020'
        link='/blog/3-tips-to-land-your-next-coding-job'
        linkWords='VIEW THE POST'/>
    </div>
  </div>)
}
export default RecentBlogPosts;
