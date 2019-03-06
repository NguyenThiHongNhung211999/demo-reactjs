import React, { Component } from 'react';
import Course from './components/Course';

class App extends Component {
  render() {
		const items=[
			{
				name:'ReactJS',
				time:'24h',
				free:true,
				desc:'ReactJS is very important'
			},
			{
			name:'ReactJS',
				time:'24h',
				free:true,
			},
			{
				name:'ReactJS',
				time:'24h',
				free:true,
			}
		];
		const elmCourses=items.map((item,index)=>
		<Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
		);
    return (
    	<div className="row">
				{elmCourses}
    	</div>
    );
  }
}

export default App;
