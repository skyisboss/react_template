import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { storeStatus } from '@/store/slices/auth.slice';

interface Props {}
const Home: React.FC = (props: Props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		// 模拟请求
		// const res = dispatch(storeStatus() as any);
  }, []);

	return (
		<div className="App">
			<div className="container mx-auto my-20">
				<h1 className="flex bg-red-400 text-3xl font-bold underline">
					Hello tailwindcss !
				</h1>
				<Button variant="contained">mui</Button>
			</div>
		</div>
	)
}
export default Home
